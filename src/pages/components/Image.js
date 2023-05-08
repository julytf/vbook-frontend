function Image({ src, style }) {
  console.log(src)
  if (!src?.startsWith?.('http')) src = `http://localhost:3000/${src?.slice?.(7).replaceAll('\\', '/')}`
  return <img src={src} style={style}/>
}

export default Image
