import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import dot from "../../assets/mfa/dot.svg"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
    height: 51em;
    
    background: #FCF5F0;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
       height: 47rem;
       max-width: 62rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 54.75rem;
    } 
   
`
const TextContainer = styled(Col)`
    padding-top: 1.1875em;
    padding-left: 0;
    padding-right: 0;
    margin-right: 0;

    
`

const ImageContainer = styled(Col)`
    padding-top: 1.1875em;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    @media (max-width: 991px) {
        display: flex;
        justify-content: center;
    }


`
const StyledRow = styled(Row)`
    padding-left: 10.3125em;
    margin-right: 0;
    margin-left: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 1.5rem;
    }
    @media (max-width: 991px) {
        padding-left: 1.125rem;
        
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
    border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    -webkit-border-radius: 2.5em;
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
        margin-bottom: 1.5625rem;
        font-size: 1.945rem;
    }
`

const StyledContent = styled.div`
    width: 27.8125em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    //letter-spacing:  0.00625em;
    margin-bottom: 2em;
    color: #17494D;
    @media (max-width: 991px) {
        width: auto;
        margin-right: 5px;
        margin-bottom: 1.5625rem;
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
    margin-top: 2.0625em;
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
    min-width: 35.375em;
    max-width: 35.375rem;
    margin-left: -4.95rem;
    margin-top: 4rem;
    margin-bottom: 0;
    
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 0;
        margin-top: 0;
        margin-right: 0;
        margin-top: 5rem;
        min-width: auto;
        max-width: 31rem;
    }
    @media (max-width: 991px) {
        
        min-width: 22.4375rem;
        max-width: 23.4375rem;
        margin-left: -1rem;
        margin-right: 0;
        margin-top: 1rem;
    }

`

const StyledList = styled.div`
    max-width: 28.5625em;
`

const StyledDot = styled.img`
    margin: 0;
    margin-right: 0.8em;
    z-index: 1;
    position: absolute;
`

const ListElement = styled(Row)`
    margin: 0;
    margin-bottom: 0.4325em;
    
    padding: 0;

    font-family: Messina Sans;
    font-size: 1em;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5em;
    //letter-spacing:  0.00625em;
    text-align: left;
    color: #17494D;
    > div {
        padding-top: 0.09em;
        margin-left: 1.6875em;
    }


`



export const Offer = () => {
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

    const ImageQuery = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_3" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>
            
            <StyledRow xs={1} lg={2}>
                <TextContainer>
                    <StyledSlogan>
                        MFA
                    </StyledSlogan>
                    <StyledTitle>
                    {data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_3" ? document.node.title :  null)}
                    </StyledTitle>
                    <StyledContent>
                    {data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_3" ? document.node.content :  null)}  
                    </StyledContent>
                    <StyledList>
                        <ListElement><StyledDot src={dot}/><div>SMS and email One Time Password (OTP)</div></ListElement>
                        <ListElement><StyledDot src={dot}/><div>Mobile time-based OTP token</div></ListElement>
                        <ListElement><StyledDot src={dot}/><div>Supports mobile fingerprint-sensor for FIDO <br />authentication</div></ListElement>
                        <ListElement><StyledDot src={dot}/><div>Supports Apple devices using Face ID authentication</div></ListElement>
                        <ListElement><StyledDot src={dot}/><div>Supports Palm and Finger Vein Scanner and even offline login</div></ListElement>
                    </StyledList>
                    <StyledMoreabout>
                        <text>Learn about Multifactor Authentication</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    
                </TextContainer>
                <ImageContainer >
                    <Styledimg fluid={FilterQuery} />
                </ImageContainer>

            </StyledRow>
            
        </Container>
        </div>
    )
}