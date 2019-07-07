import React, { Component } from 'react';

import ComingSoon from 'react-coming-soon';

export default class App extends Component {
  render() {
    return (
      <div>
        <ComingSoon
          // image="https://react-coming-soon.maksv.me/default-image.jpeg"
          bgColor="#fff"
          textColor="#000"
          illustration="development"
        />
      </div>
    );
  }
}
