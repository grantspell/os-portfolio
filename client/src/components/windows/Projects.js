import React from 'react';
import styled from 'styled-components';

// STYLES
const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Projects = (props) => {
    return (
        <ProjectsWrapper>
            {props.projects.map(project => (
                <Container className="projectContainer" key={project.id} id={project._id}>
                    <a href={project.liveURL} target="_blank" rel="noopener noreferrer" >
                        <img className="projectIcon" src={project.iconURL} alt={project.name} />
                        <p>{project.name}</p>
                    </a>
                </Container>
            ))}
        </ProjectsWrapper>
    );
};

export default Projects;