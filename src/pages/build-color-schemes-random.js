import * as React from 'react'
import Layout from '../components/Layout'
import FullSeo from '../components/FullSeo'
import { useColorsContext } from '../context/state-colorgen/context/colors_context'
import ColorList from '../components/ColorSchemeGenerator/ColorList'
import styled from 'styled-components'

const ColorSchemes = () => {
  const {all_colors, updatePendingColors} = useColorsContext()
  const [alert,setAlert] = React.useState(false)

  React.useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])


  const handleClickCopyColors = ()=>{
    let hexes = [`Your Next Color Scheme`]
    let tempColors = [...all_colors]
    tempColors.forEach(clr=>{
      if(clr.onHold) hexes.push(clr.hex)
    })
    hexes = hexes.join('\n')
    setAlert(true)
    navigator.clipboard.writeText(hexes)
  }
  
  return (
    <Layout>
      <FullSeo title="Color Schemes" noindex />
      <ColorSchemeWrapper>
          <div className="app-nav">
            <button tabIndex="0" className="btn generate" onClick={()=>updatePendingColors([...all_colors])} aria-label="generate color scheme"></button>
            {alert ? <span className="alert">COPIED</span>:<span className="alert"></span>}
            <button tabIndex="0" className="btn copy" onClick={handleClickCopyColors} aria-label="copy color scheme"></button>
          </div>
            <ColorList colors={all_colors}/>
        </ColorSchemeWrapper>
    </Layout>
  )
}

export default ColorSchemes

const ColorSchemeWrapper = styled.div`
  & div.app-nav{
    align-content: center;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 2.2rem;
    margin: 0;
    padding: 0 2rem;
    width: 100%;
    > span,> button{
      font-family: var(--altFF);
      font-size: 1.2rem;
      font-weight: 700;
      line-height: normal;
      margin: 0;
      min-width:33.3333%; 
      overflow-wrap: break-word;
      text-align: center;
      white-space: pre-line;
    }
    button.btn{
      background: transparent;
      border: none;
      color: var(--primaryBlack);
      cursor: pointer;
      letter-spacing: var(--altSpacing);
      outline-color: transparent; 
    }
    button.btn.generate{ transform: translateX(0);min-width:40%;}
    button.btn.copy{ transform: translateX(0); min-width:40%;}
    button.btn.generate:before{content:'generate color palette!';}
    button.btn.copy:before{ content:'copy color palette!';}
    span.alert{font-weight:400;min-width:20%;}
  }
  @media screen and (max-width:1200px){
    & div.app-nav{
      > span,> button{font-size:1rem;}
    }
  }

  @media screen and (max-width: 646px){
    & div.app-nav{
      button.btn.generate:before{content:'generate colors!';}
      button.btn.copy:before{content:'copy colors!';}
    }
  }
  @media screen and (max-width: 500px){
    & div.app-nav{
      > span,> button{font-size:.8rem;}
      button.btn.generate{transform:translateX(-10px);}
      button.btn.copy{transform:translateX(10px);}
    }
  }

`
