import React, { Component } from 'react'
import axios from 'axios'
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
        appName: '',
        projects: [],
        archives: [],
    }

    componentWillMount = async () => {
        const projectsRes = await axios.get('/api/projects')
        const archivesRes = await axios.get('/api/archives')
        this.setState({
            projects: projectsRes.data,
            archives: archivesRes.data
        })        
    }
    
    openApplication = async (e) => {
        const name = e.target.name
        await this.setState({ windowOpen: true, appName: name })
        console.log(this.state)
    }

    switchApplication = async (appName) => {
        await this.setState({ appName: appName })
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

                <Desktop
                    openApplication={this.openApplication}
                    switchApplication={this.switchApplication}
                    closeApplication={this.closeApplication}
                    windowOpen={this.state.windowOpen}
                    appName={this.state.appName}
                    projects={this.state.projects}
                    archives={this.state.archives}
                />

                <Dock />
                
            </HomeWrapper>
        );
    }
}

export default Home;