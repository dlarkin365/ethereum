'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _AppealGenerator = require('./build/AppealGenerator.json');

var _AppealGenerator2 = _interopRequireDefault(_AppealGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//create the contract instance of the specific contract
var instance = new _web2.default.eth.Contract(
// pass the interface ABI as the first argument
JSON.parse(_AppealGenerator2.default.interface),
//2nd argument is the address of the deployed contract
'0x7e49D50C665F766c0A286d1d64af6A9EdBD5A494'); //imports instance which was created (not Constructor lowercase w)

//to tell web3 of an already deployed contract it has to be able to access
//its interface which is stored in the json file
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2dlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQXBwZWFsR2VuZXJhdG9yIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBaUIsQSxBQUFqQixBQUFPOzs7O0FBSVAsQUFBTyxBQUFxQjs7Ozs7O0FBRTVCO0FBQ0EsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYTtBQUM1QjtBQUNBLEtBQUEsQUFBSyxNQUFNLDBCQUZJLEFBRWYsQUFBMkI7QUFDM0I7QUFIRixBQUFpQixBQUlmLEFBSUYsK0NBZjRCOztBQUU1QjtBQUNBO2tCQVlBLEFBQWUiLCJmaWxlIjoiZ2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYXZpZGxhcmtpbi9Db2RlL2V0aGVyZXVtL1ZlcmFjaXR5In0=