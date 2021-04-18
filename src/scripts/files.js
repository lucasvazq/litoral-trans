const fs = require("fs")
const path = require("path")

const sitemap = require("nextjs-sitemap-generator")

const config = require("../next.config")

const baseFolder = "public"
const staticFolder = path.join(baseFolder, "static")

// opensearch.xml
const opensearch = `\
<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns:moz="http://www.mozilla.org/2006/browser/search/" xmlns="http://a9.com/-/spec/opensearch/1.1/">
    <ShortName>${config.env.name}</ShortName>
    <LongName>${config.env.name} | Buscador</LongName>
    <Description>Realizar una búsqueda en ${config.env.name}</Description>
    <Url method="get" type="text/html" template="https://www.google.com/search?q=site:https://${config.env.domain} {searchTerms}"/>
    <Image height="64" width="64" type="image/x-icon">https://${config.env.domain}/static/images/brand/search-64.png</Image>
    <Developer>${config.env.authorName}</Developer>
    <Contact>${config.env.authorURL}</Contact>
</OpenSearchDescription>`
fs.writeFile(path.join(staticFolder, "opensearch.xml"), opensearch, (error) => {
  if (error) throw error
  console.log(`File opensearch.xml generated in ${staticFolder}`)
})

// robots.txt
const robots = `\
User-agent: *
Allow: /

Sitemap: https://${config.env.domain}/sitemap.xml`
fs.writeFile(path.join(baseFolder, "robots.txt"), robots, (error) => {
  if (error) throw error
  console.log(`File robots.txt generated in ${baseFolder}`)
})

// sitemap.xml
sitemap({
  baseUrl: `https://${config.env.domain}`,
  ignoreIndexFiles: true,
  ignoredPaths: ["404"],
  pagesDirectory: path.join(__dirname, "..", "pages"),
  targetDirectory: staticFolder,
})
console.log(`File sitemap.xml generated in ${staticFolder}`)
