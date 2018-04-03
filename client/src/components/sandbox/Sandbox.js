import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS

// STYLES
const SandboxW = styled.div`
    height: 100vh;
    width: 100vw;
    // background-color: rgba(0,0,0,.1);
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const FinderWindow = styled.div`
    height: 433px;
    width: 770px;
    border-radius: 4px;
    margin: 100px;
    box-shadow: 0px 20px 75px rgba(0,0,0,.5);
    font-family: 'Arimo', sans-serif;
`
const Top = styled.div`
    display: flex;
    height: 12.5%;
    width: 100%;
`
const Bottom = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
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
const WNav = styled.div`
    height: 87.5%;
    width: 23%;
    border-radius: 0px 0px 0px 4px;
    background-color: rgba(240, 240, 255, 0.675);    
    z-index: 555;
    border-right: .5px solid rgba(0, 0, 0, 0.245);
`
const WContent = styled.div`
    height: 87.5%;
    width: 77%;
    border-radius: 0px 0px 4px 0px;
    background-color: #FFFFFF;
`

class Sandbox extends Component {
    render() {
        return (
            <SandboxW>

                <FinderWindow>

                    <Top>

                        <WToolBar>

                            <TBTop>

                                <div className="closeButton"></div>
                                
                                <div className="status"><i className="icon" class="material-icons">home</i><p>grantspell</p></div>
                                
                            </TBTop>

                            <TBBottom>

                                    <input className="searchInput" name="search" value="Search"></input>
                                
                            </TBBottom>

                        </WToolBar>

                    </Top>

                    <Bottom>

                        <WNav>

                        </WNav>

                        <WContent>

                        </WContent>

                    </Bottom>

                </FinderWindow>

            </SandboxW>
        );
    }
}

export default Sandbox;