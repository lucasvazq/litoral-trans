const sharp = require("sharp")

// OpenGraph.
;[600, 1080].forEach((size) => {
  const filename = `public/static/images/brand/preview-${size}.png`
  sharp("original_assets/images/brand/presentation.png")
    .png({ quality: 90 })
    .resize(size)
    .toFile(filename, (error) => {
      if (error) throw error
      console.log(`Generated file: ${filename}`)
    })
})

// OpenSearch.
const size = 64
const filename = `public/static/images/brand/search-${size}.png`
sharp("original_assets/images/brand/icon.png")
  .png({ quality: 90 })
  .resize(size)
  .toFile(filename, (error) => {
    if (error) throw error
    console.log(`Generated file: ${filename}`)
  })
