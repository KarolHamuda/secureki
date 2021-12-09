import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Button from "../navbar/Button"

import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.div`
    height: 22.875em;
    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    background: #FCF5F0;
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 17rem;
    } 
`

const StyledTitle = styled(Col)`
    /* Short headline */
    
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 2em;
    margin-top: 6.75em;
    @media (max-width: 991px) {
        margin-top: 4.3125rem;
        margin-bottom: 2.5rem;
    } 

    > h1 {
        position: absolute;
     
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5em;
        line-height: 1.2em;
        text-align: center;
        //letter-spacing:  -0.0125em;
        @media (max-width: 991px) {
            font-size: 1.875rem;
            font-weight: 700;
            line-height: 2.4375rem;
            //letter-spacing:  0rem;
            text-align: center;
            margin-bottom: 0;
        } 
    }
`

const StyledButton = styled(Button)`
    border: 2px solid #FF6938;
    border-radius: 40px;
    -moz-border-radius: 40px;
    -webkit-border-radius: 40px;
    
    
    
    padding: 0.5687em 1.425em 0.5687em 1.425em;
    font-family: Messina Sans bold;
    font-size: 1.125em;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background: #E55A2D;
        color: #FFFFFF;
        border-color: #E55A2D;
    }
    @media (max-width: 991px) {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 9em;
    } 
`

const StyledSecondButton = styled(Button)`
    
   
    padding: 0.6687em 1.525em 0.6687em 1.525em;
    font-family: Messina Sans bold;
    font-size: 1.125em;
    transition: 0.3s;
    
    &:hover {
        background: #E55A2D;
        
    }
    @media (max-width: 991px) {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0;
    } 
`

const StyledCol = styled(Col)`
    justify-content: center;
    display: flex;
    padding-left: 0.625rem;
    @media (max-width: 991px) {
        align-content: space-between;
        justify-content: space-between;
    }
`

const StyledRow = styled(Row)`
    margin-left: auto;
    margin-right: auto;
    max-width: 25.9375rem;
    white-space: nowrap;
    @media (max-width: 991px) {
        margin-top: 0;
        margin-bottom: 0;
        justify-content: space-between;
        align-content: space-between;
    } 
`

const StyledButtonRow = styled(Row)`
    margin-left: auto;
    margin-right: auto;
    max-width: 24.5375rem;
    white-space: nowrap;
    @media (max-width: 991px) {
        margin-top: 0;
        margin-bottom: 0;
        justify-content: space-between;
        align-content: space-between;
    } 
`

const SmallContainer = styled.div`
    @media (min-width: 992px) {
        display: none;
    } 
`

const BigContainer = styled.div`
    @media (max-width: 991px) {
        display: none;
    } 
`

export const GetStarted = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiButtons {
            edges {
              node {
                id
                title
              }
            }
          }
    }
    `)
    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>
            <StyledRow>
                <StyledTitle>
                    <h1>
                    Ready to get started?
                    </h1>
                </StyledTitle>
            </StyledRow>
            <SmallContainer>
                <StyledRow>
                    <StyledCol>
                    
                        <StyledSecondButton onClick={()=>window.location.href="mailto:info@secureki.com?subject=Request a demo&body=The message"} type="submit" background="#FF6938" font="#FFFFFF">
                            {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_4" ? document.node.title :  null)}
                        </StyledSecondButton>
                   
                        <StyledButton onClick={()=>window.location.href="mailto:info@secureki.com?subject=Request a demo&body=The message"} type="submit" background="#FCF5F0" font="#FF6938" weight="400">
                            {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_5" ? document.node.title :  null)}
                        </StyledButton>
                    </StyledCol>
                </StyledRow>
            </SmallContainer>
            <BigContainer>
                <StyledButtonRow>
                    <StyledCol>
                        
                        <StyledSecondButton onClick={()=>window.location.href="mailto:info@secureki.com?subject=Request a demo&body=The message"} type="submit" background="#FF6938" font="#FFFFFF">
                            {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_4" ? document.node.title :  null)}
                        </StyledSecondButton>
                        
                    
                    </StyledCol><StyledCol>
                        <StyledButton onClick={()=>window.location.href="mailto:info@secureki.com?subject=Request a demo&body=The message"} type="submit" background="#FCF5F0" font="#FF6938" weight="400">
                            {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_5" ? document.node.title :  null)}
                        </StyledButton>
                    </StyledCol>
                </StyledButtonRow>
            </BigContainer>

        </Container>
        </div>
    )
}
