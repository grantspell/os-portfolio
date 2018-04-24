import React from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable'

// COMPONENTS
import About from './windows/About'
import Projects from './windows/Projects'
import Archive from './windows/Archive'
import Contact from './windows/Contact'

//STYLING
const WindowsWrapper = styled.div`
    height: 433px;
    width: 770px;
    border-radius: 4px;
    margin: 100px;
    box-shadow: 0px 20px 75px rgba(0,0,0,.5);
    font-family: 'Arimo', sans-serif;

    @media (max-width: 1020px) {
        height: 60vh;
        width: 90vw;
        margin: 10px;
    }
`
const WindowTop = styled.div`
    height: 12.5%;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    background: linear-gradient(#EEEEEE, #D0D0D0);
    display: flex;
    align-items: center;
    `
const WToolBar = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(#EDEDED, #D0D0D0);
    border-radius: 4px 4px 0px 0px;
    z-index: 998;
    border-bottom: .5px solid rgba(0,0,0, 0.245);
    `
const TBTop = styled.div`
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .closeButton {
        height: 11px;
        width: 11px;
        background-color: rgba(255, 78, 78, 1);
        border-radius: 50%;
        margin: 0px 0px 0px 1%;
        color: rgba(255, 78, 78, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 11px;
    }
    .closeButton:hover {
        color: black;
    }
    .status {
        margin: 0px 0px 0px 45%;
        width: 50%;
        display: flex;
        align-items: center;
    }
`
const TBBottom = styled.div`
    height: 60%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .searchInput {
        color: rgba(0, 0, 0, 0.5);
        text-align: center;
        border-radius: 4px;
        z-index: 999;
        margin: 0px 10px 0px 0px;
        height: 50%;
        width: 27%;
        font-size: 12px;
        -webkit-transition-property: all;
        -webkit-transition-duration: .350s;
        transition-property: all;
        transition-duration: .350s;
    }
    .searchInput:focus {
        text-align: left;
    }
`
const WindowBottom = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`
const WindowLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 87.5%;
    width: 23%;
    background-color: rgba(240, 240, 255, 0.675);    
    border-radius: 0px 0px 0px 4px;
    border-right: .5px solid rgba(0, 0, 0, 0.245);
    z-index: 555;

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

    @media (max-width: 1020px) {
        width: 30%;
    }
`
const WindowRight = styled.div`
    height: 87.5%;
    width: 77%;
    border-radius: 0px 0px 4px 0px;
    background-color: #FFFFFF;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: scroll;

    .projectContainer {
        display: flex;
        flex-direction: column;
        width: 80px;
        justify-content: center;
        align-items: center;
        margin: 10px;

        p {
            text-align: center;
        }
    }
    .projectIcon {
        height: 70px;
    }

    @media (max-width: 1020px) {
        width: 70%;
    }
`

const Windows = (props) => {

    const switchApplication = (e) => {
        e.preventDefault();

        let application = e.target.value;
        console.log(application);
        debugger;
        props.switchApplication(application);
    }

    const closeApplication = (e) => {
        e.preventDefault();
        props.closeApplication(e);
    }


    return (
        <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>

            <WindowsWrapper>

                <WindowTop className="handle">

                    <WToolBar>

                        <TBTop>

                            <div className="closeButton" onClick={closeApplication}>x</div>

                            <div className="status"><i className="icon" class="material-icons">folder</i><p>{props.appName}</p></div>

                        </TBTop>

                        <TBBottom>

                            <input className="searchInput" name="search" value="Search"></input>

                        </TBBottom>

                    </WToolBar>

                </WindowTop>

                <WindowBottom>

                    <WindowLeft>

                        <div className="foldersLabel">
                            <p>Folders</p>
                        </div>

                        <div onClick={switchApplication} value="about" className="appList">
                            <i class="material-icons">folder</i>
                            <p>About</p>
                        </div>

                        <div onClick={switchApplication} value="projects" className="appList">
                            <i class="material-icons">folder</i>
                            <p>Projects</p>
                        </div>

                        <div onClick={switchApplication} value="archive" className="appList">
                            <i class="material-icons">folder</i>
                            <p>Archive</p>
                        </div>

                        {/* <div onClick={switchApplication} value="contact" className="appList">
                            <i class="material-icons">folder</i>
                            <p>Contact</p>
                        </div> */}

                    </WindowLeft>

                    <WindowRight className={props.appName}>

                        {props.appName === "about" ? <About /> : props.appName === "projects" ? <Projects projects={props.projects} /> : props.appName === "archive" ? <Archive archives={props.archives} /> : props.appName === "contact" ? <Contact /> : null}

                    </WindowRight>

                </WindowBottom>

            </WindowsWrapper>

        </Draggable>
    );
}

export default Windows;