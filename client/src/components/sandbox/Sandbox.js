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
    border-radius: 5px;
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
    z-index: 999;
    border-bottom: .5px solid rgba(0,0,0, 0.245);

    .closeButton {
        height: 11px;
        width: 11px;
        background-color: rgba(255, 78, 78, 1);
        border-radius: 50%;
        margin: 10px 0px 0px 10px;
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

                            <div className="closeButton"></div>

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