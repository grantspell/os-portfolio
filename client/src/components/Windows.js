import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import About from './windows/About'
import Projects from './windows/Projects'
import Archive from './windows/Archive'
import Contact from './windows/Contact'

//STYLING
const WindowsWrapper = styled.div`
    height: 350px;
    width: 500px;
    border-radius: 5px;
    margin: 100px;
    box-shadow: 0px 0px 100px rgba(0,0,0,.5);
    font-family: 'Arimo', sans-serif;

    @media (max-width: 1050px) {
        height: 80vh;
        width: 80vw;
    }
`
const WindowTop = styled.div`
    height: 35px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    background: linear-gradient(#EEEEEE, #D0D0D0);
    display: flex;
    align-items: center;
    
    .closeButton {
        color: red;
        background-color: red;
        margin-left: 10px;
        border-radius: 50%;
        width: 13px;
        height: 13px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
    }
    .closeButton:hover {
        color: black;
    }
    .Header {
        width: 100%;
        display: flex;
        flex-direction: columns;
        justify-content: center;
        align-items: center;
    }
    p {
        font-size: 12px;
        color: black;
        text-align: center;
        margin-left: 4px;
    }

    @media (max-width: 1050px) {
        height: 3%;        
    }
    `
const WindowBottom = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`
const WindowLeft = styled.div`
    height: 315px;
    width: 25%;
    border-radius: 0px 0px 0px 5px;
    background-color: rgba(240, 240, 240, .95);
    display: flex;
    flex-direction: column;

    .appList {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 18px;
        width: 100%;
    }
    .appList i {
        margin: 0px 4px 0px 10px;
    }

    @media (max-width: 1050px) {
        height: 95%;
    }
`
const WindowRight = styled.div`
    height: 315px;
    width: 450px;
    border-radius: 0px 0px 5px 0px;
    background-color: #FFFFFF;
    flex-wrap: wrap;

    .projectContainer {
        display: flex;
        flex-direction: column;
        width: 80px;
        align-items: center;
        margin: 10px;

        p {
            margin: 3px;
        }
    }
    .projectIcon {
        height: 70px;
    }

    @media (max-width: 1050px) {
        height: 95%;
        width: 100%;
    }
`

const Windows = (props) => {

    const switchApplication = (e) => {
        e.preventDefault();
        props.switchApplication(e);
    }

    const closeApplication = (e) => {
        e.preventDefault();
        props.closeApplication(e);
    }

    const appName = props.appName;

    return (
        <WindowsWrapper>
            <WindowTop>
                <div className="closeButton" onClick={closeApplication}>
                    x
                </div>
                <div className="Header">
                    <i class="material-icons">folder</i>
                    <p>{props.appName}</p>
                </div>
            </WindowTop>

            <WindowBottom>
                <WindowLeft>
                    
                    <div className="foldersLabel">
                        <p>Folders</p>
                    </div>

                    <div onClick={switchApplication} name="About" className="appList">
                        <i class="material-icons">folder</i>
                        <p>About</p>
                    </div>

                    <div onClick={switchApplication} name="Projects" className="appList">
                        <i class="material-icons">folder</i>
                        <p>Projects</p>
                    </div>

                    <div onClick={switchApplication} name="Archive" className="appList">
                        <i class="material-icons">folder</i>
                        <p>Archive</p>
                    </div>

                    <div onClick={switchApplication} name="Contact" className="appList">
                        <i class="material-icons">folder</i>
                        <p>Contact</p>
                    </div>

                </WindowLeft>

                <WindowRight className={props.appName}>

                    {props.appName === "about" ? <About /> : props.appName === "projects" ? <Projects projects={props.projects} /> : props.appName === "archive" ? <Archive /> : props.appName === "contact" ? <Contact /> : null}

                </WindowRight>
            </WindowBottom>
        </WindowsWrapper>
    );
}

export default Windows;