export const preloadAssets = async (assets) => {
  const promises = assets.map(src => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.src = src
      img.onload = resolve
      img.onerror = reject
    })
  })

  return Promise.all(promises)
} 