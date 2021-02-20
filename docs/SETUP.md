# Setup

El setup es el proceso por el cual se configura el proyecto para que funcione en un determinado entorno.
En este caso, tenemos dos entornos:
- Local: configuramos y hacemos andar el proyecto en una computadora particular.
    El objetivo de esto es poder desarrollar y probar el proyecto antes de que esté disponible en internet.
- Producción: configuramos y hacemos andar el proyecto en internet.

## Setup Local

El código fuente se encuentra en la carpeta **src**.
A grandes rasgos, el proyecto está armado con Next.js (servido estáticamente) y Tailwind CSS, y corre utilizando Jekyll (backend provisto por Github Pages).

### 1 - Setup de las herramientas necesarias:

1.1 Instalar y configurar para usar `node v14.15.5` y `npm v6.14.11`

1.2 Ejecutar `npm install` para instalar los paquetes necesarios

### 2 - Setup del servidor en modo dev

2.1 Ejecutar `npm run dev` para iniciar el proyecto en modo desarrollo. El mismo estará disponible en la url [http://localhost:3000](http://localhost:3000)

### 3 - Exportación

En este paso, lo que hacemos es preparar el código fuente para que esté listo para ser servido en producción.

3.1 Ejecutar `npm run build` para crear la build

3.2 Ejecutar `npm run export` para exportar el sitio web en formato estático

### 4 - Preview de archivo exportado

Como estamos sirviendo el proyecto a través de Github Pages, tenemos que simular el mismo entorno en local.

4.1 Instalar `ruby 2.7.2p137`, también instalar RubyGem si no viene incluido

4.2 Ejecutar `gem install bundle`

4.3 Dirigirse a la carpeta base del repositorio

4.4 Ejecutar `bundle install` para instalar las gemas necesarias

4.5 Ejecutar `bundle exec jekyll serve` para iniciar el proyecto en modo previsualización. Ahora se puede ver el proyecto a través de la url [http://localhost:4000](http://localhost:4000) tal cual se vería como si estuviese en internet

## Setup Producción

Este proyecto se realizó utilizando Github Pages, NIC Argentina y Namecheap.
Un buen tutorial sobre como montar a producción los archivos exportados desde el código fuente, se muestran a continuación:
[Tutorial: cómo armar un blog con GitHub pages](https://curiosidadesespaciales.ar/2020/09/21/Tutorial-blog-2/)
