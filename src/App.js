import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import cytoscape from 'cytoscape';
import DeskTopNav from './NavBar/NavBar.js';
// import GraphTest from './CourseView/CourseView.js';
import CourseGraph from './CourseGraph/CourseGraph.js';
import CourseList from './CourseList/CourseList.js';

function App() {
  return (
    
    <div className="App">
      <DeskTopNav />

      <div id= "graph-page"> 
          <CourseGraph />
          <CourseList/>
      </div>

 
    </div>
    
  );
}

export default App;
