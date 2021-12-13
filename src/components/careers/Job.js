import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

const StyledRow = styled(Row)`
    margin: 0;
    height: 3rem;
    border-top: 1px outset RGB(17,74,79);
    border-top: 1px outset RGBA(17,74,79,0.11);
    background-color: ${props => props.backgroundColor};
    max-width: 69.375rem;
    padding-top: 0.75rem;
    @media (max-width: 991px) {
        
        margin-right: 1.0625rem;
    } 
`

const StyledPosition = styled(Col)`
    padding: 0;
    
    font-family: Messina Sans bold;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    //letter-spacing:  0.0063rem;
    text-align: left;
    color: #114A4F;


`

const StyledLocation = styled(Col)`
    padding: 0;
    font-family: Messina Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    //letter-spacing:  0.0063rem;
    text-align: left;
    color: #073233;
    padding-left: 3.25rem;
    @media (max-width: 991px) {
        display: none;
        padding-left: 0;
    } 

`

const PointerContainer = styled(Col)`
    padding: 0;
    width: 0.625rem;
    height: 0.3125rem;
    padding-left: 2rem;
    @media (max-width: 991px) {
        display: flex;
        justify-content: flex-end;
        padding-left: 0rem;
        
    } 
`

const StyledPointer = styled.div`
    padding: 0;
    margin-top: 0.3125rem;
    /* Arrow */
    width: 0.525rem;
	height: 0.525rem;
    border-top: 1px solid #073233;
    border-right: 1px solid #073233;
    
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);

    box-shadow: -0.25px 0 0px -0.25px rgba(0,0,0,1) inset;
    -webkit-box-shadow: -0.25px 0 0px -0.25px rgba(0,0,0,1) inset;
    -moz-box-shadow: -0.25px 0 0px -0.25px rgba(0,0,0,1) inset;
    @media (max-width: 991px) {
        display: flex;
        justify-content: flex-end;
    } 
`

const StyledPositionLink = styled(Link)`
    color: #114A4F;
    text-decoration: none;
    &:hover { 
        color: #114A4F;
        text-decoration: none;
        cursor: pointer;
    }
`

const StyledLocationLink = styled(Link)`
    color: #073233;
    text-decoration: none;
    &:hover { 
        color: #073233;
        text-decoration: none;
        cursor: pointer;
    }
`

const Job = ({position, location, background, url}) => {

    const UrlRemoval = (url) => {
        let newUrl = url.toString()
        let firstIndex = newUrl.indexOf('https')
        let cutUrl = newUrl.slice(firstIndex)
        let index = cutUrl.indexOf(',')
        return cutUrl.slice(0, index)
    }

    return (
        <StyledRow backgroundColor={background}>
            
                <StyledPosition>
                <StyledPositionLink to={UrlRemoval(url)}>{position}</StyledPositionLink>
                </StyledPosition>
                <StyledLocation>
                <StyledLocationLink to={UrlRemoval(url)}>{location}</StyledLocationLink>
                </StyledLocation>
                <PointerContainer xs={2}>
                    <StyledPointer />
                </PointerContainer>
                
        </StyledRow>
    )
}

export default Job
