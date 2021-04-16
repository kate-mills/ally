import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle, className}) => {
  return (
    <div className={className}>
      <p className="heading">
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
      </p>
    </div>
  )
}

export default styled(Title)`
  font-size: 2.5rem;
  letter-spacing: 7px;
  margin-top: 0;
  margin-bottom: 1.25rem;
  text-align: center;
  text-transform: capitalize;

  .title {
    font-family: var(--mainFF);;
    color: ${props => props.titleColor || 'var(--primaryBlack)'};
  }
  .subtitle {
    font-family: var(--mainFF);;
    color: ${props => props.subTitleColor || 'var(--primaryDark)'};
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
