import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'


import first from '../../assets/customerstories/Lee Kok Seong (Takaful Ikhlas CIO).png'
import second from '../../assets/customerstories/Chia Nam Liang (Hap Seng CIO).png'

import third from '../../assets/customerstories/Beh Swan Swan (Magnum CIO).png'

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

const ImageContainer = styled.img`
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
    return (
        <Container>
                <TextContainer>
                    {story}
                </TextContainer>
            <Row style={{margin: 0}}>
                <Col xs={4} style={{padding: 0}}>
                    {image === "andrea" ? <ImageContainer src={first} /> : image === "ketut" ? <ImageContainer src={second} /> : <ImageContainer src={third} />}                    
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
