import React from 'react'
import styled from 'styled-components'

// STYLING
const DockWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
    border-radius: 5px;
    height: 100px;
    width: 600px;
`

const Dock = () => {
    return (
        <DockWrapper>
            <div>icon</div>
            <div>icon</div>
            <div>icon</div>
        </DockWrapper>
    );
};

export default Dock;