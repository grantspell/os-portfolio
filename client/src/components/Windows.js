import React, { Component } from 'react'
import styled from 'styled-components'

//STYLING
const WindowsWrapper = styled.div`
    height: 500px;
    width: 300px;
    background-color: white;
    border-radius: 3px;
    margin: 100px;
`

const Windows = (props) => {

    const closeApplication = (e) => {
        e.preventDefault();
        props.closeApplication(e);
    }
    
    return (
        <WindowsWrapper>
            <div className={props.appName}>
                <button onClick={closeApplication}>CLOSE</button>
                <h1>{props.appName}</h1>
            </div>
        </WindowsWrapper>
    );
}

export default Windows;