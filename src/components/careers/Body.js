import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import emptyrec from "../../assets/careers/body/emptyrec.svg"
import whiterec from "../../assets/careers/body/whiterec.svg"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const EmptyRec = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 20.4375rem;
    margin-left: 82.125rem;
    @media (max-width: 991px) {
        display: none;
    }
    @media (max-width: 1439px) {
        display: none;
    } 
`

const WhiteRec = styled.img`
    position: absolute;
    z-index: -1;
    margin-top: 22.4375rem;
    margin-left: 74.6875rem;
    @media (max-width: 991px) {
        display: none;
    }
    @media (max-width: 1439px) {
        display: none;
    } 
`

const Container = styled.div`
    height: 31.25rem;
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
        height: 56.5625rem;
    } 
`
const TextContainer = styled(Col)`
    padding: 0;
    width: 43.9375rem;
    padding-left: 10.3125rem;
    @media (max-width: 991px) {
        width: auto;
        padding-left: 0;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 3rem;
        width: auto;
        justify-content: center;
        -webkit-justify-content: center;
        margin-left: 0;
    
    }
`

const ImageContainer = styled(Col)`
    padding-top: 3.5625rem;
    
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    display: flex;
    justify-content: end;
    @media (max-width: 991px) {
        padding: 0;
        max-width: none;
    } 
 
    @media (min-width: 992px) and (max-width: 1439px) {
        justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    
    
    }
    
`
const StyledRow = styled(Row)`
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
`

const StyledSlogan = styled.div`
    padding-top: 2.6875rem;
    position: static;
    width: 21.875rem;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #A6BCB5;

    flex: none;
    order: 0;
    flex-grow: 0;
    @media (max-width: 991px) {
        width: auto;
        font-size: 1.125rem;
        text-align: center;
    } 
    

`

const StyledTitle = styled.div`


    vertical-align: text-top;
    width: 27.8125rem;

    font-family: Messina Sans bold;
    font-style: normal;
    
    font-size: 3.5rem;
    line-height: 3.75rem;
    /* or 107% */
    //letter-spacing:  -0.0625rem;

    color: #073233;


    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 1.5rem 0rem;
    @media (max-width: 991px) {
        width: auto;
        font-size: 2.375rem;
        line-height: 2.4375rem;
        text-align: center;
        margin-left: 2.1875rem;
        margin-right: 2.1875rem;
    } 

`

const StyledContent = styled.div`
    /* Separated they live */
    width: 29.6875rem;


    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 1.75rem;
    /* or 156% */
    color: #17494D;
    /* Inside Auto Layout */
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 1.5rem 0px;
    @media (max-width: 991px) {
        width: 21.3125rem;
        font-size: 1.125rem;
        line-height: 1.75rem;
        text-align: center;
        margin-bottom: 3.25rem;
        margin-right: 1.0625rem;
        margin-left: 1.0625rem;
    } 

`


const Styledimg = styled(Img)`
    min-width: 36rem;
    max-width: 36rem;
    max-height: 24.125rem;
    margin: 0;

    @media (max-width: 991px) {
        width: 28.9375rem;
        margin-top: -2rem;
        margin-left: -6rem;
    } 
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 33rem;
        min-width: 30rem;
        margin-top: 1rem;
        margin-left: -1rem;
    }


    
`


const Wrapper = styled.div`
    @media (max-width: 991px) {
    min-width: 23.4375rem;
    max-height: 20.4375rem;
    overflow: hidden;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        overflow: hidden;
        
        min-width: 27.8rem;
        min-height: 19.375rem;
    }
`

export const Body = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiCareer {
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

    const ImageQuery = data.allStrapiCareer.edges.map(document=>document.node.id === "Career_1" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

    return (
  
        <Container>
            <StyledRow>

                <TextContainer xs={'auto'}>
                    <StyledSlogan>
                        CAREERS / ALL OPEN POSITIONS
                    </StyledSlogan>
                    <StyledTitle>
                        Build together, grow together                    
                    </StyledTitle>
                    <StyledContent>
                        Why SecureKi? We believe in learning by doing, and there is no better classroom than real–world experience. SecureKi employees work together in small teams that move fast and iterate to solve the problems we care the most about; securing our community from cyber threats through identity security and making an impact in the market – and we’re just getting started.                    
                    </StyledContent>
                    
                </TextContainer>
                <ImageContainer xs={5}>
                    <Wrapper><Styledimg fluid={FilterQuery} /></Wrapper>
                </ImageContainer>

                <WhiteRec src={whiterec} />
            <EmptyRec src={emptyrec} />
            </StyledRow>

        </Container>

    )
}