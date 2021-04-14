# Flujo de trabajo

Además del flujo de desarrollo habitual, es importante destacar herramientas que nos permiten entregar un trabajo de buena calidad.

## QA en CI/CD

Las herramientas que menciono a continuación se corren automáticamente a través de Github Actions cada vez que se hace un PR.

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [CodeFactor](https://www.codefactor.io/)
- [DeepScan](https://deepscan.io/)
- [Dependabot](https://dependabot.com/)

ESLint y Prettier tienen sus propios archivos de configuración. Los mismos están en la carpeta base del proyecto y sus nombres son:
- eslintrc.json (para ESLint)
- prettierrc.json (para Prettier)
- dependabot.yml (para Dependabot)

## QA manual

Estas herramientas nos sirven para asegurar la calidad de ciertos archivos o configuraciones de nuestra web.

- [Formatear archivos JSON](https://jsonformatter.org/)
- [Verificar rendimiento][https://developers.google.com/speed/pagespeed/insights]
- [Validar las metatags de manera genérica](https://www.heymeta.com/)
- [Validar el protocolo opengraph](https://developers.facebook.com/tools/debug/)
- [Validar las twitter card](https://cards-dev.twitter.com/validator?)
- [Validar la structured data](https://search.google.com/structured-data/testing-tool)
- [Validar el archivo sitemap](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Validar el archivo robots](https://technicalseo.com/tools/robots-txt/)