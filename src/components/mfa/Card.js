import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { propTypes } from 'react-bootstrap/esm/Image'

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



const ImageContainer = styled(GatsbyImage)`
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

const StyledLink = styled(Link)`
    color: #073233;
    text-decoration: none;
    &:hover { 
        color: #073233;
        text-decoration: none;
        cursor: pointer;
    }
`

const Card = ({title, description, link, picture, url}) => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiMfa {
            edges {
              node {
                picture {
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

    const UrlRemoval = (url) => {
        let newUrl = url.toString()
        let firstIndex = newUrl.indexOf('https')
        let cutUrl = newUrl.slice(firstIndex)
        let index = cutUrl.indexOf(',')
        return cutUrl.slice(0, index)
    }

   

    const ImageQuery1 = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_5" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery1 = ImageQuery1.filter(document=>document !== null ? document : null )
    const Image1 = FilterQuery1[0].gatsbyImageData

    const ImageQuery2 = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_6" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery2 = ImageQuery2.filter(document=>document !== null ? document : null )
    const Image2 = FilterQuery2[0].gatsbyImageData

    const ImageQuery3 = data.allStrapiMfa.edges.map(document=>document.node.id === "Mfa_7" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery3 = ImageQuery3.filter(document=>document !== null ? document : null )
    const Image3 = FilterQuery3[0].gatsbyImageData

    return (
        <Container>
            <StyledRow>
                {picture === 'first' ?
                <ImageContainer image={Image1} /> :
                picture === 'second' ? <ImageContainer image={Image2} /> : <ImageContainer image={Image3} /> }
                
            </StyledRow>
            <TitleContainer>
                {title}
            </TitleContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
            <LinkContainer>
                <StyledLink to={UrlRemoval(url)}>{link}</StyledLink>
            </LinkContainer>
            
        </Container>
    )
}

export default Card;

Card.propTypes = {
    url: propTypes.string
};
