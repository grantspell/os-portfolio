import React, { Component } from 'react'
import styled from 'styled-components'

// STYLING
const HeaderWrapper = styled.div`
    display: flex;
    background-color: gray;
    height: 20px;
    width: 100vw;
`
const Icon = styled.div`
    
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