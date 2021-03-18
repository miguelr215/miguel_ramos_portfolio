import React from 'react';
import { CgCloseO } from 'react-icons/cg';
import './ProjectDetails.css';

export default class ProjectDetails extends React.Component {
    render(){
        return(
            <div className="details_container">
                <CgCloseO />
                <div className="details">
                    <h3></h3>
                </div>
            </div>
        )
    };
};

