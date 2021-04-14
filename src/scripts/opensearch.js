const config = require("../next.config")

console.log(`
<OpenSearchDescription xmlns:moz="http://www.mozilla.org/2006/browser/search/" xmlns="http://a9.com/-/spec/opensearch/1.1/">
    <ShortName>${config.env.name}</ShortName>
    <LongName>${config.env.name} | Buscador</LongName>
    <Description>Realizar una búsqueda en ${config.env.name}</Description>
    <Url method="get" type="text/html" template="https://www.google.com/search?q=site:https://${config.env.domain} {searchTerms}"/>
    <Image height="196" width="196" type="image/x-icon">https://${config.env.domain}/static/images/brand/favicon-196.png</Image>
    <Developer>${config.env.authorName}</Developer>
    <Contact>${config.env.authorURL}</Contact>
</OpenSearchDescription>
`)
