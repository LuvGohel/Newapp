import "./App.css";
// import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App=(props)=> {
  let apikey = process.env.REACT_APP_NEWS_API;
  let pagesize = 15;
  // const[countrycode,setcountrycode]=useState("in");
  const[progress,setProgress]=useState(0);
  // console.log(countrycode);
    return (
      <div>
        <Router>
          <NavBar></NavBar>
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress} 
                  pagesize={pagesize} apikey={apikey}
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={setProgress} 
                  pagesize={pagesize} apikey={apikey}
                  key="general"
                   country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress} 
                apikey={apikey}
                  pagesize={pagesize}
                  key="business"
                   country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={ setProgress} 
                apikey={apikey}
                  pagesize={pagesize}
                  key="entertainment"
                   country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={ setProgress} 
                apikey={apikey}
                  pagesize={pagesize}
                   country="in"
                  key="health"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={ setProgress} 
                apikey={apikey}
                  pagesize={pagesize}
                   country="in"
                  key="science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={ setProgress} 
                apikey={apikey}
                  pagesize={pagesize}
                   country="in"
                  key="sports"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={ setProgress} 
                apikey={apikey}
                  pagesize={pagesize}
                   country="in"
                  key="technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
}
export default App;