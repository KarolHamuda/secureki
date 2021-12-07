import React from 'react'
import styled from 'styled-components'
import { Row } from "react-bootstrap"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const FirstStyledPic = styled(Img)`
    margin-right: 1.8125rem;
    max-width: 19.1875rem;
    min-width: 19.1875rem;
    &:last-child {
        margin-right: 0;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 18.1875rem;
        min-width: 18.1875rem;

        max-width: 30rem;
        margin-right: 0.3125rem;
    }
    @media (max-width: 991px) {
        max-width: 5.9375rem;
        min-width: 5.9375rem;
        max-height: 6.4375rem; 
        margin-right: 0.5625rem; 
    } 

`

const SecondStyledPic = styled(Img)`
    margin-right: 1.8125rem;
    max-width: 27rem;
    min-width: 27rem;
    &:last-child {
        margin-right: 0;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 26rem;
        min-width: 26rem;
        max-width: 30rem;
        margin-right: 0.3125rem;
    }
    @media (max-width: 991px) {
        max-width: 8.375rem;
        min-width: 8.375rem;

        max-height: 6.4375rem; 
        margin-right: 0.5625rem; 
    } 

`

const ThirdStyledPic = styled(Img)`
    margin-right: 1.8125rem;
    max-width: 19.1875rem;
    min-width: 19.1875rem;
    &:last-child {
        margin-right: 0;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 18.1875rem;
        min-width: 18.1875rem;
        max-width: 30rem;
        margin-right: 0.3125rem;
    }
    @media (max-width: 991px) {
        max-width: 5.9375rem;
        min-width: 5.9375rem;
        max-height: 6.4375rem; 
        margin-right: 0.5625rem; 
    } 

`

const Container = styled.div`
    height: 32.9375rem;
    background: #FFFFFF;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 11.5625rem;
    } 
   
`

const PicRow = styled(Row)`
    margin: 0;
    margin-left: 10.4375rem;
    flex-wrap: nowrap;
    @media (max-width: 991px) {
       margin-left: 1.125rem; 
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        justify-content: center;
        -webkit-justify-content: center;
        margin-left: auto;
        margin-right: auto;
        flex-wrap: nowrap;
        max-width: 62rem;
        
    }
`

const PicCol = styled.div`
    margin: 0;
    padding: 0;
`

const Wrapper = styled.div`

    @media (min-width: 992px) and (max-width: 1439px) {
        overflow: hidden;
        
        min-width: 62rem;
        min-height: 19.375rem;
    }
`

const Pictures = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiAbout {
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
                  title
                }
              }
        }
    }
    `)

    const ImageQuery1 = data.allStrapiAbout.edges.map(document=>document.node.id === "About_6" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery1 = ImageQuery1.filter(document=>document !== null ? document : null )

    const ImageQuery2 = data.allStrapiAbout.edges.map(document=>document.node.id === "About_7" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery2 = ImageQuery2.filter(document=>document !== null ? document : null )

    const ImageQuery3 = data.allStrapiAbout.edges.map(document=>document.node.id === "About_8" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery3 = ImageQuery3.filter(document=>document !== null ? document : null )

    return (
        <Container>
            <Wrapper>
            <PicRow>
                
                <FirstStyledPic fluid={FilterQuery1} />
                <SecondStyledPic fluid={FilterQuery2} />
                <ThirdStyledPic fluid={FilterQuery3} />
                
            </PicRow>
            </Wrapper>
            
        </Container>
    )
}

export default Pictures
