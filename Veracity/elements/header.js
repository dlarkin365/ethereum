import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';


export default () => {
  return (
    <Menu style={{ marginTop: '20px' }}>
      <Link route="/">
        <a className="item">Veracity</a>
      </Link>

      <Menu.Menu position="right">
      <Link route="/">
        <a className="item">Charity Appeals</a>
      </Link>

      <Link route="/appeals/new">
        <a className="item">+</a>
      </Link>

      </Menu.Menu>
    </Menu>

  );
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
