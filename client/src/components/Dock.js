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
                <img className="icon" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" />
                {/* <p className="applicationText">LinkedIn</p> */}
            </div>
            <div>
                <img className="icon" src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" />
                {/* <p className="applicationText">GitHub</p> */}
            </div>
            <div>
                <img className="icon" src="https://cdn1.iconfinder.com/data/icons/business-seo-vol-1/512/CV_Contract_Agreement_Resume_Paper_Document-512.png" />
                {/* <p className="applicationText">Resumé</p> */}
            </div>
        </DockWrapper>
    );
};

export default Dock;