import React from 'react';
import styled from 'styled-components';

// STYLES
const ProjectsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Projects = (props) => {
    return (
        <ProjectsWrapper>
            {props.projects.map(project => (
                <div className="projectContainer" key={project.id} id={project._id}>
                    <a href={project.liveURL} target="_blank" rel="noopener noreferrer" >
                        <img className="projectIcon" src={project.iconURL} alt={project.name} />
                        <p>{project.name}</p>
                    </a>
                </div>
            ))}
        </ProjectsWrapper>
    );
};

export default Projects;