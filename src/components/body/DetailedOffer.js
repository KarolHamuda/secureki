import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import pierwszy from "../../assets/pierwszy.png"
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
    height: 40em;
    
    background: #FCF5F0;

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
        height: 54.75rem;
        padding-bottom: 0;
    } 
   
`
const TextContainer = styled(Col)`
    padding-top: 8.1875em;
    padding-left: 0;
    padding-right: 0;
    margin-right: 0;
    @media (max-width: 1439px) {
        
        padding-left: 2.5rem;
        
    }
    @media (max-width: 991px) {
        padding-left: 1.125rem;
        padding-top: 3.4375rem;
    } 
    
`

const ImageContainer = styled(Col)`
    padding-top: 7.5em;
    padding-left: 6em;
    padding-right: 0;
    margin-left: 0;
    @media (max-width: 1439px) {
        
        padding-left: 0;
        display: flex;
        align-items: center;
        padding-top: 7.4em;
    }

`
const StyledRow = styled(Row)`
    padding-left: 10.3125em;
    padding-right: 4.25em;
    margin-right: 0;
    margin-left: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 0;
        padding-right: 0;
    }
    @media (max-width: 991px) {
        padding-right: 0;
        padding-left: 0;
    } 
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
`

const StyledTitle = styled.div`

    
    max-width: 12.075em;

    margin-top: 0.5em;
    margin-bottom: 2.625rem;
    
    margin-right: 0;

    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5em;
    line-height: 1.2em;
    /* or 120% */
    //letter-spacing:  -0.00625em;

    color: #073233;
    @media (max-width: 991px) {
        font-size: 1.875rem;
        font-weight: 700;
        line-height: 2.4375rem;
        //letter-spacing:  -0.0063rem;
        text-align: left;
        margin-bottom: 1.5625rem;
        max-width: 21.3125rem;
    } 
`

const StyledContent = styled.div`
    
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    //letter-spacing:  0.00625em;
    margin-bottom: 2em;
    margin-right: 7.8125em;
    color: #17494D;
    @media (max-width: 1439px) {
        margin-right: 0;
        max-width: 27.8125rem;
        margin-bottom: 1.5625rem;
    }
    @media (max-width: 991px) {
        margin-right: 1rem;
    } 
`

const StyledMoreabout = styled.div`
   
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
    
    max-width: 31.25rem;
    margin-bottom: 0;
    @media (max-width: 1439px) {
        margin-left: auto;
        max-width: 28rem;
        height: auto;
    }
    @media (max-width: 991px) {
        
        
        max-width: 20.35rem;
        margin-left: 1.3rem;
         
        padding-bottom: 0;
    } 
`



export const DetailedOffer = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiArticle {
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

    const ImageQuery = data.allStrapiArticle.edges.map(document=>document.node.id === "Article_8" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>
            
            <StyledRow>
                <TextContainer>
                    <StyledSlogan>
                        MFA
                    </StyledSlogan>
                    <StyledTitle>
                        Eliminate the main cause of a breach. Authenticate with ease.
                    </StyledTitle>
                    <StyledContent>
                    {data.allStrapiArticle.edges.map(document=>document.node.id === "Article_8" ? document.node.content :  null)}   
                    </StyledContent>
                    <Link 
                        to="/mfa"
                        style={{textDecoration: "none"}}
                    >
                    <StyledMoreabout>
                        <text>Learn about Multifactor Authentication</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    </Link>
                    
                </TextContainer>
                <ImageContainer>
                    <Styledimg fluid={FilterQuery} />
                </ImageContainer>

            </StyledRow>
            
        </Container>
        </div>
    )
}
