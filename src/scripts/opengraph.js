const sharp = require("sharp")

// OpenGraph images.
;[600, 1080].forEach((size) => {
  sharp("original_assets/images/brand/presentation.png")
    .png({ quality: 90 })
    .resize(size)
    .toFile(`public/static/images/brand/preview-${size}.png`, (error) => {
      if (error) throw error
      console.log(`Generated file: public/static/images/brand/preview-${size}.png`)
    })
})
