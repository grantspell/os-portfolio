import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import Windows from './Windows'

// STYLING
const DesktopWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
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
        width: 80px;
        align-items: center;

        p {
            margin: -5px;
        }
    }
    .folder {
        height: 80px;
    }
`

const Desktop = (props) => {

    const openApplication = (e) => {
        e.preventDefault();
        props.openApplication(e);
    }

    const closeApplication = (e) => {
        e.preventDefault();
        props.closeApplication(e);
    }

    return (
        <DesktopWrapper>
            <Folders>
                <div className="groupContainer">
                    <img className="folder" onClick={openApplication} name="about" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" />
                    <p>About</p>
                </div>
                <div className="groupContainer">
                    <img className="folder" onClick={openApplication} name="projects" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" />
                    <p>Projects</p>
                </div>
                <div className="groupContainer">
                    <img className="folder" onClick={openApplication} name="archive" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" />
                    <p>Archive</p>
                </div>
                <div className="groupContainer">
                    <img className="folder" onClick={openApplication} name="contact" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" />
                    <p>Contact</p>
                </div>
            </Folders>

            {props.windowOpen ? <Windows closeApplication={closeApplication} appName={props.appName} /> : null}

        </DesktopWrapper>
    );
}

export default Desktop;