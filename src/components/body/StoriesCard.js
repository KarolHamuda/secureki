import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Container = styled.div`
    width: 22.0625rem;
    height: 22.3125rem;
    background: #FFFFFF;
    box-shadow: 0px 0.9375em 2.1875em rgba(0, 0, 0, 0.06);
    align-items: center;
    z-index: 2;
    margin-bottom: 1.25rem;
    @media (min-width: 992px) and (max-width: 1439px) {
        width: 19rem;
        height: 24.5rem;
    }
    @media (max-width: 991px) {
        width: 19.375rem;
        height: auto;
        padding-bottom: 0;
    } 

`

const TextContainer = styled(Row)`
    /* Subtitle Text */
    font-family: Messina Sans;
    font-style: italic;
    font-weight: normal;
    font-size: 1.0625rem;
    line-height: 1.6875rem;
    text-align: left;
    vertical-align: top;
    /* or 156% */
    height: 12.375rem;
    width: 18.625rem;
    color: #5F6E70;
    margin: 0;
    margin-left: 2rem;
    margin-top: 2.125rem;
    margin-right: 1.4375rem;
    @media (min-width: 992px) and (max-width: 1439px) {
        height: 15.375rem;
    width: 15.625rem;
        
    }
    

    @media (max-width: 991px) {
        font-size: 0.9375rem;
        margin-left: 1.25rem;
        margin-top: 1.0625rem;
        margin-right: 0.3125rem;
        margin-bottom: 0.75rem;
        width: auto;
        height: auto;
    } 
`

const ImageContainer = styled(GatsbyImage)`
    max-width: 4.0625rem;
    max-height: 4.1875rem;
    border-radius: 50%;
    margin-left: 2.0625em;
    margin-bottom: 2.4375em;
    margin-top: 0.80125em;
    
    padding: 0;
    @media (max-width: 991px) {
        margin-left: 1.25rem;
    } 
`

const TitleContainer = styled(Row)`
    width: 8.5em;
    height: 1.5em;
    font-family: Messina Sans bold;
    font-style: normal;
    font-weight: bold;
    font-size: 1em;
    line-height: 1.5em;
    /* identical to box height, or 150% */
    margin-top: 1.36375em;
    display: flex;
    align-items: center;
    //letter-spacing:  0.00625em;
    color: #FF6938;
`

const JobContainer = styled(Row)`
    
    height: 1.4285714285714286em;

    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875em;
    line-height: 1.4285714285714286em;
    /* identical to box height, or 143% */
    display: flex;
    align-items: center;

    color: #68737D;
    margin-right: 0;
    

`



const StoriesCard = ({story, image, title, position}) => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiArticle {
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

    const ImageQuery1 = data.allStrapiArticle.edges.map(document=>document.node.id === "Article_1" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery1 = ImageQuery1.filter(document=>document !== null ? document : null )
    const Image1 = FilterQuery1[0].gatsbyImageData

    const ImageQuery2 = data.allStrapiArticle.edges.map(document=>document.node.id === "Article_2" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery2 = ImageQuery2.filter(document=>document !== null ? document : null )
    const Image2 = FilterQuery2[0].gatsbyImageData

    const ImageQuery3 = data.allStrapiArticle.edges.map(document=>document.node.id === "Article_3" ? document.node.picture.localFile.childImageSharp : null)
    const FilterQuery3 = ImageQuery3.filter(document=>document !== null ? document : null )
    const Image3 = FilterQuery3[0].gatsbyImageData
    return (
        <Container>
                <TextContainer>
                    {story}
                </TextContainer>
            <Row style={{margin: 0}}>
                <Col xs={4} style={{padding: 0}}>
                    {image === "andrea" ? 
                    <ImageContainer image={Image3} /> : 
                    image === "ketut" ? 
                    <ImageContainer image={Image2} /> : 
                    <ImageContainer image={Image1} />}                    
                </Col>
                <Col>
                    <TitleContainer>
                        {title}
                    </TitleContainer>
                    <JobContainer>
                        {position}
                    </JobContainer>
                </Col>
            </Row>
            
        </Container>
    )
}

export default StoriesCard;
