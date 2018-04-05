import React, {Component} from 'react';//curly braces as it's importing one component from the library
import {Card, Button} from 'semantic-ui-react';//import for the card & button component from the React Semantic library
import generator from '../ethereum/generator';//import the genreator instance
import Layout from '../elements/layout';//Imports the header & foort from the components file
import { Link } from '../routes';
/*getInitialProps is a method that is defined by Next.js
using static defines a class function and assigns it to class itself not an instance (unlike Java)
Its required by Next.js so it can get the data wihtout having to render the Component
*/
class GeneratorList extends Component {

static async getInitialProps() {
    const appeals = await generator.methods.getDeployedAppeals().call();

    return { appeals };
}




//give a list of objects where each object represents a single card
  renderAppeals() {
  const items = this.props.appeals.map(address => {
    return {
      header: address, //set the header to the address
      description: (
        <Link route={`/appeals/${address}`}>
          <a>View Appeal</a>
        </Link>
      ),
      fluid: true //this allows the width to strech the width of container
    };
  });

  return <Card.Group items={items} />;
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

render () {
  return (
  <Layout>
  <div>
    <h3> Open Appeals </h3>

    <Link route="/campaigns/new">
      <a>
        <Button
          floated="right"
          content="Create Appeal"
          icon="add circle"
          primary
        />
      </a>
    </Link>

    {this.renderAppeals()}

  </div>
  </Layout>
);
}
}

export default GeneratorList;

/* Previous Code

class GeneratorList extends Component {
  async componentDidMount() {//componentDidMount is a React functionality but it dosn't work with Next.js
    const appeals = await generator.methods.getDeployedAppeals().call();

    console.log(appeals);
  }
*/
