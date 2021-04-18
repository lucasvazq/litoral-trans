const fs = require("fs")
const path = require("path")

const pwaAssetGenerator = require("pwa-asset-generator")

const config = require("../next.config")

const baseFolder = "public"
const staticFolder = path.join(baseFolder, "static")
const brandImagesOutputFolder = path.join(staticFolder, "images", "brand")
const brandImagesInputFolder = path.join("original_assets", "images", "brand")

const replaceBasePath = (content) => content.split(staticFolder).join(staticFolder.replace(baseFolder, ""))

;(async () => {
  const content = []

  // Generates favicon.
  let generatedImages = await pwaAssetGenerator.generateImages(path.join(brandImagesInputFolder, "icon.png"), brandImagesOutputFolder, {
    favicon: true,
    iconOnly: true,
    type: "png",
    background: config.env.colorPrimary,
    xhtml: true,
    log: false,
  })
  content.push(generatedImages.htmlMeta.favicon)

  // Generate the rest of images.
  generatedImages = await pwaAssetGenerator.generateImages(path.join(brandImagesInputFolder, "presentation.png"), brandImagesOutputFolder, {
    quality: 100,
    background: config.env.colorPrimary,
    xhtml: true,
    log: false,
  })
  content.push(Object.values(generatedImages.htmlMeta).join(""))

  console.log(`Images generated in ${brandImagesOutputFolder}\n`)

  // Output header tags.
  console.log(`Put this tags under Header in our custom app file at ${path.join("pages", "_app.tsx")}`)
  console.log(replaceBasePath(content.join("")))

  // manifest.json
  const manifestContent = {
    name: config.env.name,
    short_name: config.env.name,
    theme_color: config.env.colorPrimary,
    background_color: config.env.colorPrimary,
    description: config.env.slogan,
    display: "standalone",
    orientation: "portrait",
    start_url: "/",
    scope: "/",
    icons: generatedImages.manifestJsonContent,
  }
  fs.writeFile(path.join(staticFolder, "manifest.json"), replaceBasePath(JSON.stringify(manifestContent, null, 2)), (error) => {
    if (error) throw error
    console.log(`File manifest.json generated in ${staticFolder}`)
  })
})()
