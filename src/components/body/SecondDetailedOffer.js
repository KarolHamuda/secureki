import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
    height: 45.5em;
    
    background: #FCF5F0;
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
        height: 56.6025rem;
        padding-bottom: 0;
    } 
`
const TextContainer = styled(Col)`
    max-width: 45rem;
    padding-left: 5.625rem;
    padding-top: 5.3125em;
   
    @media (max-width: 1439px) {
        max-width: 47vw;
        align-items: right;
        padding-left: 0;
        margin-left: auto;
    }
    @media (max-width: 991px) {
        max-width: 22.0625rem;
        margin-left: 1.125rem;
        padding-top: 0;
        padding-left: 0;
        padding-right: 0;
    } 
    
`

const ImageContainer = styled(Col)`
    padding-top: 2.5em;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    @media (max-width: 1439px) {
        padding-top: 0;
        display: flex;
        align-items: center;
    }
`
const StyledRow = styled(Row)`
    padding-left: 3.875em;
    margin-right: 0;
    margin-left: 0;
    @media (max-width: 1429px) {
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
    
    -moz-border-radius: 2.5em;
    -webkit-border-radius: 2.5em;

    
`

const StyledTitle = styled.div`

    
    width: 12.075em;
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
    @media (max-width: 1439px) {
        width: auto;

    }
    @media (max-width: 991px) {
        font-size: 1.875rem;
        font-weight: 700;
        line-height: 2.4375rem;
        //letter-spacing:  -0.10000000149011612px;
        text-align: left;
        margin-bottom: 1.5625rem;
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
    color: #17494D;
    padding-right: 9.75em;
    padding-left: 0.9375em; 
    @media (max-width: 1439px) {
        padding-right: 0;
        max-width: 36.625rem;
        > .Content {
            max-width: 27.8125rem;
        }
    }
    @media (max-width: 991px) {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
        //letter-spacing:  0.0063rem;
        text-align: left;
        max-width: 21.3125rem;
        margin-bottom: 1.5625rem;
        > .Content {
            max-width: 21.3125rem;
        }
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
    //letter-spacing:  0.00625em;
    
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
`

const StyledPointer = styled.div`
    margin-left: 0.7em;
    margin-bottom: 0.18em;
    font-size: 1.1em;
    line-height: 1.5em;
    //letter-spacing:  0.00625em;
    color: #FF6938;
`

const Styledimg = styled(Img)`
    max-width: 30.125em;
    margin-top: 7rem;
    margin-left: 6.5rem;
    @media (min-width: 992px) and (max-width: 1439px) {
        min-width: auto;
        max-width: 28rem;
        height: auto;
        margin-bottom: 0;
        margin-left: 1rem;
    }
    @media (max-width: 991px) {
        
        
        max-width: 20.8rem;
        margin-left: 1.5rem;
        margin-top: 2rem;
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

export const SecondDetailedOffer = () => {
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

    const ImageQuery = data.allStrapiArticle.edges.map(document=>document.node.id === "Article_9" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>

            <StyledRow xs={1} lg={2}>
                <ImageContainer xs={{ order: 2 }} lg={{ order: 1 }} lg={6} xl>
                    <Styledimg fluid={FilterQuery} />
                </ImageContainer>
                <TextContainer lg={{ order: 2 }}>
                    <StyledSlogan>
                        PAM
                    </StyledSlogan>
                    <StyledTitle>
                    {data.allStrapiArticle.edges.map(document=>document.node.id === "Article_9" ? document.node.title :  null)}  
                    </StyledTitle>
                    <StyledContent>
                        <Row className="Content">
                        {data.allStrapiArticle.edges.map(document=>document.node.id === "Article_9" ? document.node.content :  null)}                    

                        </Row>
                    </StyledContent>
                    <Link 
                        to="/pam"
                        style={{textDecoration: "none"}}
                    >
                    <MobileDisplayer>
                        <StyledMoreabout>                        
                                    <text>Learn more on PAM</text>
                                    
                            <StyledPointer>   →</StyledPointer>
                        </StyledMoreabout>
                    </MobileDisplayer>
                    <DesktopDisplayer>
                        <StyledMoreabout>                        
                                    <text>Learn more on Privileged Access Management</text>
                            <StyledPointer>   →</StyledPointer>
                        </StyledMoreabout>
                    </DesktopDisplayer>
                    </Link>
                    
                </TextContainer>


            </StyledRow>
   
        </Container>
        </div>
    )
}