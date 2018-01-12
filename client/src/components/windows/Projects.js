import React from 'react';

const Projects = (props) => {
    return (
        <div>
            {props.projects.map(project => (
                <div className="projectContainer" key={project.id} id={project._id}>
                    <a href={project.liveURL} target="_blank" rel="noopener noreferrer" >
                        <img className="projectIcon" src={project.iconURL} alt={project.name} />
                        <p>{project.name}</p>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;