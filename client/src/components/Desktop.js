import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import Windows from './Windows'

// STYLING
const DesktopWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    font-family: 'Arimo', sans-serif;
`
const Folders = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 50vh;
    padding: 20px;

    .groupContainer {
        display: flex;
        flex-direction: column;
        width: 70px;
        align-items: center;

        p {
            margin: -5px;
        }
    }
    .folder {
        height: 70px;
    }

    @media (max-width: 1050px) {
        height: 100vh;
        justify-content: flex-start;
        padding: 0px;
        
        .groupContainer {
            margin: 20px;
        }
    }
`

const Desktop = (props) => {

    const openApplication = (e) => {
        e.preventDefault();
        props.openApplication(e);
    }

    const switchApplication = (e) => {
        const appName = e.target.name
        console.log(appName)
        props.switchApplication(appName);
    }

    const closeApplication = (e) => {
        e.preventDefault();
        props.closeApplication(e);
    }

    return (
        <DesktopWrapper>
            <Folders>
                <div className="groupContainer">
                    <img className="folder" onClick={openApplication} name="about" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" alt="About Folder"/>
                    <p>About</p>
                </div>
                <div className="groupContainer">
                    <img className="folder" onClick={openApplication} name="projects" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" alt="Projects Folder"/>
                    <p>Projects</p>
                </div>
                <div className="groupContainer">
                    <img className="folder" onClick={openApplication} name="archive" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" alt="Archive Folder"/>
                    <p>Archive</p>
                </div>
                <div className="groupContainer">
                    <img className="folder" onClick={openApplication} name="contact" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" alt="Contact Folder"/>
                    <p>Contact</p>
                </div>
            </Folders>

            {props.windowOpen ? <Windows switchApplication={switchApplication} closeApplication={closeApplication} appName={props.appName} projects={props.projects} archives={props.archives} /> : null}

        </DesktopWrapper>
    );
}

export default Desktop;