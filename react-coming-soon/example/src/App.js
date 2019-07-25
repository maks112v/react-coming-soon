import React, { useState } from 'react';

import ComingSoon from 'react-coming-soon';

import './index.css';

export default function App() {
  return (
    <div>
      <ComingSoon
        title="Coming Soon asdfasdfasd asdfasdf"
        bgColor="#3f51b5"
        textColor="#fafafa"
        date="Fri Aug 30 2019 00:00:00 GMT-0400 (Eastern Daylight Time)"
        illustration="web-development"
      />
    </div>
  );
}
