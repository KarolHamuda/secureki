import React from 'react'
import styled from 'styled-components';
import { Row, Col, Carousel } from 'react-bootstrap';
import logo from '../../../assets/hero NEW 1.svg'
import { FirstSlide } from './FirstSlide';
import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.div`
    height: 32.5em;
    
    background: #114748;
    @media (max-width: 991px) {
        
        height: 36.5625rem;
        padding-bottom: 0;
    }
`

const StyledCarousel = styled(Carousel)`


    >ol {
        >li {
            width: 6px;
            height: 6px;
            /* Dot */   
            border-radius: 200px 200px 200px 200px;
            -moz-border-radius: 200px 200px 200px 200px;
            -webkit-border-radius: 200px 200px 200px 200px;
            border: 0px solid #000000;
            
            margin: 0px 4px;
            opacity: 0.2;
            margin-bottom: 2.0625em;
            @media (max-width: 991px) {
                display: none;
            }  
            }
            @media (max-width: 991px) {
                display: none;
            }    
        }
    >a {
        >span {
            opacity: 0;
            color: #114748;
            background: #114748;

        }
        @media (max-width: 991px) {
                display: none;
            } 
        
    }
`

const Slider = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiCarousel {
            edges {
              node {
                id
                content
                title
              }
            }
          }
    }
    `)
    return (
        <Container>
                <StyledCarousel>
                    <Carousel.Item>
                        
                        <FirstSlide title={data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_1" ? document.node.title :  null)} description={data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_1" ? document.node.content :  null)} image='first'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <FirstSlide title={data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_2" ? document.node.title :  null)} description={data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_2" ? document.node.content :  null)} image="second"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <FirstSlide title={data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_5" ? document.node.title :  null)} description={data.allStrapiCarousel.edges.map(document=>document.node.id === "Carousel_5" ? document.node.content :  null)} image="third"/>
                    </Carousel.Item>
                </StyledCarousel>
        </Container>
    )
}

export default Slider;
