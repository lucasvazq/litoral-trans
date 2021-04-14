const pwaAssetGenerator = require("pwa-asset-generator")

const config = require("../next.config")

const baseFolder = "public"
const staticFolder = `${baseFolder}/static`
const brandImagesFolder = `${staticFolder}/images/brand`

;(async () => {
  let content = []

  // Generates favicon.
  let generatedImages = await pwaAssetGenerator.generateImages("original_assets/images/brand/icon.png", brandImagesFolder, {
    favicon: true,
    iconOnly: true,
    type: "png",
    background: config.env.colorPrimary,
    xhtml: true,
    log: false,
  })
  content.push(generatedImages.htmlMeta.favicon)

  // Generate the rest of images.
  generatedImages = await pwaAssetGenerator.generateImages("original_assets/images/brand/presentation.png", brandImagesFolder, {
    quality: 100,
    background: config.env.colorPrimary,
    xhtml: true,
    log: false,
  })
  content.push(Object.values(generatedImages.htmlMeta).join(''))

  // Output header tags.
  console.log('Put this tags under Header in our custom app file at pages/public/_app.tsx')
  console.log(content.join('').split(staticFolder).join(staticFolder.replace(baseFolder, '')))

  // manifest.json
  const manifestContent = {
    "name": config.env.name,
    "short_name": config.env.name,
    "theme_color": config.env.colorPrimary,
    "background_color": config.env.colorPrimary,
    "description": config.env.slogan,
    "display": "standalone",
    "orientation": "portrait",
    "start_url": "/",
    "scope": "/",
    "icons": generatedImages.manifestJsonContent
  }
  fs.writeFile(`${staticFolder}/manifest.json`, JSON.stringify(manifestContent, null, 2), (error) => {
    if (error) throw error;
    console.log(`File manifest.json generated in ${staticFolder}`)
  });
})()
