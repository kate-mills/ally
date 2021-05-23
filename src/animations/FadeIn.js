import React from 'react'
import styled, { keyframes } from 'styled-components'

const SlideBox = ({children}) => {
 return (
  <Container>
     {children}
  </Container>
 )
}
export default SlideBox

const fadeIn = keyframes`
 0% {
   opacity: 0;
 }
 80% {}
 100% {
   opacity: 1;
 }
`
const Container = styled.main`
 animation-name: ${fadeIn};
 animation-duration: 1.5s;
 animation-iteration-count:1;

`
