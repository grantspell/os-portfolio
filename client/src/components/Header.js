import React, { Component } from 'react'
import styled from 'styled-components'

// STYLING
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0,0,0,.7);
    color: white;
    height: 20px;
    width: 100vw;
`
const Icon = styled.div`
    margin-left: 20px;
`

class Header extends Component {
    state = {
        icon: 'G',
        application: '',

    }

    render() {
        return (
            <HeaderWrapper>

                <Icon>{this.state.icon}</Icon>
                
            </HeaderWrapper>
        );
    }
}

export default Header;