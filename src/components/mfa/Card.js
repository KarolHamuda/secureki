import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
    width: 22.0625em;
    height: 22.3125em;
    background: #FFFFFF;
   
    align-items: center;
    z-index: 2;
    @media (min-width: 992px) and (max-width: 1439px) {
        width: 19rem;
        height: 25rem;
    }
    @media (max-width: 991px) {
        height: 26.0625rem;
    } 

`

const StyledRow = styled(Row)` 
    margin: 0;
`



const ImageContainer = styled(Img)`
    border-radius: 0.8125em;
    border-radius: 0.8125em;
    -moz-border-radius: 0.8125em;
    -webkit-border-radius: 0.8125em;
    box-shadow: 7px 7px 20px rgba(7, 50, 51, 0.06);
    margin-bottom: 1.875em;
    
    padding: 0;

    width: 22.3125em;
`

const TitleContainer = styled(Row)`
    margin: 0;
    font-family: Messina Sans Bold;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    //letter-spacing:  -0.10000000149011612px;
    text-align: left;

    width: 14.583333333333334em;
    color: #FF6938;

    @media (min-width: 992px) and (max-width: 1439px) {
        width: auto;
    }
`

const DescriptionContainer = styled(Row)`
    width: 21.875em;
    margin: 0;
    font-family: Messina Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing:  0.10000000149011612px;
    text-align: left;
    color: #073233;
    margin: 1em 0;
    @media (min-width: 992px) and (max-width: 1439px) {
        width: auto;
    }

`
const LinkContainer = styled(Row)`
    margin: 0;
    font-family: Messina Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing:  0.10000000149011612px;
    text-align: left;
    color: #073233;
    text-decoration-line: underline;

`

const Card = ({title, description, link, picture}) => {
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

    const ImageQuery1 = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_5" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery1 = ImageQuery1.filter(document=>document !== null ? document : null )

    const ImageQuery2 = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_6" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery2 = ImageQuery2.filter(document=>document !== null ? document : null )

    const ImageQuery3 = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_7" ? document.node.picture.localFile.childImageSharp.fluid : null)
    const FilterQuery3 = ImageQuery3.filter(document=>document !== null ? document : null )
    
    return (
        <Container>
            <StyledRow>
                {picture === 'first' ?
                <ImageContainer fluid={FilterQuery1} /> :
                picture === 'second' ? <ImageContainer fluid={FilterQuery2} /> : <ImageContainer fluid={FilterQuery3} /> }
                
            </StyledRow>
            <TitleContainer>
                {title}
            </TitleContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
            <LinkContainer>
                {link}
            </LinkContainer>
            
        </Container>
    )
}

export default Card;