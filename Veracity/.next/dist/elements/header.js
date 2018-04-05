'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/davidlarkin/Code/ethereum/Veracity/elements/header.js';

exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '20px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Veracity')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'Charity Appeals')), _react2.default.createElement(_routes.Link, { route: '/appeals/new', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { className: 'item', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, '+'))));
};

/*
export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">Veracity</a>
      </Link>

//content that goes to the right hand side of the Nav bar
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Appeals</a>
        </Link>

        <Link route="/appeals/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJMaW5rIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQVksQUFHckI7Ozs7OztrQkFBZSxZQUFNLEFBQ25CO3lCQUNFLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO2dCQUExQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsOEJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtnQkFBcEI7a0JBQUEsQUFDQTtBQURBO3FCQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FGRixBQUNBLEFBQ0UsQUFHRixxQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtnQkFBWjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtnQkFBYjtrQkFBQTtBQUFBO0tBWk4sQUFDRSxBQUtFLEFBS0EsQUFDRSxBQU9QO0FBcEJEOztBQXNCQSIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhdmlkbGFya2luL0NvZGUvZXRoZXJldW0vVmVyYWNpdHkifQ==