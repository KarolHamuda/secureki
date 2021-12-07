import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import StyledButton from '../navbar/Button.js'
import checkpoint from '../../assets/mfa/checkpoint.svg'
import circle from "../../assets/decorations/circle.svg"
import smallcircle from "../../assets/decorations/smallcircle.svg"
import rec from "../../assets/pam/header/rec.svg"
import siderec from "../../assets/pam/header/siderec.svg"
import emptyrec from "../../assets/pam/header/emptyrec.svg"
import sidesmallrec from "../../assets/pam/header/sidesmallrec.svg"

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const Layout = styled.div`
    max-width: 90em;
    height: 60.75em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 62rem;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 69.625rem;
    }
`

const FixedRow = styled(Row)`
    margin: 0;
`

const StyledRec = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 2.6875rem;
    margin-top: 11.75rem;
    @media (min-width: 992px) and (max-width: 1439px) {
        display: none;
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const StyledSideRec = styled.div`
    z-index: -1;
    position: absolute;
    margin-left: 85.875rem;
    margin-top: 46.9375rem;
    background: url(${siderec});
    width: 4.125rem;
    height: 9.3125rem;
    @media (min-width: 1523px) {
        width: 9.3125rem;
    }
    @media (min-width: 992px) and (max-width: 1439px) {
        display: none;
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const StyledEmptyRec = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: -2rem;
    margin-top: 13.0625rem;
    @media (min-width: 992px) and (max-width: 1439px) {
        display: none;
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const StyledSmallOneCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 2em;
    margin-top: 46.125em;
    @media (min-width: 992px) and (max-width: 1439px) {
        display: none;
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const StyledCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 4.5625rem;
    margin-top: 48.75rem;
    @media (min-width: 992px) and (max-width: 1439px) {
        display: none;
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const StyledSmallTwoCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 1.4375rem;
    margin-top: 55.25rem;
    @media (min-width: 992px) and (max-width: 1439px) {
        display: none;
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const TextRow = styled(Row)`
    margin: 0;
    flex-wrap: nowrap;
    align-items: flex-start;
    @media (max-width: 991px) {
        justify-content: center;
    }
`

const StyledText = styled(Col)`
    margin-top: 13.625em;
    margin-left: 10.3125em;
    max-width: 29.3125em;
    padding: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 1.5rem;
    }
    @media (max-width: 991px) {
        margin-left: 18px;
        margin-top: 0;
        max-width: 22.1875rem;
    }
`
const StyledImageContainer = styled(Col)`
    padding: 0;
`
 

const StyledImage = styled(Img)`
    margin-top: 12.6875em;
    margin-right: 0;
    margin-bottom: 0;
    max-width: 38.75em;
    margin-left: 4rem;
    position: absolute;
    z-index: -1;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-top: 17em;
        margin-left: 2rem;
        margin-right: 0;
        min-width: 29em;
        max-width: 29em;
        position: relative;
    }
    @media (max-width: 991px) {
        max-width: 21rem;
        margin-top: 7.5625rem;
        margin-left: 1.3rem;
        margin-right: 0;
        position: relative;
    }
`

const ColoredP = styled.div`
    color: #FF6938;
`

const StyledTitle = styled.div`
    /* Medium length displa */
    width: 9.933333333333334em;
    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 3.1875em;
    line-height: 1.1764705882352942em;
    /* or 118% */
    //letter-spacing:  -0.0196078431372549em;
    color: #073233;
    @media (max-width: 991px) {
        padding: 0;
        width: auto; 
        font-size: 2.375rem;
        font-style: normal;
        line-height: 3rem;
        //letter-spacing:  -0.0625rem;
        text-align: center;
        margin-top: 1rem;
        width: auto;
    }
`

const StyledBody = styled.div`
    /* Separated they live */
    width: 28.27777777777778em;
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    /* or 156% */

    color: #17494D;
    margin-top: 1.5555555555555556em;
    margin-bottom: 30px;
    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;

    @media (max-width: 991px) {
        padding: 0;
        width: auto; 
        margin-right: 1.125rem;
        text-align: center;

    }

`

const StyledList = styled.div`
    margin-bottom: 2.375em;
    width: 28.625em;
    @media (max-width: 991px) {
        width: auto;
        margin-right: 1.125rem;
    }

`

const MFAButton = styled(StyledButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75em 2.625em;
    padding-right: 1.6666666666666667em;
    padding-left: 1.6666666666666667em;
    background: #FF6938;
    border-radius: 1.875em;
    border-radius: 1.875em;
    -moz-border-radius: 1.875em;
    -webkit-border-radius: 1.875em;
    margin: 0;
    font-family: Messina Sans semibold;
    font-size: 1.125rem;
`

const StyledCheckpoint = styled.img`
    margin-right: 0.75em;
    margin-bottom: 0;
`

const StyledParagraph = styled.div`
    > .paragraph {
        
        > p {
            margin-bottom: 0.5rem;
            font-family: Messina Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 1em;
            line-height: 1.5em;
            /* identical to box height, or 150% */
            display: flex;
            align-items: center;
            //letter-spacing:  0.00625em;
            
            color: #17494D; 
            &::last-child {
                margin-bottom: 0;
            }
        }
    }
`

const Displayer = styled.div`
    display: none;
    @media (min-width: 992px) {
        display: block;
    }
`

const Breaker = styled.div`
    display: inline;
    @media (min-width: 992px) {
        display: none;
    }
`



export const PAMHeader = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiPam {
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
                  title
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

    const ImageQuery = data.allStrapiPam.edges.map(document=>document.node.id === "Pam_1" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

return (
    <Layout>
        <StyledRec src={rec} />
        <StyledEmptyRec src={emptyrec} />
        <StyledSideRec />
        <StyledCircle src={circle} />
        <StyledSmallOneCircle src={smallcircle} />
        <StyledSmallTwoCircle src={smallcircle} />
        <FixedRow xs={1} lg={2}>
            <StyledText xs={{order: 2}} lg={{order: 1}}>
                <StyledTitle> 
                Privileged Access Management<Breaker>{'\u00A0'}from</Breaker>
                <TextRow><Displayer>from{'\u00A0'}</Displayer><ColoredP>SecureKi</ColoredP></TextRow>    
                </StyledTitle>
                <StyledBody>
                {data.allStrapiPam.edges.map(document=>document.node.id === "Pam_1" ? document.node.content :  null)}  
                </StyledBody>
                <StyledList>
                    <StyledParagraph>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />
                            <p>Centrally secures and control access to privileged credentials based on privileged access security policies</p>
                        </TextRow>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />
                            <p>Streamlined administrator and end-user workflow approval with OTP</p>
                        </TextRow>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />    
                            <p>Built-in reporting system for internal and external audit</p>
                        </TextRow>
                    </StyledParagraph>
                </StyledList>
                <TextRow>
                <MFAButton onClick={()=>window.location.href="mailto:info@secureki.com?subject=Request a demo&body=The message"} type="submit" background={"#FF6938"} font={"#FFFFFF"}>
                    {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_3" ? document.node.title :  null)}
                </MFAButton>
                </TextRow>
                
            
            </StyledText>
            <StyledImageContainer xs={{order: 1}} lg={{order: 2}}>
                
                    <StyledImage fluid={FilterQuery}/>
                
            </StyledImageContainer>
        </FixedRow>
    </Layout>
)};


