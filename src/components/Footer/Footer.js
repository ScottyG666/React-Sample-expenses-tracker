import React from "react";

import './Footer.css';
import Card from "../UI/Card";
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    const repositoryURL = "https://github.com/ScottyG666/TBD";


    return (
        <Card className='footer' >
            <a  href={repositoryURL}
                target="_blank" rel="noreferrer"
                title="View this repository on GitHub!">
                    <h3>
                        Created By Scott Garcia
                        &nbsp;
                        <FaGithub />
                    </h3>
                    
                
            </a>
        </Card>
    );
}

export default Footer;