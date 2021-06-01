import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Btn = ({to, text, color, bgColor, className}) => {
  return (
    <Link to={to}
      className={`${className}
      btn--animation btn--${bgColor || 'dark'}
      `}
    >{text}</Link>
  )
}

export default styled(Btn)`
  &:link,
  &:visited{
    font-size: 1rem;
    letter-spacing: var(--altSpacing);
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 3.5rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all .3s;
    position: relative;
  }
  &:hover{
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
  }
  &:active {
    transform: translateY(.1rem);
    box-shadow: 0 .5rem .1rem rgba(0, 0, 0, .2);
  }
  &::after{
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }
  &:hover::after{
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
  &.btn--animation{
    backface-visibility: hidden;
    animation: moveInBtn .5s ease-out .5s;
    animation-fill-mode: backwards;
  }
  &.btn--light {
    background-color: var(--themeMd);
    color: var(--primaryBlack);
  }
  &.btn--dark {
    background-color: var(--themeMd);
    color: var(--primaryBlack);
  }
  &.btn--light::after,
  &.btn--dark::after{
    background-color: var(--solutionsColor);
  }
  @media(min-width: 768px){ margin: 1rem; }
`
