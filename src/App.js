import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { AnimatePresence } from "framer-motion";
import backvideo from "./components/video/backvideo.mp4";

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: -1,
        }}
      >
        <source src={backvideo} type="video/mp4" />
      </video>
      <div className="container app__container">
        <div className="row app__row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app_main_content">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch Location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects}>
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/"></Redirect>
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
