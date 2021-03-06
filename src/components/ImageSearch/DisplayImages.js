import * as React from 'react'

import Photo from './Photo'
import styled from 'styled-components'

const DisplaySearch = ({loading, photos})=>{
  return(
    <DisplaySearchWrapper>
      <div className="photos-center">
        {
          Array.isArray(photos) && (photos.map((photo, idx)=>{
            return(
                <Photo key={`${photo.id}-${idx}`} photo={photo}/>
              )
            })
          )
        }
      </div>
      {loading && <h2 className="loading">Loading...</h2>}
    </DisplaySearchWrapper>
  )
}

const DisplaySearchWrapper = styled.section`
  &{
    padding 5rem 0;
  }
  h2{ font-size: 2rem; text-align: center; margin-bottom: 5rem; }
  .photos-center {
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    gap: 2rem;
  }
  @media screen and (min-width: 576px) {
    .photos-center {
      grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    }
    .search-form {
      max-width: var(--fixed-width);
    }
  }
  
  .loading {
    text-align: center;
    padding: 3rem;
  }

`

export default DisplaySearch
