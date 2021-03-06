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
    margin: 0px 0px 0px 20px;
`

class Header extends Component {
    state = {
        icon: 'Grant Spell',
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