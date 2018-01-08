import React, { Component } from 'react'
import styled from 'styled-components'

// COMPONENTS
import Header from './Header'
import Desktop from './Desktop'
import Dock from './Dock'

// STYLING
const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url(http://512pixels.net/downloads/macos-wallpapers/10-5.png);
    background-size: cover;
`

class Home extends Component {
    state = {
        windowOpen: false,
        appName: ''
    }

    openApplication = async (e) => {
        const name = e.target.name
        await this.setState({ windowOpen: true, appName: name })
        console.log(this.state)
    }

    closeApplication = async (e) => {
        const name = e.target.name
        await this.setState({ windowOpen: false, appName: name })
        console.log(this.state)
    }
    
    render() {
        return (
            <HomeWrapper>
                
                <Header />

                <Desktop openApplication={this.openApplication} closeApplication={this.closeApplication} windowOpen={this.state.windowOpen} appName={this.state.appName} />

                <Dock />
                
            </HomeWrapper>
        );
    }
}

export default Home;