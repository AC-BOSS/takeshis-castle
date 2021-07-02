import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import './footer.css';

export default function Footer(){
    return(
        <footer>
            <h3>Connect with Me</h3>
            <a href="https://www.linkedin.com/in/amartya-choudhary/"><LinkedInIcon className="icon" id="linkedIn"/></a>
            <a href="https://github.com/AC-BOSS" ><GitHubIcon className="icon" id="github"/></a>
            <a href="mailto:amartya.dps@gmai.com" ><EmailIcon className="icon" id="email" /></a>
            <p className="small">If you wish to add/edit something please contribute <a href="https://github.com/AC-BOSS/takeshis-castle">here</a>.</p>
            <p className="small">Picture Credits : <a href="https://keshiheads.co.uk">https://keshiheads.co.uk</a></p>
        </footer>
    )
}