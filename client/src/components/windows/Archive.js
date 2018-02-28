import React from 'react';
import styled from 'styled-components';

// STYLES
const ArchivesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Archive = (props) => {
    return (
        <ArchivesWrapper>
            {props.archives.map(archive => (
                <div className="projectContainer" key={archive.id} id={archive._id}>
                    <a href={archive.liveURL} target="_blank" rel="noopener noreferrer" >
                        <img className="projectIcon" src={archive.iconURL} alt={archive.name} />
                        <p>{archive.name}</p>
                    </a>
                </div>
            ))}
        </ArchivesWrapper>
    );
};

export default Archive;