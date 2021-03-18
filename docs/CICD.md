# Integración Continua (CI) y Entrega Continua (CD)

Como parte del aseguramiento de calidad del código de este sitio web, se ejecutan sobre el código fuente unas herramientas que detectan errores y fuerzan a que el proyecto cumpla con ciertas convenciones de desarrollo.

Dichas herramientas son:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [CodeFactor](https://www.codefactor.io/)
- [DeepScan](https://deepscan.io/)
- [Dependabot](https://dependabot.com/)

ESLint y Prettier tienen sus propios archivos de configuración. Los mismos están en la carpeta base del proyecto y sus nombres son:
- eslintrc.json (para ESLint)
- prettierrc.json (para Prettier)
- dependabot.yml (para Dependabot)
