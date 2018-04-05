pragma solidity ^0.4.17;

contract AppealGenerator {
    address[] public deployedAppeals;

    function createAppeal(uint minimum) public {
        address newAppeal = new Appeal(minimum, msg.sender);
        deployedAppeals.push(newAppeal);
    }

    function getDeployedAppeals() public view returns (address[]) {
        return deployedAppeals;
    }
}

contract Appeal {
    struct Request {
        string description;
        uint value;
        address destination;
        bool complete;
        uint donatorCount;
        mapping(address => bool) donatorsOk;
    }

    Request[] public spendrequests;
    address public owner;
    uint public minDonation;
    mapping(address => bool) public donators;
    uint public donatorsCount;

     modifier lockeddown() {
        require(msg.sender == owner);
        _;
    }

    function Appeal(uint minimum, address creator) public {
        owner = creator;
        minDonation = minimum;
    }

    function donate() public payable {
        require(msg.value > minDonation);

        donators[msg.sender] = true;
        donatorsCount++;
    }

    function createSpend(string description, uint value, address destination) public lockeddown {
        Request memory newRequest = Request({
           description: description,
           value: value,
           destination: destination,
           complete: false,
           donatorCount: 0
        });

        spendrequests.push(newRequest);
    }

    function approveSpend(uint index) public {
        Request storage request = spendrequests[index];

        require(donators[msg.sender]);
        require(!request.donatorsOk[msg.sender]);

        request.donatorsOk[msg.sender] = true;
        request.donatorCount++;
    }

    function finalizeSpend(uint index) public lockeddown {
        Request storage request = spendrequests[index];

        require(request.donatorCount > (donatorsCount / 2));
        require(!request.complete);

        request.destination.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minDonation,
          this.balance,
          spendrequests.length,
          donatorsCount,
          owner
        );
    }

    function getSpendrequestsCount() public view returns (uint) {
        return spendrequests.length;
    }
}
