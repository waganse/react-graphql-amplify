import React, { Component } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>Test</div>
    );
  }
}

export default withAuthenticator(App, {includeGreetings: true});
