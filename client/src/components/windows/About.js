import React from 'react';
import styled from 'styled-components';

// STYLES
const AboutWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 10px 10px 0px;
`

const About = () => {
    return (
        <AboutWrapper>
            <p>
                Hello! I am Grant Spell, a full stack web developer and software engineer.
                With an analytical and creative approach to programming, I am able to create dynamic
                and responsive pieces of software from concept to completion. I rely on sharp
                planning tactics that set a clear end goal, while being fluid enough to field
                incoming issues and bugs throughout the developmental process of each project.
            </p>
            <p>
                During development, I take advantage of a multitude of resources including
                technical documentation, forums and the tech community to resolve bugs and
                ensure I am publishing high quality code. I am adaptable and able to refactor
                consistently to provide reusable and semantically clean code, creating secure
                and maintainable programs.
            </p>
            <p>
                I am fueled by the sense of accomplishment that comes when a piece of software
                is executed fully, but also by the process of bringing syntax to life throughout
                each phase of a project's lifecycle. By incorporating my enthusiasm for front and
                back-end development, insatiable desire to learn, and persistent determination, 
                I am confident in taking on a broad spectrum of projects!
            </p>
        </AboutWrapper>
    );
};

export default About;