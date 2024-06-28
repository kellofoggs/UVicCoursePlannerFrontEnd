import logo from './logo.svg';
import './LandingPage.css';
import React, {Component} from 'react';
import cytoscape from 'cytoscape';

function LandingPage() {

    return(
        <div>
            <section class= "section">
            <h1>How It Works</h1>
            <p>This app uses a database based on information on the 
                University of Victoria's Undergraduate Calendar website. It connects courses to their prerequisites and displays these relationships as a rooted tree. Students can either upload their transcript to see what courses they are eligible to take, 
                or manually input the courses they have taken.
            </p>


            </section>

        </div>      
        
    );




}

export default LandingPage;
