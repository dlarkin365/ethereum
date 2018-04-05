import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../elements/layout';
import generator from '../../ethereum/generator';//used to call the contract
import web3 from '../../ethereum/web3';//import web3 to connect to the Ethereum network
import { Router } from '../../routes';//imports Router to redirect users to dynamic pages


class AppealNew extends Component {
  state = {
    minimumDonation: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState ({ loading: true, errorMessage: ''});

  try {
    const accounts = await web3.eth.getAccounts();
    await generator.methods
    .createAppeal(this.state.minimumDonation)
    .send({
        from: accounts[0]
    });

    Router.pushRoute ('/');
  } catch (err) {
    this.setState({errorMessage: err.message });
  }

    this.setState({ loading: false});
};

  render () {
    return (
      <Layout>
      <h3> Create Charity Appeal </h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
          <Form.Field>
            <label> Minimum Donation</label>
            <Input
            label="Ether CryptoCurrency(wei)"
            labelPosition="right"
            value= {this.state.minimumDonation}
            onChange={event =>
              this.setState ({ minimumDonation: event.target.value})}
            />
          </Form.Field>

        <Message error header="We have a problem" content={this.state.errorMessage} />
        <Button loading={this.state.loading} primary> Create Appeal</Button>
        </Form>
      </Layout>

    );
  }

}

export default AppealNew;
