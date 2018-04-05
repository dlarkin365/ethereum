'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _generator = require('../ethereum/generator');

var _generator2 = _interopRequireDefault(_generator);

var _layout = require('../elements/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/davidlarkin/Code/ethereum/Veracity/pages/index.js?entry'; //curly braces as it's importing one component from the library
//import for the card & button component from the React Semantic library
//import the genreator instance
//Imports the header & foort from the components file

/*getInitialProps is a method that is defined by Next.js
using static defines a class function and assigns it to class itself not an instance (unlike Java)
Its required by Next.js so it can get the data wihtout having to render the Component
*/

var GeneratorList = function (_Component) {
  (0, _inherits3.default)(GeneratorList, _Component);

  function GeneratorList() {
    (0, _classCallCheck3.default)(this, GeneratorList);

    return (0, _possibleConstructorReturn3.default)(this, (GeneratorList.__proto__ || (0, _getPrototypeOf2.default)(GeneratorList)).apply(this, arguments));
  }

  (0, _createClass3.default)(GeneratorList, [{
    key: 'renderAppeals',

    //give a list of objects where each object represents a single card
    value: function renderAppeals() {
      var items = this.props.appeals.map(function (address) {
        return {
          header: address, //set the header to the address
          description: _react2.default.createElement(_routes.Link, { route: '/appeals/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }, 'View Appeal')),
          fluid: true //this allows the width to strech the width of container
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      });
    }

    /*
      render() {
        return  (
    
        )<div>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        <h3>Active Charities</h3>
        {this.renderAppeals()}
        <Button
          content="Create Charity Appeal"
          icon="add"//makes a plus symbol
          primary={true}//this add blue styling to the button
        />
        </div>
    
      );
    }
    */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, ' Open Appeals '), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: 'right',
        content: 'Create Appeal',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }))), this.renderAppeals()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var appeals;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _generator2.default.methods.getDeployedAppeals().call();

              case 2:
                appeals = _context.sent;
                return _context.abrupt('return', { appeals: appeals });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return GeneratorList;
}(_react.Component);

exports.default = GeneratorList;

/* Previous Code

class GeneratorList extends Component {
  async componentDidMount() {//componentDidMount is a React functionality but it dosn't work with Next.js
    const appeals = await generator.methods.getDeployedAppeals().call();

    console.log(appeals);
  }
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImdlbmVyYXRvciIsIkxheW91dCIsIkxpbmsiLCJHZW5lcmF0b3JMaXN0IiwiaXRlbXMiLCJwcm9wcyIsImFwcGVhbHMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckFwcGVhbHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRBcHBlYWxzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEEsQUFBQSxBQUFPLEFBQVE7Ozs7QSxBQUNmLEFBQVEsQUFBTTs7QUFDZCxBQUFPLEEsQUFBUCxBQUFzQjs7OztBQUN0QixBQUFPLEFBQVksQTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7cUZBSmtCO0FBQ1E7QUFDRDtBQUNOOztBQUV4Qzs7Ozs7SUFJTSxBOzs7Ozs7Ozs7O1NBV047OztvQ0FDa0IsQUFDaEI7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSSxtQkFBVyxBQUM5Qzs7a0JBQU8sQUFDRyxTQUFTLEFBQ2pCO3VDQUNFLEFBQUMsOEJBQUsscUJBQU4sQUFBeUI7d0JBQXpCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpDLEFBR0gsQUFDRSxBQUdKO2lCQVBLLEFBT0UsS0FQVCxBQUFPLEFBT08sQUFFZjtBQVRRLEFBQ0w7QUFGSixBQUFjLEFBWWQsT0FaYzs7MkNBWVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTtBQUdUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQXFCVSxBQUNSOzZCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO2lCQUFELEFBQ1UsQUFDUjtpQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdPLEFBQ0w7aUJBSkY7O29CQUFBO3NCQUxOLEFBR0UsQUFDRSxBQUNFLEFBU0g7QUFURztBQUNFLGlCQVJSLEFBQ0EsQUFDQSxBQWNHLEFBQUssQUFLVDs7Ozs7Ozs7Ozs7O3VCQXBFeUIsb0JBQUEsQUFBVSxRQUFWLEFBQWtCLHFCLEFBQWxCLEFBQXVDOzttQkFBdkQ7QTtpREFFQyxFQUFFLFNBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxpQixBLEFBMEU1Qjs7a0JBQUEsQUFBZTs7QUFFZiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGF2aWRsYXJraW4vQ29kZS9ldGhlcmV1bS9WZXJhY2l0eSJ9