import React from 'react'
import styled from 'styled-components'

// STYLING
const DockWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    color: white;
    border-radius: 5px 5px 0px 0px;
    height: 80px;
    width: 600px;

    .icon {
        height: 50px;
        transition: padding-bottom .25s;
    }
    .applicationText {
        visibility: hidden;
        background-color: rgba(0,0,0,7);
        color: white;
        text-align: center;
        border-radius: 5px;
    }
    .icon:hover {
        padding-bottom: 20px;
    }
    .icon:hover .applicationText {
        visibility: visible;
    }
`

const Dock = () => {
    return (
        <DockWrapper>
            <div>
                <a href="https://www.linkedin.com/in/grantspell/" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" alt="LinkedIn"/></a>
                {/* <p className="applicationText">LinkedIn</p> */}
            </div>
            <div>
                <a href="https://github.com/grantspell" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" alt="GitHub"/></a>
                {/* <p className="applicationText">GitHub</p> */}
            </div>
            <div>
                <a href="mailto:spellGrant@gmail.com"><img className="icon" src="https://i.imgur.com/zlij372.png" alt="Email Me" /></a>
            </div>
            <div>
                <a href="https://drive.google.com/file/d/1Kl7Eex8_srwgSYDspyKkdRtiHNkXSVWA/view" target="_blank" rel="noopener noreferrer"><img className="icon" src="https://cdn1.iconfinder.com/data/icons/business-seo-vol-1/512/CV_Contract_Agreement_Resume_Paper_Document-512.png" alt="Resumé"/></a>
                {/* <p className="applicationText">Resumé</p> */}
            </div>
        </DockWrapper>
    );
};

export default Dock;