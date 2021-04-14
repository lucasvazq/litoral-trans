const pwaAssetGenerator = require("pwa-asset-generator")

const config = require("../next.config")

const outputFolder = "public/static/images/brand"

function logOutput(title, description, content) {
  console.log(`=== ${title} ===`)
  console.log(description)
  console.log()
  console.log(content.split(outputFolder).join(outputFolder.replace('public', '')))
}

;(async () => {
  let content = []

  // Generates favicon
  let generatedImages = await pwaAssetGenerator.generateImages("original_assets/images/brand/icon.png", outputFolder, {
    favicon: true,
    iconOnly: true,
    type: "png",
    background: config.env.colorPrimary,
    xhtml: true,
    log: false,
  })
  content.push(generatedImages.htmlMeta.favicon)

  // Generate the rest of images
  generatedImages = await pwaAssetGenerator.generateImages("original_assets/images/brand/presentation.png", outputFolder, {
    quality: 100,
    background: config.env.colorPrimary,
    xhtml: true,
    log: false,
  })
  content.push(Object.values(generatedImages.htmlMeta).join(''))

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

  logOutput('Manifest file output', 'Put this content under public/static/manifest.json', JSON.stringify(manifestContent, null, 2))
  logOutput('Head document output', 'Put this tags under Header in our custom app file at pages/public/_app.tsx', content.join(''))
})()
