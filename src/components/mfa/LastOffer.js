import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import circle from "../../assets/decorations/circle.svg";
import smallcircle from "../../assets/decorations/smallcircle.svg";
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
    height: 37.8125em;
    
    background: #FFFFFF;
    padding-bottom: 7.125em;

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
        height: 46.3125rem;
    } 
`
const TextContainer = styled(Col)`
    padding-left: 0;
    padding-top: 12.5625em;
    margin-left: 10.3125em;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 3rem;
    }
    @media (max-width: 991px) {
        padding: 0;
        margin-left: 1.125rem;
        margin-top: 3.0625rem;
    } 
`

const StyledCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 9.625rem;
    margin-top: 27.3125rem;
    @media (max-width: 991px) {
        display: none;
    } 
`

const StyledSmallTwoCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 6.5rem;
    margin-top: 33.8125rem;
    @media (max-width: 991px) {
        display: none;
    } 
`

const ImageContainer = styled(Col)`
    
    padding-top: 9.375em;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    padding-left: 13.5625em;
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 1.5rem;
    }
    @media (max-width: 991px) {
        padding: 0;
        margin-left: 1.125rem;
        margin-top: 2.9375rem;
    } 
`
const StyledRow = styled(Row)`
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
`

const StyledSlogan = styled.div`
    width: 3.6666666666666665em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;

    padding-left: 0.75em;
    padding-right: 0.75em;
    
    font-size: 0.75em;
    line-height: 2em;
    /* or 200% */
    text-align: center;
    display: flex;
    align-items: center;
    //letter-spacing:  0.041666666666666664em;

    color: #FFFFFF;

    background: #FF6938;
    border-radius: 2.5em;
    border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    -webkit-border-radius: 2.5em;
`

const StyledTitle = styled.div`

    
    width: 11.125em;
    padding-right: 1em;
    margin-top: 0.5em;
    margin-bottom: 2.625rem;

    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5em;
    line-height: 1.2em;
    /* or 120% */
    //letter-spacing:  -0.00625em;

    color: #073233;
    @media (max-width: 991px) {
        width: auto;
        margin-bottom: 1.5625rem;
        font-size: 1.875rem;
    }
`

const StyledContent = styled.div`
    width: 24.875em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    //letter-spacing:  0.00625em;
    margin-bottom: 2em;
    color: #17494D;
    
    padding-left: 0.9375em; 
    @media (max-width: 991px) {
        padding: 0;
        margin: 0;
        width: auto;
    }

`

const StyledMoreabout = styled.button`
    font-family: Messina Sans semibold;
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    display: flex;
    align-items: center;
    
    
    color: #073233;
    border: 0;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    background: none;
    padding: 0;
    > text {
        text-underline-offset: 2.5px;
        text-decoration: underline solid #FF6938;
        text-decoration-thickness: 3px;
        transition: 0.3s;
        &:hover {
            padding-right: 1em;
        }   

    } 
    @media (max-width: 991px) {
        margin-top: 1.5625rem;
        flex-wrap: nowrap;
    }  
    
`

const StyledPointer = styled.div`
    margin-left: 0.7em;
    margin-bottom: 0.18em;
    font-size: 1.1em;
    line-height: 1.5em;
    //letter-spacing:  0.00625em;
    color: #FF6938;
    @media (max-width: 991px) {
        margin-left: 0.4rem;
    } 
`

const Styledimg = styled(Img)`
    min-width: 28em;
    @media (max-width: 991px) {
        min-width: 21.25rem;
        padding-right: 1.0625rem;
    } 
`

const FixedRow = styled(Row)`
    @media (max-width: 991px) {
        margin: 0;
        padding: 0;
    } 

`

export const LastOffer = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiMfa {
            edges {
              node {
                picture {
                  localFile {
                    id
                    childImageSharp {
                      fluid (quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                id
                content
              }
            }
          }
    }
    `)

    const ImageQuery = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_4" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

    return (
        <div style={{background: "#FFFFFF"}}>
        <Container>
        <StyledCircle src={circle} />
        <StyledSmallTwoCircle src={smallcircle} />
            <StyledRow>
                <ImageContainer xs={5.5} xs={{order: 2}} lg={{order: 1}}>
                    <Styledimg fluid={FilterQuery} />
                </ImageContainer>
                <TextContainer lg={{order: 2}}>
                    <StyledSlogan>
                        MFA
                    </StyledSlogan>
                    <StyledTitle>
                    {data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_4" ? document.node.title :  null)}  
                    </StyledTitle>
                    <StyledContent>
                        <FixedRow>
                        {data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_4" ? document.node.content :  null)}  
                        </FixedRow>
                    </StyledContent>
                    <StyledMoreabout>
                        <text>Learn about Multifactor Authentication</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    
                </TextContainer>


            </StyledRow>
        </Container>
        </div>
    )
}