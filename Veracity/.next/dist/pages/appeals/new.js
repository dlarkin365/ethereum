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

var _layout = require('../../elements/layout');

var _layout2 = _interopRequireDefault(_layout);

var _generator = require('../../ethereum/generator');

var _generator2 = _interopRequireDefault(_generator);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/davidlarkin/Code/ethereum/Veracity/pages/appeals/new.js?entry'; //used to call the contract
//import web3 to connect to the Ethereum network
//imports Router to redirect users to dynamic pages


var AppealNew = function (_Component) {
  (0, _inherits3.default)(AppealNew, _Component);

  function AppealNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AppealNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AppealNew.__proto__ || (0, _getPrototypeOf2.default)(AppealNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumDonation: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _generator2.default.methods.createAppeal(_this.state.minimumDonation).send({
                  from: accounts[0]
                });

              case 8:

                _routes.Router.pushRoute('/');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:

                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AppealNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, ' Create Charity Appeal '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, ' Minimum Donation'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'Ether CryptoCurrency(wei)',
        labelPosition: 'right',
        value: this.state.minimumDonation,
        onChange: function onChange(event) {
          return _this3.setState({ minimumDonation: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'We have a problem', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, ' Create Appeal')));
    }
  }]);

  return AppealNew;
}(_react.Component);

exports.default = AppealNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FwcGVhbHMvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxheW91dCIsImdlbmVyYXRvciIsIndlYjMiLCJSb3V0ZXIiLCJBcHBlYWxOZXciLCJzdGF0ZSIsIm1pbmltdW1Eb25hdGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQXBwZWFsIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZSxBLEFBQXRCOzs7O0EsQUFDQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjLEE7Ozs7MkZBRjBCO0FBQ1Y7QUFDRDs7O0ksQUFHaEM7Ozs7Ozs7Ozs7Ozs7OztrTixBQUNKO3VCQUFRLEFBQ1csQUFDakI7b0JBRk0sQUFFUSxBQUNkO2VBSE0sQUFHRyxBO0FBSEgsQUFDTixhLEFBS0Y7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUVOOztzQkFBQSxBQUFLLFNBQVUsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh2QixBQUdULEFBQWUsQUFBK0I7O2dDQUhyQztnQ0FBQTt1QkFNYyxjQUFBLEFBQUssSUFObkIsQUFNYyxBQUFTOzttQkFBMUI7QUFORyxvQ0FBQTtnQ0FBQTsyQ0FPSCxBQUFVLFFBQVYsQUFDTCxhQUFhLE1BQUEsQUFBSyxNQURiLEFBQ21CLGlCQURuQixBQUVMO3dCQUNTLFNBVkQsQUFPSCxBQUVBLEFBQ0ksQUFBUztBQURiLEFBQ0YsaUJBSEU7O21CQU1OOzsrQkFBQSxBQUFPLFVBYkUsQUFhVCxBQUFrQjtnQ0FiVDtBQUFBOzttQkFBQTtnQ0FBQTtnREFlVDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQWZwQixBQWVULEFBQWMsQUFBbUI7O21CQUdqQzs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FsQlAsQUFrQlQsQUFBYyxBQUFXOzttQkFsQmhCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBcUJEO21CQUNSOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFFRSw0Q0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxzQ0FBQSxBQUFDO2VBQUQsQUFDTSxBQUNOO3VCQUZBLEFBRWMsQUFDZDtlQUFRLEtBQUEsQUFBSyxNQUhiLEFBR21CLEFBQ25CO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFVLEVBQUUsaUJBQWlCLE1BQUEsQUFBTSxPQURoQyxBQUNSLEFBQWUsQUFBZ0M7QUFMakQ7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVNKO0FBVEk7QUFDQSwyQkFRSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLHFCQUFvQixTQUFTLEtBQUEsQUFBSyxNQUF4RCxBQUE4RDtvQkFBOUQ7c0JBWkEsQUFZQSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDO29CQUFBO3NCQUFBO0FBQUE7U0FqQkosQUFDRSxBQUdFLEFBYUEsQUFLTDs7Ozs7QUFuRHFCLEEsQUF1RHhCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGF2aWRsYXJraW4vQ29kZS9ldGhlcmV1bS9WZXJhY2l0eSJ9