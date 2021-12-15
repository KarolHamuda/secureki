import React from 'react'
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import SingleOpening from './SingleOpening';
import SinglePE from './SinglePE';

const Container = styled.div`
    height: 78.3125rem;
    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
    }
    @media (max-width: 991px) {
        height: 56em;
    } 
`

const StyledTitle = styled(Row)`
    /* Short headline */
    padding-top: 4.5rem;
    
    min-height: 4.5rem;
    justify-content: center;
    display: flex;
    color: #073233;
    margin: 0;
    @media (max-width: 991px) {
            padding-top: 0;
            min-height: 0;
        } 
    > h1 {
        padding-bottom: 0.25rem;
        margin: 0;
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 0.8571428571428571em;
        text-align: center;
        //letter-spacing:  -0.008928571428571428em;
        @media (max-width: 991px) {
            font-size: 1.875rem;
            padding-bottom: 0;
            padding-top: 0;
        } 
    }
`

const Openings = () => {
    return (
        <Container>
                <StyledTitle>
                        <h1>
                        Current openings
                        </h1>
                </StyledTitle>
                <SingleOpening/>
                <SinglePE/>
            
        </Container>
    )
}

export default Openings
