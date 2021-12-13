import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import group from "../../../assets/elementsgroup.svg"
import squareslide from "../../../assets/decorations/squareslide.svg"
import circleslide from "../../../assets/decorations/circleslide.svg"
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Container = styled.div`
    height: 32.5em;
   
    max-width: 90em;
    background: #114748;
    padding-bottom: 7.125em;
    margin: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 2.5rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 36.5625rem;
        padding-bottom: 0;
    } 
`
const TextContainer = styled(Col)`
    padding-left: 0;
    padding-top: 10.6875em;
    margin-left: 0;
    @media (max-width: 1439px) {
        
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-top: 9.6875em;
        padding-right: 0;
        max-width: 40%;
    }

    @media (max-width: 991px) {
        padding-top: 0;
        padding-bottom: 0;
    }
`

const ImageContainer = styled(Col)`
    padding-top: 7.1875em;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    @media (max-width: 991px) {
        padding-top: 0;
    } 
`
const StyledRow = styled(Row)`
    padding-left: 10.375em;
    margin-right: 0;
    margin-left: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 2rem;
        padding-right: 1rem;
    }
    @media (max-width: 991px) {
        padding-left: 0;
    } 
`

const StyledSlogan = styled.div`
    /* Name Surname Lead ma */


    font-family: Messina Sans semibold;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 2em;
    /* or 200% */
    //letter-spacing:  0.050333333333333333em;
    color: #BDCCC7;
    @media (max-width: 991px) {
           margin-left: 1.125rem; 
           margin-top: 2.5rem;
    }

`

const StyledTitle = styled.div`

/* “All base UI element */

    position: relative;

    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: semibold;
    font-size: 1.5em;
    line-height: 1.3333333333333333em;
    padding-right: 8.416666666666666em;
    /* or 133% */

    color: #FFFFFF;
    margin-top: 0.5em;
    margin-bottom: 0.35em;
    //letter-spacing:  0.01625em;

    @media (max-width: 1439px) {
        padding-right: 0;
    }
    @media (max-width: 991px) {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.75rem;
        //letter-spacing:  0rem;
        text-align: left;
        margin-left: 1.125rem;
        margin-top: 1.375rem;
        margin-bottom: 1.375rem;
    }


    /* “All base UI element */
`

const StyledMoreabout = styled.button`
    font-family: Messina Sans semibold;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.5em;
    /* or 150% */
    position: relative;
    display: flex;
    align-items: center;
    //letter-spacing:  0.01825em;
    margin-top: 0.9375rem;

    /* Link */
    color: #FFFFFF;
    margin-right: 0;
    border: 0;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    background: none;
    padding: 0;
    > a {
        color: #FFFFFF;
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none;
    }

        > text {
        text-underline-offset: 4px;
        text-decoration: underline solid #FF6938;
        text-decoration-thickness: 3px;
        transition: 0.3s;
        &:hover {
            padding-right: 1em;
        }   
    }
    }


    @media (max-width: 1130px) {
        margin-top: 9.275rem
    }
    @media (max-width: 991px) {
           margin-left: 1.125rem; 
           margin-top: 0.9375rem;
    }  
`

const StyledPointer = styled.div`
    margin-left: 0.5em;
    margin-bottom: 0.3em;
    font-size: 0.9em;
    font-weight: bold;
    line-height: 1.5em;
    //letter-spacing:  0.00625em;
    color: #FFFFFF;
`


const Styledimg = styled(GatsbyImage)`
    min-width: 30.125rem;
    min-height: 17.25rem;
    max-width: 30.125rem;
    max-height: 17.25rem;
    z-index: 2;
    position: absolute;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 26rem;
        min-width: 26rem;
    }
    @media (max-width: 991px) {
        display: none;
    }


`

const StyledGroupElements = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 25em;
    margin-top: 2.75em;
    @media (max-width: 1439px) {
        margin-left: 20em;
    }
    @media (max-width: 991px) {
        display: none;
    } 
`

const StyledSquare = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: -2.0625em;
    margin-top: 21.9375em;
    @media (max-width: 1439px) {
        margin-top: 19.0625rem;
    }
    @media (max-width: 991px) {
        display: none;
    } 
`

const StyledCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 1.59375em;
    margin-top: 25.6875em;
    @media (max-width: 1439px) {
        margin-top: 22.8125rem;
    }
    @media (max-width: 991px) {
        display: none;
    } 
`

const StyledDesktopimg = styled(GatsbyImage)`
    z-index: 2;
    position: absolute;
    max-width: 30.125rem;
    max-height: 17.25rem;
    @media (min-width: 991px) {
        display: none;
    
    }
    
    @media (max-width: 1439px) {
        min-width: auto;
        max-width: 25.125rem;
        height: auto;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        margin-bottom: 0;
        min-width: auto;
        position: relative;
    } 
`



export const FirstSlide = ({title, description, image}) => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiCarousel {
            edges {
              node {
                picture {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(layout: FIXED)
                    }
                  }
                }
                mobile {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(layout: FIXED)
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

    const ImageQuery1 = data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_1" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery1 = ImageQuery1.filter(document=>document !== null ? document : null )
    const Image1 = FilterQuery1[0].gatsbyImageData

    const ImageQuery2 = data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_1" ? document.node.mobile.localFile.childImageSharp : null)
    const FilterQuery2 = ImageQuery2.filter(document=>document !== null ? document : null )
    const Image2 = FilterQuery2[0].gatsbyImageData

    const ImageQuery3 = data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_2" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery3 = ImageQuery3.filter(document=>document !== null ? document : null )
    const Image3 = FilterQuery3[0].gatsbyImageData

    const ImageQuery4 = data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_2" ? document.node.mobile.localFile.childImageSharp : null)
    const FilterQuery4 = ImageQuery4.filter(document=>document !== null ? document : null )
    const Image4 = FilterQuery4[0].gatsbyImageData

    const ImageQuery5 = data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_5" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery5 = ImageQuery5.filter(document=>document !== null ? document : null )
    const Image5 = FilterQuery5[0].gatsbyImageData

    const ImageQuery6 = data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_5" ? document.node.mobile.localFile.childImageSharp : null)
    const FilterQuery6 = ImageQuery6.filter(document=>document !== null ? document : null )
    const Image6 = FilterQuery6[0].gatsbyImageData

    return (
        <>
        <Container>

            <StyledRow xs={1} lg={2}>
            <StyledSquare src={squareslide} />
            <StyledCircle src={circleslide} />
            <StyledGroupElements src={group} />
                <ImageContainer lg={7} xl>
                    <Styledimg  image={image == 'first' ? Image1 : image == 'second' ? Image3 : Image5 } />
                    <StyledDesktopimg image={image == 'first' ? Image2 : image == 'second' ? Image4 : Image6} />
                </ImageContainer>
                <TextContainer>
                    <StyledSlogan>
                    {title}
                    </StyledSlogan>
                    <StyledTitle>
                    {description}
                    </StyledTitle>
                    <StyledMoreabout>
                        <a href="https://drive.google.com/file/d/1_xwYnMLYoqdUUzzLDiSodLO3iad18lb_/view?usp=sharing">
                        <text>Read full case study</text></a>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    
                </TextContainer>


            </StyledRow>
        </Container>
        </>
    )
}


