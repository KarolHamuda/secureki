import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Card from './Card.js'

const Container = styled.div`
    height: 49.375em;
    padding-top: 4.375em;
    background: #FFFFFF;
    max-width: 90em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 88.75rem;
        padding-bottom: 0;
        padding-top: 0;
    } 
`

const StyledTitle = styled(Col)`
    /* Short headline */
    width: 100vw;
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 5.125em;

    
    @media (max-width: 991px) {
        
        height: 2em;
    }

    > h1 {
        position: absolute;
      
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5em;
        line-height: 1.2em;
        text-align: center;
        letter-spacing: -0.0125em;
        @media (max-width: 991px) {
        
            font-size: 1.875rem;
        }
    }
`

const StyledRow = styled(Row)`
    margin: 0;
    padding-left: 6.541666666666667em;
    padding-right: 6.541666666666667em;
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const StoriesCol = styled(Col)`
    padding: 0; 
    justify-content: center; 
    display: flex;
`





export const WhatsNew = () => {
    return (
        <Container>
            <Row style={{textAlign: "center", marginLeft: 0, marginRight: 0}}>
                <StyledTitle>
                    <h1>
                    See what’s new at SecureKi
                    </h1>
                </StyledTitle>
            </Row>
            <StyledRow>
                <StoriesCol>
                    <Card 
                    title="Learn how our MFA works"
                    description="The company invested $4 billion in a robotics and AI research institute to create safer"
                    link="→ Get the eBook"
                    />
                </StoriesCol>
                <StoriesCol>
                <Card 
                    title="More on PAM Case Study"
                    description="The company invested $4 billion in a robotics and AI research institute to create safer"
                    link="→ Get the eBook"
                    />
                </StoriesCol>
                <StoriesCol>   
                <Card 
                    title={"SECUREKI is a leading platform\u00A0service in Asia"}
                    description="The company invested $4 billion in a robotics and AI research institute to create safer"
                    link="→ Read the Article"
                    />
                </StoriesCol>
            </StyledRow>
            
        </Container>
    )
}