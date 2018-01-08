import React from 'react'
import styled from 'styled-components'

//STYLING
const WindowsWrapper = styled.div`
    height: 350px;
    width: 500px;
    border-radius: 5px;
    margin: 100px;
    box-shadow: 0px 0px 100px rgba(0,0,0,.5);
    font-family: 'Arimo', sans-serif;
`
const WindowTop = styled.div`
    height: 35px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    background: linear-gradient(#EEEEEE, #D0D0D0);
    display: flex;
    align-items: center;
    
    button {
        color: red;
        background-color: red;
        margin-left: 10px;
        border-radius: 100%;
        border: none;
        size: 10px;
        font-size: 10px;
        text-align: center;
    }
    button:hover {
        color: black;
    }
    p {
        font-size: 12px;
        color: black;
        text-align: center;
        width: 100%;
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
    background-color: rgba(240, 240, 240, .9);
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
    
    return (
        <WindowsWrapper>
            <WindowTop>
                <button onClick={closeApplication}>X</button>
                <p>{props.appName}</p>
            </WindowTop>

            <WindowBottom>
                <WindowLeft>
                    <label htmlFor="folders">Folders</label>
                    <ul>
                        <li onClick={switchApplication} name="about">About</li>
                        <li onClick={switchApplication} name="projects">Projects</li>
                        <li onClick={switchApplication} name="archive">Archive</li>
                        <li onClick={switchApplication} name="contact">Contact</li>
                    </ul>
                </WindowLeft>

                <WindowRight className={props.appName}>
                    {props.projects.map(project => (
                        <div className="projectContainer" key={project.id} id={project._id}>
                            <a href={project.liveURL} target="_blank" rel="noopener noreferrer" >
                                <img className="projectIcon" src={project.iconURL} alt={project.name} />
                                <p>{project.name}</p>
                            </a>
                        </div>
                    ))}
                </WindowRight>
            </WindowBottom>
        </WindowsWrapper>
    );
}

export default Windows;