import React, { Component } from 'react'
import styled from 'styled-components'

//STYLING
const WindowsWrapper = styled.div`
    height: 350px;
    width: 500px;
    background-color: white;
    border-radius: 3px;
    margin: 100px;
`
const WindowTop = styled.div`
    height: 35px;
    width: 100%;
    border-radius: 3px 3px 0px 0px;
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
    h1 {
        font-size: 12px;
        color: black;
        text-align: center;
        width: 100%;
    }
`
const WindowLeft = styled.div`
    height: 315px;
    width: 25%;
    border-radius: 0px 0px 0px 3px;
    background-color: #F0F0F0;
`
const WindowRight = styled.div`
    height: 315px;
    width: 450px;
    border-radius: 0px 0px 3px 0px;
    float: right;
`

const Windows = (props) => {

    const closeApplication = (e) => {
        e.preventDefault();
        props.closeApplication(e);
    }
    
    return (
        <WindowsWrapper>
            <WindowTop>
                <button onClick={closeApplication}>X</button>
                <h1>{props.appName}</h1>
            </WindowTop>

            <WindowLeft>
                L
            </WindowLeft>

            <WindowRight className={props.appName}>
            </WindowRight>
        </WindowsWrapper>
    );
}

export default Windows;