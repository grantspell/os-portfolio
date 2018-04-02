import React from 'react';
import styled from 'styled-components';

// STYLES
const ContactWrapper = styled.div`
    display: flex;
`
const LinkedIn = styled.div`
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

const Contact = () => {
    return (
        <ContactWrapper>
            <LinkedIn className="projectContainer">
                <a href="mailto:spellGrant@gmail.com" rel="noopener noreferrer" >
                    <img className="projectIcon" src="https://i.imgur.com/zlij372.png" alt="spellGrant@gmail.com" />
                    <p>E-Mail</p>
                </a>
            </LinkedIn>
        </ContactWrapper>
    );
};

export default Contact;