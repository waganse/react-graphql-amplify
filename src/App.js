import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  state = {
    message: '',
    messages: []
  };

  render() {
    const { messages } = this.state;
    console.log({ messages });
    return (
      <div>Test</div>
    );
  }
}

export default withAuthenticator(App, {includeGreetings: true});
