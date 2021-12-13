import React from 'react'
import { Row } from 'react-bootstrap'
import styled from 'styled-components'
import Job from './Job'

import { graphql, useStaticQuery } from 'gatsby'

const Container = styled.div`
    padding-left: 10.3125rem;
    margin-top: 4.1875rem;
    height: auto;
    @media (min-width: 992px) and (max-width: 1439px) {
        max-width: 60.25rem;
        padding-left: 4rem;
    }
    @media (max-width: 991px) {
        max-width: 99vw;
        padding-left: 1.125rem;
        justify-content: center;
        -webkit-justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1.0625rem;
    } 
    
`

const StyledTitle = styled(Row)`
    margin: 0;
    padding-bottom: 2.5rem;

    font-family: Messina Sans bold;
    font-size: 1.5rem;
    font-style: normal;
    line-height: 2rem;
    //letter-spacing:  -0.0063rem;
    text-align: left;
    color: #073233;
    @media (max-width: 991px) {
        padding-bottom: 1.0625rem;
    } 

`

const SinglePE = ({section}) => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiFirstJob {
            edges {
              node {
                id
                content
                title
                url
              }
            }
          }
    }
    `)
    return (
        <Container>
            <StyledTitle>
                {section}
            </StyledTitle>
            <Job position={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_1" ? document.node.title :  null)} location={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_1" ? document.node.content :  null)} url={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_1" ? document.node.url :  null)} />
            <Job position={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_2" ? document.node.title :  null)} location={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_2" ? document.node.content :  null)} url={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_2" ? document.node.url :  null)} background="#FCF5F03D"/>
            <Job position={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_3" ? document.node.title :  null)} location={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_3" ? document.node.content :  null)} url={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_3" ? document.node.url :  null)} />
            <Job position={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_4" ? document.node.title :  null)} location={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_4" ? document.node.content :  null)} url={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_4" ? document.node.url :  null)} background="#FCF5F03D"/>
            <Job position={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_5" ? document.node.title :  null)} location={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_5" ? document.node.content :  null)} url={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_5" ? document.node.url :  null)} />
            <Job position={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_6" ? document.node.title :  null)} location={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_6" ? document.node.content :  null)} url={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_6" ? document.node.url :  null)} background="#FCF5F03D"/>
            <Job position={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_7" ? document.node.title :  null)} location={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_7" ? document.node.content :  null)} url={data.allStrapiFirstJob.edges.map(document=>document.node.id === "First-job_7" ? document.node.url :  null)} />

        </Container>
    )
}

export default SinglePE