import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import Button from "../navbar/Button"
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'


const Container = styled.div`
    height: 10.5625rem;
 
    background: #FCF5F0;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 17rem;
    } 
`

const StyledTitle = styled.div`
    /* Short headline */
    
    height: 3rem;
    color: #073233;
    margin-bottom: 3.8125rem;
    margin-top: 3.75rem;
    margin-left: 10.3125rem;
    @media (max-width: 991px) {
        margin: 0;
        margin-top: 4.3125rem;
        text-align: center;
        display: flex;
        justify-content: center;
    } 

    > h1 {
        
     
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 1.2em;
        text-align: center;
        //letter-spacing:  -0.0125em;
        @media (max-width: 991px) {
            font-size: 1.875rem;
            margin: 0;
            text-align: center;
            justify-content: center;
    } 
    }
`

const StyledButton = styled(Button)`
    border: 2px solid #FF6938;
    
  
    margin-left: 58.625rem;
    margin-top: 3.8125rem;
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
        margin: 0;
        margin-left: 1rem;
        margin-right: 0;
        margin-top: 3.3125rem;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 60vw;
    } 
`

const StyledSecondButton = styled(Button)`
    margin-left: 42.125rem;
    margin-top: 3.875rem;
    padding: 0.6687em 1.525em 0.6687em 1.525em;
    font-family: Messina Sans bold;
    font-size: 1.125em;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        background: #E55A2D;

    }
    @media (max-width: 991px) {
        margin: 0;
        margin-top: 3.3125rem;
        margin-left: 13.5rem;
        
        text-align: center;
        justify-content: center;
    } 

    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 38vw;
    } 
    @media (min-width: 1140px) and (max-width: 1439px) {
        margin-left: 44vw;
    } 

`

const StyledRow = styled(Row)`
    margin-left: 0;
    margin-right: 0;
    display: flex;
    @media (max-width: 991px) {
        margin: 0;
        text-align: center;
        justify-content: center;
    } 
`

const StyledButtonCol = styled(Col)`
    
    
    
    @media (max-width: 991px) {
        display: flex;
        align-content: space-between;
        justify-content: space-between;
    }
`

const StyledButtonRow = styled(Row)`
    margin-left: 0;
    margin-right: 0;
    @media (max-width: 991px) {
        margin-top: 0;
        margin-bottom: 0;

        text-align: center;
        justify-content: center;
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




export const Join = () => {
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
            <BigContainer>
                <StyledRow>
                    <StyledTitle>
                        <h1>
                        Want to join us?
                        </h1>
                    </StyledTitle>
                    <StyledButton onClick={()=>window.location.href="mailto:info@secureki.com?subject=Request a demo&body=The message"} type="submit" background="#FCF5F0" font="#FF6938" weight="400">
                        {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_8" ? document.node.title :  null)}
                    </StyledButton>
                        <Link to='/careers'> 
                        <StyledSecondButton background="#FF6938" font="#FFFFFF">
                        {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_9" ? document.node.title :  null)}
                        </StyledSecondButton>
                        </Link>
                </StyledRow>
            </BigContainer>

            <SmallContainer> 
                <StyledButtonRow>
                    <StyledTitle>
                        <h1>
                        Want to join us?
                        </h1>
                    </StyledTitle>
                </StyledButtonRow>
                <StyledButtonRow>
                    <StyledButtonCol>
                        <StyledButton onClick={()=>window.location.href="mailto:info@secureki.com?subject=Request a demo&body=The message"} type="submit" background="#FCF5F0" font="#FF6938" weight="400">
                            {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_8" ? document.node.title :  null)}
                        </StyledButton>
                        <Link to='./careers'> 
                        <StyledSecondButton background="#FF6938" font="#FFFFFF">
                            {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_9" ? document.node.title :  null)}
                        </StyledSecondButton>
                        </Link>
                    </StyledButtonCol>
                </StyledButtonRow>
            </SmallContainer> 
        </Container>
        </div>
    )
}
