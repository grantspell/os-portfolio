import React, { Component } from 'react'
import styled from 'styled-components'

// STYLING
const DesktopWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: -1;
    background-color: black;

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

class Desktop extends Component {
    render() {
        return (
            <DesktopWrapper>
                <Folders>
                    <div className="groupContainer">
                        <img className="folder" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" />
                        <p>About</p>
                    </div>
                    <div className="groupContainer">
                        <img className="folder" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" />
                        <p>Projects</p>
                    </div>
                    <div className="groupContainer">
                        <img className="folder" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" />
                        <p>Archive</p>
                    </div>
                    <div className="groupContainer">
                        <img className="folder" src="http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/256/Folder-icon.png" />
                        <p>Contact</p>
                    </div>
                </Folders>
            </DesktopWrapper>
        );
    }
}

export default Desktop;