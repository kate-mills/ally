const default_colors = [
  { id: 0, hex: "#1ae0d9", onHold: false },
  { id: 1, hex: "#65f7df", onHold: false },
  { id: 2, hex: "#c5ffaf", onHold: false },
  { id: 3, hex: "#8fbf35", onHold: false },
  { id: 4, hex: "#094d9b", onHold: false },
  { id: 5, hex: "#017720", onHold: false },
]

const top_half_of_app_height = 114;


const getFmtDate = ()=>{
  const d = new Date()
  let mo = d.getMonth()+1
  let dy = d.getDate() 
  let yr = String(d.getFullYear()).slice(2)
  return `${mo}-${dy}-${yr}`
}
const copyColorScheme = (lst)=>{
  let dt = getFmtDate()
  let hexes = [`Your Next Color Scheme RGB hex values - ${dt}`]
  let tempColors = [...lst]
  tempColors.forEach(clr=>{
    if(clr.onHold){
      hexes.push(`${clr.hex}  🔒`)
    }else{
      hexes.push(clr.hex)
    }
  })
  hexes.push('\n')
  hexes = hexes.join('\n')
  navigator.clipboard.writeText(hexes)
  return
}

export {default_colors, top_half_of_app_height, copyColorScheme}
