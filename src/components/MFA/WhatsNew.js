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
`

const StyledTitle = styled(Col)`
    /* Short headline */
    width: 100vw;
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 5.125em;

    > h1 {
        position: absolute;
      
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5em;
        line-height: 1.2em;
        text-align: center;
        letter-spacing: -0.0125em;
    }
`

const StyledRow = styled(Row)`
    margin: 0;
    padding-left: 6.541666666666667em;
    padding-right: 6.541666666666667em;
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