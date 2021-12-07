import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import StoriesCard from './StoriesCard.js'

import cirbig from '../../assets/customer/cirbig.svg'
import cirsmall from '../../assets/customer/cirsmall.svg'
import rec from '../../assets/customer/rec.svg'
import recempty from '../../assets/customer/recempty.svg'
import { graphql, useStaticQuery } from 'gatsby'


const Container = styled.div`
    height: 40em;
    
    background: #FFFFFF;
    max-width: 90em;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;


    @media (max-width: 991px) {
        max-width: 23.4375rem;
        height: 73.75rem;
    } 
`

const StyledTitle = styled(Col)`
    /* Short headline */
    width: 100vw;
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 5.125em;
    @media (max-width: 991px) {
        margin-top: 2.5rem;
        } 
    > h1 {
        position: absolute;
      
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5em;
        line-height: 1.2em;
        text-align: center;
        //letter-spacing:  -0.0125em;
        @media (max-width: 991px) {
            width: 20.375rem;
            font-size: 1.875rem;
            
            
            line-height: 2.4375rem;
            //letter-spacing:  -0.0313rem;
            text-align: center;

        } 
    }
`

const StyledRow = styled(Row)`
    margin: 0;
    padding-left: 10.4375em;
    padding-right: 10.4375em;
    @media (max-width: 1439px) {
        padding-left: 0.625rem;
        padding-right: 0.625rem;
        max-width: 69.125rem;
        display: flex;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }
`

const StoriesCol = styled(Col)`
    padding: 0; 
    justify-content: center; 
    display: flex;
`

const StyledRec = styled.img`
    z-index: 2;
    position: absolute;
    margin-left: 5.3125em;
    margin-top: 3.3125em;
    @media (min-width: 994px) and (max-width: 1439px) {
        display: none;
    }
    @media (max-width: 991px) {
        margin-left: -5.125rem;
        margin-top: 7.8125rem;
    }

`

const StyledSmallCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 81.0625em;
    margin-top: 34.5em;
    @media (max-width: 1440px) {
        display: none;
    }
`

const StyledCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 84.1875em;
    margin-top: 28em;
    @media (max-width: 1440px) {
        display: none;
    }
`

const StyledRecEmpty = styled.img`
    z-index: 3;
    position: absolute;
    margin-left: 78.0625em;
    margin-top: 28.9375em;
    @media (max-width: 1440px) {
        display: none;
    }
`
const Hook = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`



const Stories = () => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiArticle {
        edges {
            node {
            id
            content
            }
        }
        }
    }
    `)
    
    return (
        <>
        <Container id="Stories">
            <StyledRecEmpty src={recempty} />
            <StyledRec src={rec} />
            <StyledSmallCircle src={cirsmall} />
            <StyledCircle src={cirbig} />
            <Row style={{textAlign: "center", marginLeft: 0, marginRight: 0}}>
                <StyledTitle>
                    <h1>
                    Featured customer stories
                    </h1>
                </StyledTitle>
            </Row>
            <StyledRow>
                
                <StoriesCol>
                    
                    <StoriesCard 
                    story={data.allStrapiArticle.edges.map(document=>document.node.id === "Article_1" ? document.node.content :  null)}
                    image="mental"
                    title="Beh Swan Swan"
                    position="Magnum Group, CIO"
                    />
                </StoriesCol>
                <StoriesCol>
                <StoriesCard 
                    story={data.allStrapiArticle.edges.map(document=>document.node.id === "Article_2" ? document.node.content :  null)}
                    image="ketut"
                    title="Chia Nam"
                    position="Hap Seng Group, CIO"
                    />
                </StoriesCol>
                <StoriesCol>   
                <StoriesCard 
                    story={data.allStrapiArticle.edges.map(document=>document.node.id === "Article_3" ? document.node.content :  null)}
                    image="andrea"
                    title="Lee Kok Seong"
                    position="Takaful Ikhlas, CIO"
                />
                </StoriesCol>
            </StyledRow>
            
            <Hook id="Hook" />
        </Container>
        
        </>
    )
}

export default Stories;


