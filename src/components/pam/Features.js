import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { FeaturesBasicList } from './FeaturesBasicList.js'
import { FeaturesAdvancedList } from './FeaturesAdvancedList.js'


const Container = styled.div`
    height: 75.9375em;
    
    background: #FFFFFF;
    max-width: 90em;
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
        height: 151.375rem;
    } 
`

const StyledTitle = styled(Col)`
    /* Short headline */
    width: 100vw;
    height: 3em;
    justify-content: center;
    display: flex;
    color: #073233;
    margin-bottom: 2.0625em;
    margin-top: 8em;
    @media (max-width: 991px) {
        width: auto;
        margin-left: 0;
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
    }
    @media (max-width: 991px) {
        margin-top: 3.0625rem;
    } 
`

const StyledBasic = styled.button`
    font-family: Messina Sans semibold;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing:  0.468px;
    text-align: center;
    padding: 0;
    
    color: ${props => (props.state == true ? "#073233" : "#B6B6B6")};
    transition: 0.3s;
    background: none;
    border: none;
    border-radius: none;
    -moz-border-radius: none;
    -webkit-border-radius: none;
    margin-left: 40.5em;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 0;
    } 
    @media (max-width: 991px) {
        margin-left: 0;
    }
`

const StyledAdvanced = styled.button`
    font-family: Messina Sans semibold;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing:  0.468px;
    text-align: center;
    padding: 0;
    
    color: ${props => (props.state == true ? "#B6B6B6" : "#073233")};
    transition: 0.3s;
    background: none;
    border: none;
    border-radius: none;
    -moz-border-radius: none;
    -webkit-border-radius: none;
    margin-left: 2.59375em; 
  
    @media (max-width: 991px) {
        margin-left: 6.125rem;
    } 

`

const StyledButtonsRow = styled.div`
    margin: 0;
    align-items: flex-start;
    display: flex;
    height: 2.25em;
    margin-bottom: 3.1875em;
    @media (min-width: 992px) and (max-width: 1439px) {
        display: flex;
        justify-content: center;
    }
    @media (max-width: 991px) {
        display: flex;
        justify-content: center;
    } 
`

const StyledLine = styled(Row)`
    margin: 0;
    margin-top: 2.0625em;
    margin-left: 13.4375em;
    width: 63.125em;
    height: 0.1875em;
    background-color: #EDEDED;
    z-index: 1;
    position: absolute;
    @media (min-width: 992px) and (max-width: 1439px) {
        width: 60.5rem;
        margin-left: 1.5rem;
    }
    @media (max-width: 991px) {
        width: 21.25rem;
        margin-left: 0;
    } 
`

const StyledUnderline = styled.div`
    background-color: #FF6938;
    margin-left: ${props => (props.state == true ? "25.5em" : "31.3125em")};
    width: ${props => (props.state == true ? "5.8125em" : "7.425em")};;
    transition-timing-function: ease-in-out;
    height: 0.1875em;
    z-index: 2;
    position: absolute;
    transition: 0.3s;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: ${props => (props.state == true ? "22.8em" : "28.5125em")};
    }
    @media (max-width: 991px) {
        width: 10.625rem;
        margin-left: ${props => (props.state == true ? "0" : "10.625rem")};
    } 
`



export const Features = () => {
    const [ active, setActive ] = useState(true); 
    return (
        <Container>
            <Row style={{textAlign: "center", marginLeft: 0, marginRight: 0}}>
                <StyledTitle>
                    <h1>
                    Features overview
                    </h1>
                </StyledTitle>
            </Row>
            <StyledButtonsRow>
                <StyledBasic onClick={() => setActive(true)} state={active}>
                    Basic
                </StyledBasic>
                <StyledAdvanced onClick={() => setActive(false)} state={active}>
                    Advanced
                </StyledAdvanced>
                <StyledLine>
                    <StyledUnderline state={active} />
                </StyledLine>
                
            </StyledButtonsRow>
            <FeaturesBasicList state={active} />
            <FeaturesAdvancedList state={active} />

            
        </Container>
    )
}