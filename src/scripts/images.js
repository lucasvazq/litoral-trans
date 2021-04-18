const path = require("path")

const sharp = require("sharp")

const brandImagesOutputFolder = path.join("public", "static", "images", "brand")
const brandImagesInputFolder = path.join("original_assets", "images", "brand")

// OpenGraph.
;[600, 1080].forEach((size) => {
  const filename = path.join(brandImagesOutputFolder, `preview-${size}.png`)
  sharp(path.join(brandImagesInputFolder, "presentation.png"))
    .png({ quality: 90 })
    .resize(size)
    .toFile(filename, (error) => {
      if (error) throw error
      console.log(`Generated file: ${filename}`)
    })
})

// OpenSearch.
const size = 64
const filename = path.join(brandImagesOutputFolder, `search-${size}.png`)
sharp(path.join(brandImagesInputFolder, "icon.png"))
  .png({ quality: 90 })
  .resize(size)
  .toFile(filename, (error) => {
    if (error) throw error
    console.log(`Generated file: ${filename}`)
  })
