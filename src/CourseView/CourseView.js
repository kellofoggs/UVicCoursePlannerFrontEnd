import React, {Component, useEffect, useRef} from 'react';
import cytoscape from 'cytoscape';
import './CourseView.css'

const GraphTest = () => {

  return (GraphWindow());

}

  
   
function GraphWindow(){

  



  var RenderDiv = <div id= "course-view-render-div">HELLO</div>;
  var mainDiv = <div id="main-div"> 
  <div id= "course-view-render-div">HELLO</div>
  </div>
  DrawGraph()
    // let graph = DrawGraph(document.getElementById("main-div"))

  // return (<div id= "course-view-render-div"></div>);
  return mainDiv;
}



function DrawGraph(){
  const graphRef = useRef(null);
  let nodes_arr = []
  for (let i = 0; i < myjson["nodes"].length; i++){
    nodes_arr.push(i);
  }
  console.log(nodes_arr)
  console.log(myjson["edges"])
  const cy = cytoscape({
    container: graphRef.current,
    
    elements: {
      nodes: nodes_arr


      ,
      edges: myjson["edges"]

      

    },
    // [
    //   { data: { id: 'a' } },
    //   { data: { id: 'b' } },
    //   {data: {id: 'c'}},
    //   {
    //     data: {
    //       id: 'ab',
    //       source: 'a',
    //       target: 'b'
    //     }
        
    //   },
    //   {
    //    data: {id: 'ac',
    //   source: 'a',
    //   target: 'c'
    //    }
    //  }
    //  ],
     layout: {
      name: 'breadthfirst'
     }
    })
    cy.center()

    // useEffect(cytoscape);

    return(cy);



}
   
// const drawGraph = () => {
// const cy = cytoscape({
//  container: graphRef.current,
 
//  elements: [
//    { data: { id: 'a' } },
//    { data: { id: 'b' } },
//    {data: {id: 'c'}},
//    {
//      data: {
//        id: 'ab',
//        source: 'a',
//        target: 'b'
//      }
     
//    },
//    {
//     data: {id: 'ac',
//    source: 'a',
//    target: 'c'
//     }
//   }
//   ]
//  })
//  cy.center();
// }

// useEffect(() => {
//  drawGraph()
// }, [])


// return (
//   <div id= "yo">
//   <div class= "graph" ref={graphRef} style={{width: '100vw', height: '100vh'}}>
//   </div>
// </div>);




export default GraphTest;

