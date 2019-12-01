import React, { useState } from "react";

import ComingSoon from "react-coming-soon";

import "./index.css";

export default function App() {
  return (
    <div>
      <ComingSoon
        title="E-CoDE (Empowerment through Computer Donation and Education)"
        subtitle="KIDS (Komputers for Developing Schools) is becoming E-CoDE. Coming soon:"
        bgColor="#03a9f4"
        textColor="#fafafa"
        date="Fri Dec 27 2019 00:00:00 GMT-0500 (Eastern Standard Time)"
        illustration="development"
      />
    </div>
  );
}
