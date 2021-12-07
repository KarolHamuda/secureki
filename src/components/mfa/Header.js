import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import StyledButton from '../navbar/Button.js'
import checkpoint from '../../assets/mfa/checkpoint.svg'
import circle from "../../assets/decorations/circle.svg"
import smallcircle from "../../assets/decorations/smallcircle.svg"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const Layout = styled.div`
    max-width: 90em;
    height: 55.9375em;
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
        height: 58em;
    }
`

const FixedRow = styled(Row)`
    margin: 0;
`

const TextTitleRow = styled(Row)`
    margin: 0;
    @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        margin-left: 0;
    }
`

const ButtonRow = styled(Row)`
    margin: 0;
    @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        
    }
`

const TextRow = styled(Row)`
    margin: 0;
    @media (max-width: 991px) {
        margin-left: 1.125rem;
    }
`

const StyledSmallOneCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 3.1875rem;
    margin-top: 21.5rem;
    
    @media (max-width: 1439px) {
        display: none;
    }
`

const StyledCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 6.3125rem;
    margin-top: 15rem;
    @media (max-width: 1439px) {
        display: none;
    }
`

const StyledSmallTwoCircle = styled.img`
    z-index: -1;
    position: absolute;
    margin-left: 4.25rem;
    margin-top: 11.4375rem;
    @media (max-width: 1439px) {
        display: none;
    }
`

const StyledText = styled(Col)`
    margin-top: 13.1875em;
    margin-left: 10.3125em;
    max-width: 29.3125em;
    padding: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 1.5em;
    }
    @media (max-width: 991px) {
        margin: 0;
    }
`
const StyledImageContainer = styled(Col)`
    padding: 0;
`

const StyledImage = styled(Img)`
    margin-top: 14.1125em;
    margin-left: 4rem;
    margin-bottom: 0;
    width: 36.375em;
    max-width: 36.375em; 
    position: absolute;
    z-index: -1;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-right: 1.5em;
        width: 29.375em;
        max-width: 29.375em; 
        margin-left: 2rem;
    }
    @media (max-width: 991px) {
        margin-left: 1.3125rem;
        min-width: 20.25rem;
        max-width: 20.25rem;
        margin-top: 5.625rem;
        position: relative;
        margin-right: 0;
    }
`

const ColoredP = styled.div`
    color: #FF6938;
`

const StyledTitle = styled.div`
    /* Medium length displa */
    width: 11.196078431372548em;
    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 3.1875em;
    line-height: 1.1764705882352942em;
    /* or 118% */
    //letter-spacing:  -0.0196078431372549em;
    color: #073233;
    @media (max-width: 991px) {
        margin-left: 1.3125rem;
        margin-right: 1.25rem;
        margin-top: 1.5625rem;
        font-family: Messina Sans bold;
        font-size: 2.375rem;
        font-style: normal;
        font-weight: 700;
        line-height: 3rem;
        //letter-spacing:  -0.0625rem;
        text-align: center;
        width: auto;
    }
`

const StyledBody = styled.div`
    /* Separated they live */

    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.125em;
    line-height: 1.5555555555555556em;
    /* or 156% */

    color: #17494D;
    margin-top: 1.5555555555555556em;
    margin-bottom: 0.7777777777777778em;
    /* Inside Auto Layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    @media (max-width: 991px) {
        display: flex;
        text-align: center;
        margin-left: 1.125rem;
        margin-right: 1.125rem;
        margin-bottom: 1.5625rem;
        margin-top: 1.5625rem;
    }

`

const StyledList = styled.div`
    margin-bottom: 2.375em;
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
    -moz-border-radius: 1.875em;
    -webkit-border-radius: 1.875em;
    font-family: Messina Sans semibold;
    font-size: 1.125rem;
    margin: 0;
`

const StyledCheckpoint = styled.img`
    margin-right: 0.75em;
    margin-bottom: 0;
`

const StyledParagraph = styled.div`
    > .paragraph {
        margin-bottom: 0.5em;
        > p {
            margin-bottom: 0;
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
        }
    }
`

export const MFAHeader = () => {
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

    const ImageQuery = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_1" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

return (
    <Layout>
        <StyledCircle src={circle} />
        <StyledSmallOneCircle src={smallcircle} />
        <StyledSmallTwoCircle src={smallcircle} />
       
        <FixedRow xs={1} lg={2}>
            <StyledText xs={{order: 2}} lg={{order: 1}}>
                <StyledTitle> 
                Multifactor Authentication 
                <TextTitleRow>from{'\u00A0'}<ColoredP>SecureKi</ColoredP></TextTitleRow>    
                </StyledTitle>
                <StyledBody>
                {data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_1" ? document.node.content :  null)}  
                </StyledBody>
                <StyledList>
                    <StyledParagraph>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />
                            <p>Minimize risks of unauthorized access</p>
                        </TextRow>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />
                            <p>Self-service password reset function</p>
                        </TextRow>
                        <TextRow className="paragraph">
                            <StyledCheckpoint src={checkpoint} />    
                            <p>Secure remote access and VPN clients</p>
                        </TextRow>
                    </StyledParagraph>
                </StyledList>
                <ButtonRow>
                <MFAButton onClick={()=>window.location.href="mailto:info@secureki.com?subject=Request a demo&body=The message"} type="submit" background={"#FF6938"} font={"#FFFFFF"}>
                    {data.allStrapiButtons.edges.map(document=>document.node.id === "Buttons_3" ? document.node.title :  null)}
                </MFAButton>
                </ButtonRow>
                
            
            </StyledText>
            <StyledImageContainer xs={{order: 1}} lg={{order: 2}}>
                <StyledImage fluid={FilterQuery}/>
            </StyledImageContainer>
        </FixedRow>
    </Layout>
)};


