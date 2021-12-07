import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import chart from "../../assets/mfa/chart.svg"
import Media from 'react-media'

import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
    height: 48.6875em;
    
    background: #FCF5F0;
    padding-bottom: 7.125em;

    max-width: 90em;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        height: 55rem;
        max-width: 62rem;
    }

    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 72.5625rem;
    } 
`
const TextContainer = styled(Col)`
    padding-left: 0;
    padding-top: 7.625em;
    margin-left: 3.125em;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 0;
    }
    @media (max-width: 991px) {
        padding: 0;
        margin: 0;
        margin-left: 1.125rem;
        margin-top: 3.0625rem;
    }
`

const ImageContainer = styled(Col)`
    padding-top: 6.3125em;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    @media (max-width: 991px) {
        padding: 0;
        margin: 0;
        width: 375px;
    }
`
const StyledRow = styled(Row)`
    padding-left: 5.625em;
    margin-right: 0;
    margin-left: 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-left: 1.5rem;
    }
    @media (max-width: 991px) {
        padding: 0;
        margin: 0;
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
    @media (max-width: 991px) {
        padding: 0;
        width: auto; 
        margin-bottom: 1.5625rem;
        font-size: 1.875rem;
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
    @media (min-width: 992px) and (max-width: 1439px) {
        padding-right: 1rem;
    }
    @media (max-width: 991px) {
        padding: 0;
        margin-left: 0.9375rem;
        padding-right: 0.9375rem;
        margin-bottom: 1.5625rem;
        max-width: 20.5rem;
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
    @media (max-width: 991px) {
        flex-wrap: nowrap;
    }  
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
    @media (max-width: 991px) {
        margin-left: 0.4rem;
    } 
`

const Styledimg = styled(Img)`
    max-width: 32.125em;
    margin-top: 6rem;
    margin-left: 2.5rem;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: -2rem;
        
        margin-top: 7rem;
        max-width: 29rem;
    }
    @media (max-width: 991px) {
        max-width: 22.5rem;
        margin-top: 3rem;
        margin-left: 0rem;
        margin-bottom: 2rem;
    }
`

const Wrapper = styled.div`
@media (max-width: 991px) {
    max-width: 22.0375rem;
    overflow: hidden;
}
`

const NoMarginRow = styled(Row)`
    margin: 0;
`

const StyledChart = styled.img`
    z-index: 2;
    position: absolute;
    margin-top: 3.0625em;
    @media (max-width: 991px) {
        margin: 0;
    }
`

const StyledChartText = styled.div`
    z-index: 1;
    position: absolute;

    

    align-content: nowrap;
    margin-top: 2.4571428571428573em;
    margin-left: 0.8285714285714286em;

    font-family: Messina Sans Bold;
    font-size: 2.1875em;
    font-style: normal;
    font-weight: 700;
    line-height: 1.0285714285714285em;
    //letter-spacing:  0.0028571428997176034em;
    text-align: left;
    @media (max-width: 991px) {
        margin-top: 0;
        margin-left: 0;
    }

`
const StyledPercentage = styled.div`
    margin-left: 5.916666666666667em;
    margin-top: 7.8em;
    font-family: Messina Sans;
    font-size: 0.75em;
    font-style: normal;
    font-weight: 700;
    line-height: 3em;
    //letter-spacing:  0.008333333457509676em;
    text-align: left;
    @media (max-width: 991px) {
        margin-top: 0;
        margin-left: 12.85rem;
    }
`

const ChartTitle = styled.div`
    height: 1.8391666666666667em;
    font-family: Messina Sans bold;
    margin-bottom: 0.47750000000000004em;
    font-size: 0.75em;
    font-style: normal;
    font-weight: 700;
    line-height: 2.3333333333333335em;
    //letter-spacing:  0;
    text-align: left;
    @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        text-align: center;
    }

`

const ChartBody = styled.div`
    width: 12.038461538461538em;
    font-family: Messina Sans semibold;
    margin-bottom: 0.2692307692307692em;
    font-size: 1.625em;
    font-style: normal;
    
    line-height: 1.1153846153846154em;
    //letter-spacing:  0.0038461539034660044em;
    text-align: left;
    color: #FF6938;
    @media (min-width: 992px) and (max-width: 1439px) {
        width: auto;
    }
    @media (max-width: 991px) {
        display: flex;
        justify-content: center;
        text-align: center;
        
        width: auto;
    }
`

const ChartFooter = styled.div`
    font-family: Messina Sans;
    font-size: 0.75em;
    font-style: normal;
    font-weight: 400;
    line-height: 3.3333333333333335em;
    //letter-spacing:  0.008333333457509676em;
    text-align: left;
    color: #17494D80;
    @media (max-width: 991px) {
        display: flex;
        justify-content: center;
    }
`

const ChartText = styled.div`
    margin-top: 2.6225em;
    margin-left: 8em;
    position: absolute;

    @media (max-width: 991px) {
        margin-left: 0;
        margin-top: 7.8875rem;
        
        justify-content: center;
    }
`

const ChartSVG = styled.svg`
    margin-left: 8.4375rem;
`

export const ChartOffer = () => {
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

    const ImageQuery = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_2" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery = ImageQuery.filter(document=>document !== null ? document : null )

    return (
        <div style={{background: "#FCF5F0"}}>
        <Container>
            <StyledRow >
                <ImageContainer xs={6} lg={6} xs={{ order: 2 }} lg={{ order: 1 }}>
                <Media queries={{
                            small: "(max-width: 991px)",
                            large: "(min-width: 961px)"
                        }}>
                            {matches => (
                                <>
                                {matches.large && <Styledimg fluid={FilterQuery} /> }
                                {matches.small && 
                                <NoMarginRow xs={1} lg={3}>
                                        <NoMarginRow>
                                        <ChartSVG width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M47.935 58.28C47.935 55.2 46.045 53.065 43.63 52.505C45.625 51.84 47.34 49.845 47.34 47.045C47.34 42.95 43.7 40.5 39.255 40.5C34.81 40.5 31.17 42.95 31.17 47.045C31.17 49.845 32.885 51.84 34.88 52.505C32.465 53.065 30.575 55.2 30.575 58.28C30.575 62.655 34.215 65.385 39.255 65.385C44.295 65.385 47.935 62.655 47.935 58.28ZM35.65 47.5C35.65 45.82 36.77 44.56 39.255 44.56C41.74 44.56 42.86 45.82 42.86 47.5C42.86 49.355 41.46 50.72 39.255 50.72C37.05 50.72 35.65 49.355 35.65 47.5ZM43.385 58C43.385 60.065 41.88 61.325 39.255 61.325C36.595 61.325 35.125 60.065 35.125 58C35.125 55.9 36.595 54.36 39.255 54.36C41.915 54.36 43.385 55.9 43.385 58ZM69.1028 56.88C69.1028 51.735 65.1828 48.76 61.2628 48.76C58.8828 48.76 56.6778 49.775 55.4528 51.63C55.5928 47.045 57.4828 44.56 60.5628 44.56C62.5578 44.56 63.8878 45.61 64.0278 47.465H68.5778C68.1578 43.23 65.3578 40.5 60.8778 40.5C56.0828 40.5 51.1828 43.475 51.1828 52.96C51.1828 61.745 55.5578 65.385 60.5978 65.385C65.3928 65.385 69.1028 61.92 69.1028 56.88ZM64.5528 56.985C64.5528 59.68 62.8378 61.325 60.5628 61.325C58.3228 61.325 56.4678 59.715 56.4678 57.02C56.4678 54.325 58.2528 52.75 60.5278 52.75C62.8028 52.75 64.5528 54.29 64.5528 56.985ZM73.3425 56.324C72.1545 56.324 71.2425 57.188 71.2425 58.448C71.2425 59.708 72.1545 60.584 73.3425 60.584C74.6025 60.584 75.5025 59.708 75.5025 58.448C75.5025 57.188 74.6025 56.324 73.3425 56.324ZM79.2225 56.6H77.9985L72.7545 65H73.9785L79.2225 56.6ZM73.3665 57.32C73.9905 57.32 74.4345 57.764 74.4345 58.436C74.4345 59.108 73.9905 59.576 73.3665 59.576C72.7305 59.576 72.3105 59.12 72.3105 58.436C72.3105 57.764 72.7305 57.32 73.3665 57.32ZM78.7665 60.956C77.5785 60.956 76.6665 61.82 76.6665 63.08C76.6665 64.34 77.5785 65.216 78.7665 65.216C80.0265 65.216 80.9265 64.34 80.9265 63.08C80.9265 61.82 80.0265 60.956 78.7665 60.956ZM78.7905 61.952C79.4145 61.952 79.8585 62.396 79.8585 63.068C79.8585 63.74 79.4145 64.208 78.7905 64.208C78.1545 64.208 77.7345 63.752 77.7345 63.068C77.7345 62.396 78.1545 61.952 78.7905 61.952Z" fill="#15363C"/>
                                            <path d="M53 4C64.0794 4 74.8318 7.75483 83.5027 14.6518C92.1737 21.5488 98.2513 31.1808 100.744 41.9762C103.236 52.7716 101.997 64.0931 97.2275 74.0934C92.458 84.0937 84.4402 92.1825 74.4824 97.0398C64.5245 101.897 53.2144 103.237 42.3974 100.839C31.5805 98.4418 21.8953 92.4493 14.9221 83.8395C7.94899 75.2297 4.09955 64.5108 4.0019 53.4318C3.90426 42.3529 7.56418 31.5678 14.3845 22.8364" stroke="#FF6938" stroke-width="8"/>
                                            <path d="M14.3845 22.8364C18.9673 16.9695 24.8266 12.224 31.5176 8.96016C38.2086 5.69632 45.5554 4 53 4" stroke="#F4D4BC" stroke-width="8"/>
                                        </ChartSVG>

                                        </NoMarginRow>
                                    
                                        <ChartText>
                                            <ChartTitle>
                                                DID YOU KNOW?
                                            </ChartTitle>
                                            <ChartBody>
                                                86% of security breaches involve compromised passwords.
                                            </ChartBody>
                                            <ChartFooter>
                                            2020 Verizon Data Breach Investigations Report
                                            </ChartFooter>
                                        </ChartText>
                                </NoMarginRow>
                                }
                                </>
                            )}
                    </Media>
                </ImageContainer>
                <TextContainer lg={{ order: 2}}>
                    <StyledSlogan>
                        MFA
                    </StyledSlogan>
                    <StyledTitle>
                    {data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_2" ? document.node.title :  null)} 
                    </StyledTitle>
                    <StyledContent>
                        <Row>
                        {data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_2" ? document.node.content :  null)}  
                        </Row>
                    </StyledContent>
                    <StyledMoreabout>
                        <text>Learn about Multifactor Authentication</text>
                        <StyledPointer>   →</StyledPointer>
                    </StyledMoreabout>
                    <Media queries={{
                            small: "(max-width: 991px)",
                            large: "(min-width: 961px)"
                        }}>
                            {matches => (
                                <>
                                {matches.small && <Wrapper><Styledimg fluid={FilterQuery} /></Wrapper> }
                                {matches.large && 
                                <NoMarginRow>
                                        <NoMarginRow>
                                            <StyledChart src={chart}/>
                                            <StyledChartText>86</StyledChartText>
                                            <StyledPercentage>%</StyledPercentage>
                                        </NoMarginRow>
                                    
                                        <ChartText>
                                        <ChartTitle>
                                            DID YOU KNOW?
                                        </ChartTitle>
                                        <ChartBody>
                                            86% of security breaches involve compromised passwords.
                                        </ChartBody>
                                            <ChartFooter>
                                            2020 Verizon Data Breach Investigations Report
                                            </ChartFooter>
                                        </ChartText>
                                </NoMarginRow>
                                }
                                </>
                            )}
                    </Media>
                </TextContainer>
            </StyledRow>
        </Container>
        </div>
    )
}