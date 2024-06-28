import React, { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import './CourseGraph.css';
import klay from 'cytoscape-klay';
import coseBilkent from 'cytoscape-cose-bilkent';
import domNode from 'cytoscape-dom-node';
import nodeHtmlLabel from 'cytoscape-node-html-label';
import tidytree from "cytoscape-tidytree";
import cola from 'cytoscape-cola';
import spread from 'cytoscape-spread';
import elk from 'cytoscape-elk';
cytoscape.use(elk);

cytoscape.use(spread);
cytoscape.use( cola );

cytoscape.use(coseBilkent);
cytoscape.use(klay);
cytoscape.use(domNode);
spread(cytoscape);

nodeHtmlLabel(cytoscape); // register extension

cytoscape.use(coseBilkent);
cytoscape.use(klay);
cytoscape.use(tidytree);


let myjson = {
    "nodes": [
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "1",
            "sub_maps": null
        },
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "1",
            "sub_maps": null
        },
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "1",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "Mathematics 12",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "Pre-Calculus 12",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "Foundations of Math 12",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "course",
            "name": "MATH102",
            "quantity": "1.5",
            "sub_maps": null
        },
        {
            "type": "course",
            "name": "MATH109",
            "quantity": "1.5",
            "sub_maps": null
        },
        {
            "type": "course",
            "name": "MATH120",
            "quantity": "1.5",
            "sub_maps": null
        },
        {
            "type": "course",
            "name": "MATH100",
            "quantity": "1.5",
            "sub_maps": null
        },
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "1",
            "sub_maps": null
        },
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "1",
            "sub_maps": null
        },
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "2.0",
            "sub_maps": null
        },
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "1",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "Pre-Calculus 12",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "Earn a minimum grade of C in each of the following",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "Pre-Calculus",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "permission of the department.",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "Earn a minimum grade of C+ in each of the following",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "Pre-Calculus 11",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "or permission of the department.",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "requirement",
            "name": "Complete",
            "quantity": "Pre-Calculus",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "or permission of the department.",
            "quantity": "",
            "sub_maps": null
        },
        {
            "type": "other",
            "name": "Earn a minimum grade of C+ in each of the following",
            "quantity": "",
            "sub_maps": null
        }
    ],
    "edges": [
        {
            "source": 0,
            "target": 1
        },
        {
            "source": 0,
            "target": 2
        },
        {
            "source": 2,
            "target": 6
        },
        {
            "source": 6,
            "target": 10
        },
        {
            "source": 8,
            "target": 12
        },
        {
            "source": 10,
            "target": 14
        },
        {
            "source": 2,
            "target": 7
        },
        {
            "source": 10,
            "target": 15
        },
        {
            "source": 2,
            "target": 8
        },
        {
            "source": 2,
            "target": 9
        },
        {
            "source": 12,
            "target": 19
        },
        {
            "source": 12,
            "target": 20
        },
        {
            "source": 23,
            "target": 8
        },
        {
            "source": 15,
            "target": 8
        },
        {
            "source": 1,
            "target": 3
        },
        {
            "source": 1,
            "target": 4
        },
        {
            "source": 1,
            "target": 5
        },
        {
            "source": 7,
            "target": 11
        },
        {
            "source": 9,
            "target": 13
        },
        {
            "source": 11,
            "target": 16
        },
        {
            "source": 11,
            "target": 17
        },
        {
            "source": 11,
            "target": 18
        },
        {
            "source": 13,
            "target": 21
        },
        {
            "source": 13,
            "target": 22
        },
        {
            "source": 13,
            "target": 23
        },
        {
            "source": 18,
            "target": 8
        }
    ]
  }


function CourseGraph() {
  const graphRef = useRef(null);
  
  useEffect(() => {
    if (!graphRef.current) return;

    const json_nodes = myjson.nodes.map((node, i) => ({
      data: { id: i.toString(), ...node },
    }));

    const json_edges = myjson.edges.map((edge) => ({
      data: {
        id: `${edge.source}->${edge.target}`,
        source: edge.source.toString(),
        target: edge.target.toString(),
      },
    }));

    const cy = cytoscape({
      container: graphRef.current,
      elements: [],
      style: [
        {
          selector: 'node',
          style: {
            // 'background-color': 'yellow',
            "justify-content": 'center',
            'align-items': 'center',
            'label': 'data(id)',
            // 'shape': 'round-rectangle',
            'width': 'auto',
            'height': 'auto',
            // 'border': '1px solid #000000',

            // 'border-radius': '5px'

            
          },
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': 'cyan',
            'target-arrow-color': 'green',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
          },
        },
      ],
      // layout: {
      //   // name: 'breadthfirst',
      //   name: 'cose-bilkent',
      //   // name: 'elk',
      //   // name: 'grid',
      //   // name: "klay",
      //   roots: '#0'
      // } 
  });

    cy.domNode();
    // cy.zoomingEnabled(false);
    cy.center();
    
    for (let node of json_nodes){
        let div = document.createElement("div");
        div.className = "node";
        console.log(node)
        div.innerHTML = 
            `<table class='course_table'>
                  <tr>
                    <td>${node['data']['name']}</td>
                  </tr>
                  <tr>
                    <td>${node['data']['quantity']}</td>
                  </tr>
            </table>`;
        node["data"]["dom"] = div;
        cy.add(node);
    }

    for (let edge of json_edges){
      cy.add(edge);
    }




    
  // cy.layout().run();
   cy.layout( {
//       name: 'breadthfirst',
//       // name: 'cose-bilkent',
      name: 'elk',
//       // name: 'grid',
//       // name: "klay",
//       // name: 'tidytree',
//       name: 'cola',
//       roots: '#0'
  }).run();

//   var layout = cy.makeLayout({
//     name: "spread",
//     prelayout: {
//         name: "breadthfirst",
//         roots: '#0'
//     }
//   })

//   layout.run();

    cy.fit();
  cy.resize()

    

    // return () => cy.destroy();
  }, []);

  return <div ref={graphRef} id="cy" className="cytoscape-container"></div>;
}

export default CourseGraph;
