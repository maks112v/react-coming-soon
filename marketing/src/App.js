import React, { useState } from 'react';

import ComingSoon from 'react-coming-soon';
import { TwitterPicker } from 'react-color';
import DateTimePicker from 'react-datetime-picker';
import { StickyContainer, Sticky } from 'react-sticky';

import './index.css';

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
  MDBFooter,
  MDBInput,
} from 'mdbreact';

export default function App() {
  const [state, setstate] = useState({
    demo: false,
    generateDemo: false,
    comingSoon: {
      image: 'https://react-coming-soon.maksv.me/default-image.jpeg',
      bgColor: '#fff',
      textColor: '#fff',
      illustration: '',
      date: Date.now() + 1000000000,
    },
  });

  const [demoComingSoon, setDemoComingSoon] = useState({
    title: 'Coming Soon',
    subtitle: '',
    date: '',
    image: '',
    bgColor: '#fff',
    textColor: '#212121',
    illustration: 'web-development',
  });

  return (
    <div>
      {state.demo ? (
        <ComingSoon {...state.comingSoon}>
          <MDBBtn
            color="danger"
            onClick={() => setstate({ ...state, demo: false })}
          >
            Close Demo
          </MDBBtn>
        </ComingSoon>
      ) : null}
      {state.generateDemo ? (
        <ComingSoon {...demoComingSoon}>
          <MDBBtn
            color="danger"
            onClick={() => setstate({ ...state, generateDemo: false })}
          >
            Close Demo
          </MDBBtn>
        </ComingSoon>
      ) : null}
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    React Coming Soon Page
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Simple way to add a <b>Coming Soon</b> page to your next
                    react project.
                  </h6>
                  <MDBBtn
                    color="success"
                    onClick={() => setstate({ ...state, demo: true })}
                  >
                    Demo
                  </MDBBtn>
                  <MDBBtn
                    outline
                    color="white"
                    href="https://www.npmjs.com/package/react-coming-soon"
                  >
                    Get Started with NPM
                  </MDBBtn>
                </div>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
      <MDBContainer>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            What is react coming soon?
          </h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">
            It's a simple and customizable starter page to let others know you
            are working.
          </p>
          <MDBRow>
            <MDBCol md="4">
              <MDBIcon far icon="envelope" size="3x" className="blue-text" />
              <h5 className="font-weight-bold my-4">Collect Emails</h5>
              <p className="grey-text mb-md-0 mb-5">
                Give customers link to a current website or collect their emails
                with needing to build a new component. Get a mailing list before
                you launch your project.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="hands-helping" size="3x" className="cyan-text" />
              <h5 className="font-weight-bold my-4">Benefits</h5>
              <p className="grey-text mb-md-0 mb-5">
                Let us know what's going on and increase transparency. Let
                customers see a launch date or more information.
              </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBIcon icon="code" size="3x" className="red-text" />
              <h5 className="font-weight-bold my-4">How it works</h5>
              <p className="grey-text mb-md-0 mb-5">
                When ever you place this component anywhere on the page it will
                cover any thing and show a coming soon page. This cover can be
                removed so make sure to not show any data behind it.
              </p>
            </MDBCol>
          </MDBRow>
        </section>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Generate A Coming Soon Page
          </h2>

          <StickyContainer>
            <MDBRow>
              <MDBCol md="6" style={{ textAlign: 'center' }}>
                <MDBInput
                  label="Title"
                  value={demoComingSoon.title}
                  onChange={e =>
                    setDemoComingSoon({
                      ...demoComingSoon,
                      title: e.target.value,
                    })
                  }
                />
                <MDBInput
                  label="Subtitle"
                  value={demoComingSoon.subtitle}
                  onChange={e =>
                    setDemoComingSoon({
                      ...demoComingSoon,
                      subtitle: e.target.value,
                    })
                  }
                />
                <h6>Text Color</h6>
                <TwitterPicker
                  width="auto"
                  colors={[
                    '#212121',
                    '#FAFAFA',
                    '#3F51B5',
                    '#FF6900',
                    '#FCB900',
                    '#7BDCB5',
                    '#00D084',
                    '#8ED1FC',
                    '#03A9F4',
                    '#0693E3',
                    '#ABB8C3',
                    '#EB144C',
                    '#f44336',
                    '#F78DA7',
                    '#9900EF',
                  ]}
                  onChange={e =>
                    setDemoComingSoon({ ...demoComingSoon, textColor: e.hex })
                  }
                />
                <br />
                <h6>Background Color</h6>
                <TwitterPicker
                  width="auto"
                  colors={[
                    '#212121',
                    '#FAFAFA',
                    '#3F51B5',
                    '#FF6900',
                    '#FCB900',
                    '#7BDCB5',
                    '#00D084',
                    '#8ED1FC',
                    '#03A9F4',
                    '#0693E3',
                    '#ABB8C3',
                    '#EB144C',
                    '#f44336',
                    '#F78DA7',
                    '#9900EF',
                  ]}
                  onChange={e =>
                    setDemoComingSoon({ ...demoComingSoon, bgColor: e.hex })
                  }
                />
                <h6 className="mt-4">Finish Date</h6>
                <DateTimePicker
                  value={demoComingSoon.date}
                  onChange={e =>
                    setDemoComingSoon({ ...demoComingSoon, date: e })
                  }
                />
                <MDBInput
                  label="Image"
                  value={demoComingSoon.image}
                  onChange={e =>
                    setDemoComingSoon({
                      ...demoComingSoon,
                      image: e.target.value,
                    })
                  }
                />
                <h6 className="mt-4">Select an Illustration</h6>

                <MDBRow>
                  <MDBCol sm="6">
                    <div
                      onClick={() =>
                        setDemoComingSoon({
                          ...demoComingSoon,
                          illustration: '',
                        })
                      }
                    >
                      <img
                        src="https://react-coming-soon.maksv.me/404.svg"
                        style={{ width: '100%' }}
                        alt="404 SVG"
                      />
                      <p>None</p>
                    </div>
                  </MDBCol>
                  <MDBCol sm="6">
                    <div
                      onClick={() =>
                        setDemoComingSoon({
                          ...demoComingSoon,
                          illustration: 'development',
                        })
                      }
                    >
                      <img
                        src="https://react-coming-soon.maksv.me/under-development.png"
                        style={{ width: '100%' }}
                        alt="Under Development"
                      />
                      <p>Under Development</p>
                    </div>
                  </MDBCol>
                  <MDBCol sm="6">
                    <div
                      onClick={() =>
                        setDemoComingSoon({
                          ...demoComingSoon,
                          illustration: 'react',
                        })
                      }
                    >
                      <img
                        src="https://react-coming-soon.maksv.me/react.svg"
                        style={{ width: '100%' }}
                        alt="React SVG"
                      />
                      <p>React</p>
                    </div>
                  </MDBCol>
                  <MDBCol sm="6">
                    <div
                      onClick={() =>
                        setDemoComingSoon({
                          ...demoComingSoon,
                          illustration: 'git',
                        })
                      }
                    >
                      <img
                        src="https://react-coming-soon.maksv.me/git.svg"
                        style={{ width: '100%' }}
                        alt="Github"
                      />
                      <p>Github</p>
                    </div>
                  </MDBCol>
                  <MDBCol sm="6">
                    <div
                      onClick={() =>
                        setDemoComingSoon({
                          ...demoComingSoon,
                          illustration: 'planning',
                        })
                      }
                    >
                      <img
                        src="https://react-coming-soon.maksv.me/planning.svg"
                        style={{ width: '100%' }}
                        alt="Planning SVG"
                      />
                      <p>Planning</p>
                    </div>
                  </MDBCol>
                  <MDBCol sm="6">
                    <div
                      onClick={() =>
                        setDemoComingSoon({
                          ...demoComingSoon,
                          illustration: 'web-development',
                        })
                      }
                    >
                      <img
                        src="https://react-coming-soon.maksv.me/web-development.svg"
                        style={{ width: '100%' }}
                        alt="Web Development SVG"
                      />
                      <p>Web Development</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="6">
                <Sticky>
                  {({ style }) => (
                    <div
                      style={{ ...style, marginTop: 50 }}
                      className="mobileSticky"
                    >
                      <h5>First install our package</h5>
                      <code>npm i react-coming-soon</code>
                      <h5 style={{ marginTop: 20 }}>
                        Then import the package into your App.js
                      </h5>
                      <code>import ComingSoon from 'react-coming-soon'</code>
                      <h5 style={{ marginTop: 20 }}>
                        Customize and copy the code below into your project.
                      </h5>
                      <MDBBtn
                        color="info"
                        onClick={() =>
                          setstate({ ...state, generateDemo: true })
                        }
                      >
                        Live Preview
                      </MDBBtn>
                      <div
                        style={{
                          backgroundColor: 'black',
                          borderRadius: 5,
                          padding: '10px 7px',
                        }}
                      >
                        <code lang="javascript" style={{ color: 'white' }}>
                          {`<ComingSoon
    ${demoComingSoon.title && `title="${demoComingSoon.title}"`}
    ${demoComingSoon.subtitle && `subtitle="${demoComingSoon.subtitle}"`}
    ${demoComingSoon.image && `image="${demoComingSoon.image}"`}
    ${demoComingSoon.bgColor && `bgColor="${demoComingSoon.bgColor}"`}
    ${demoComingSoon.textColor && `textColor="${demoComingSoon.textColor}"`}
    ${demoComingSoon.date && `date="${demoComingSoon.date}"`}
    ${demoComingSoon.illustration &&
      `illustration="${demoComingSoon.illustration}"`}
    />
  `}
                        </code>
                      </div>
                    </div>
                  )}
                </Sticky>
              </MDBCol>
            </MDBRow>
          </StickyContainer>
        </section>
      </MDBContainer>
      <MDBFooter className="font-small mt-4">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Created by:
            <a href="https://maksv.me/"> maksv.me </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}
