import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import hero from "../../assets/hero NEW 1.png"
import StyledButton from "../navbar/Button.js"
import square from "../../assets/decorations/square.svg"
import circle from "../../assets/decorations/circle.svg"
import smallcircle from "../../assets/decorations/smallcircle.svg"
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import Img from 'gatsby-image'


const StyledImage = styled(Img)`
    border-radius: 0;
    margin-bottom: 0;
    min-width: 42.875em;
    height: 32.5em;
    margin-top: 12.25em;

    @media (max-width: 1439px) {
        margin-left: 2rem;
        min-width: auto;
        min-width: 28rem;
        max-width: 25rem;
        margin-top: 15.25em;
        height: auto;
    }
    @media (max-width: 991px) {
        max-width: 21.4375rem;
        margin-top: 7.1875rem;
        min-width: 21.4375rem;
    } 
    
`
const FixedCol = styled(Col)`
    padding-right: 0;
    padding-left: 0;
`

const StyledContent = styled.div`
    max-width: 90em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
        padding-left: 2.8rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
    }
`

const StyledTitle = styled.div`
        /* Medium length displa */

    font-family: "Messina Sans bold";
    font-style: normal;
    font-weight: normal;
    font-size: 3.5em;
    line-height: 1.0714285714285714em;
    /* or 107% */
    //letter-spacing:  -0.017857142857142856em;
    color: #073233;

    mix-blend-mode: normal;
    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 0.42857142857142855em;

    @media (max-width: 991px) {
        margin-left: 1.3125rem;
        margin-right: 1.25rem;
        margin-bottom: 1.5625rem;
        font-family: Messina Sans Bold;
        font-size: 2.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        //letter-spacing:  -0.0625rem;
        text-align: center;

        > .Title {
            justify-content: center;
        }

    }

`
const ColoredP = styled.div`
    color: #FF6938;
`

const StyledTextBody = styled.div`
    font-family: 'Messina Sans';
    font-style: regular;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    opacity: 1;
    /* or 156% */
    color: #17494D;
    mix-blend-mode: normal;
    margin-right: 3.555555555555555em;
    margin-bottom: 2.2222222222222223em;
    @media (max-width: 991px) {
        font-family: Messina Sans;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.75rem;
        //letter-spacing:  0rem;
        text-align: center;
        margin-left: 1.125rem;
        margin-right: 1.125rem;
        margin-bottom: 0;
        justify-content: center;


    }
`

const StyledLeftColumn = styled(Col)`
    max-width: 38%;
    margin-left: 10.5em;
    margin-right: 0;
    padding: 0;
    margin-top: 17em;
    @media (max-width: 1439px) {
        margin-left: 0;
        max-width: none;
    }
    @media (max-width: 991px) {
        margin-left: 0;
        margin-top: 8.4375rem;
        max-width: none;
    }
`

const StyledButtonFix = styled(StyledButton)`
    margin: 0;
    padding-top: 0.6666666666666666em;
    padding-bottom: 0.7888888888888888em;
    padding-right: 1.6666666666666667em;
    padding-left: 1.6666666666666667em;
    font-family: Messina Sans semibold;
    font-size: 1.125em;
    font-style: normal;
    font-weight: 200;
    line-height: 1.3333333333333333em;
    
    text-align: center;
    border-radius: 1.6666666666666667em;
    transition: 0.3s;
    flex-wrap: nowrap;
    &:hover {
        background: #E55A2D;
    }
    @media (max-width: 991px) {
        margin-left: 5.25rem;
        margin-top: 1.6875rem;    
    } 

`

const StyledSquare = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 6.75em;
    margin-top: 13.75em;
    @media (max-width: 1439px) {
        display: none;
    }

`

const StyledSmallOneCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 2em;
    margin-top: 46.125em;
    @media (max-width: 1439px) {
        display: none;
    }
`

const StyledCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 5.125em;
    margin-top: 39.625em;
    @media (max-width: 1439px) {
        display: none;
    }

`

const StyledSmallTwoCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 3.0625em;
    margin-top: 37.1875em;
    @media (max-width: 1439px) {
        display: none;
    }
    
`

const StyledSmallThreeCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 44.25em;
    margin-top: 37.9375em;
    @media (max-width: 1439px) {
        display: none;
    }
`

const FixedButtonsRow = styled(Row)`
    margin: 0;
`

const FixedRow = styled(Row)`
    margin: 0;
    
`



export const Article = () => {
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

    const ImageQuery = data.allStrapiArticle.edges.map(document=>document.node.id === "Article_7" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

    return (
        <StyledContent>
        <StyledSquare src={square} />
        <StyledCircle src={circle} />
        <StyledSquare src={square} />
        <StyledSmallOneCircle src={smallcircle} />
        <StyledSmallTwoCircle src={smallcircle} />
        <StyledSmallThreeCircle src={smallcircle} />
            
        <FixedRow xs={1} lg={2}>
            <>
            <StyledLeftColumn>
                <FixedRow>
                    
                    <StyledTitle>
                        <FixedRow className="Title">Identity Security</FixedRow>
                        <FixedRow>for{'\u00A0'}<ColoredP>Your Workforce</ColoredP></FixedRow>
                    </StyledTitle>
                </FixedRow>
                <FixedRow>
                    <StyledTextBody>
                        {data.allStrapiArticle.edges.map(document=>document.node.id === "Article_7" ? document.node.content :  null)}
                    </StyledTextBody>
                </FixedRow>
                <FixedButtonsRow xs={1} lg={2}>
                <a href="mailto:info@secureki.com?subject=Request a demo&body=The message">
                    <StyledButtonFix id="btnOutlook" background="#FF6938" font="#FFFFFF">
                        {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_3" ? document.node.title :  null)}
                    </StyledButtonFix>
                   </a> 
                    
                </FixedButtonsRow>
                <FixedRow>
                    
                    
                    
                </FixedRow>
            </StyledLeftColumn>
            </>

            <FixedCol>
                <StyledImage fluid={FilterQuery}/>
            </FixedCol>
        </FixedRow>   
        </StyledContent>
        
    )
}

