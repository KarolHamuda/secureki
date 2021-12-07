import React from 'react'
import styled from 'styled-components'
import { Col, Row } from "react-bootstrap"
import pictures from '../../assets/about/culture/Group 603.png'
import test from '../../assets/about/culture/test.png'
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.div`
    height: 44.4375rem;
    background: #FFFFFF;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 45.6875rem;
    } 
`
const TextContainer = styled(Col)`
    padding-top: 8.1875em;
    
    padding-right: 0;

    @media (max-width: 991px) {
        padding-top: 0;
    } 

`

const ImageContainer = styled(Col)`
    padding: 0;
`
const StyledRow = styled(Row)`
    padding-left: 10.4375rem;
    
    margin-right: 0;
    margin-left: 0;
    @media (max-width: 991px) {
        padding: 0;
       
        
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        
        padding-left: 0;
        margin-left: auto;
        display: flex;
        justify-content: flex-end;
    }
`

const StyledTitle = styled.div`

    
    width: 7.770833333333333em;
    
    margin-bottom: 2.8125rem;
    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 2.3rem;
    /* or 120% */
    //letter-spacing:  -0.0313rem;

    display: flex;
    align-items: flex-end;
    

    color: #073233;
    @media (max-width: 991px) {
        font-size: 1.875rem;
        margin-bottom: 1.5625rem;
        align-items: flex-start;
    } 
`

const StyledContent = styled(Row)`
    width: 29.75rem;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    /* or 150% */
    //letter-spacing:  0.00625em;
    margin-bottom: 2em;
    color: #17494D;
    padding-left: 0.9375em;
    @media (max-width: 991px) {
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem;
        //letter-spacing:  0.0063rem;
        text-align: left;
        width: auto;
        margin-left: 0;
        margin-right: 1.125rem;
        padding-left: 0;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        width: auto;
        max-width: 29.75rem;
    }
`

const Styledimg = styled.img`
    max-width: 41.125em;
    
    @media (max-width: 991px) {
        max-width: 21.1875rem;
        min-width: 21.1875rem;
        margin-left: 1.125rem;
    }
`
const Wrapper = styled.div`
    max-width: 23.1375rem;
    overflow: hidden;
`

const TextRow = styled(Row)`
    padding-left: 0.8333333333333334em;
    max-width: 32rem;
    > b {
        font-family: Messina Sans bold;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 28rem;
    }
    @media (max-width: 991px) {
        
        padding: 0;
        margin: 0;
    }

`

const MobileDisplayer = styled.div`
    @media (min-width: 992px) {
        display: none;
    }
`

const DesktopDisplayer = styled.div`
    @media (max-width: 991px) {
        display: none;
    }
`

const Styledsvg = styled.img`
    margin-top: 5.5rem;
    margin-left: -5rem;
        max-width: 34.125em;
        @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 34em;
        margin-left: -3rem;
        margin-top: 6.5rem;
    }
`

const Culture = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiAbout {
        edges {
            node {
            id
            content
            title
            bold
            }
        }
        }
    }
    `)
    return (
        <>
        <Container>
            <StyledRow xs={1} lg={2}>
                <TextContainer xs lg={6} xxl={5}>
                    <StyledTitle>
                        Our Culture
                    </StyledTitle>
                    <StyledContent>
                        <TextRow>
                        <b>{data.allStrapiAbout.edges.map(document=>document.node.id === "About_3" ? document.node.bold :  null)}</b>
                        <br />
                        {data.allStrapiAbout.edges.map(document=>document.node.id === "About_3" ? document.node.content :  null)}
                        </TextRow>
                    </StyledContent>
                </TextContainer>
                <ImageContainer>
                    <>
                        <DesktopDisplayer>
                            <Styledsvg src={test} />
                        </DesktopDisplayer>
                        <MobileDisplayer>
                            <Wrapper>
                                <Styledimg src={pictures} />
                            </Wrapper>
                        </MobileDisplayer> 
                    </>
                </ImageContainer>
            </StyledRow>
        </Container>
            
        </>
    )
}

export default Culture
