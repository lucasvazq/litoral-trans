# Setup

El setup es el proceso por el cual se configura el proyecto para que funcione en un determinado entorno.\
En este caso, tenemos dos entornos:
- Local: configuramos y hacemos andar el proyecto en una computadora particular.\
    El objetivo de esto es poder desarrollar y probar el proyecto antes de que esté disponible en internet.
- Producción: configuramos y hacemos andar el proyecto en internet.

## Setup Local

El código fuente se encuentra en la carpeta **src**\
A grandes rasgos, el proyecto está armado con Next.js (servido estáticamente) y Tailwind CSS, y corre utilizando Jekyll (backend provisto por Github Pages).

### 1 - Setup de las herramientas necesarias:

1.1 - Nos posicionamos en la carpeta **src**

1.2 - Instalar y configurar para usar `node v14.15.5` y `npm v6.14.11`

1.3 - Ejecutar `npm install` para instalar los paquetes necesarios

### 2 - Setup del servidor en modo dev

2.1 - Ejecutar `npm run dev` para iniciar el proyecto en modo desarrollo. El mismo estará disponible en la url [http://localhost:3000](http://localhost:3000)

### 3 - Exportación

En este paso, lo que hacemos es preparar el código fuente para que esté listo para ser servido en producción.

3.1 - Ejecutar `npm run files` para generar los siguientes archivos:\
    - **src/public/robots.txt**\
    - **src/public/static/sitemap.xml**\
    - **src/public/static/opensearch.xml**

3.2 - Ejecutar `npm run images` para generar las imágenes usadas por OpenGraph y OpenSearch en **src/public/static/images/brand**

3.3 - Ejecutar `npm run pwa` para generar los archivos necesarios para convertir la web en una PWA.\
    Se generan imágenes en el siguiente directorio **src/public/static/images/brand**\
    Se listan unos tags que hay que agregar manualmente en **src/pages/public/_app.tsx**\
    Además, se genera el siguiente archivo **src/public/static/manifest.json**

3.4 - Ejecutar `npm run clean` para eliminar la carpeta **src/.next** en caso de que exista y aquellos archivos relacionados al Service Worker, ya que se van a volver a generar.

3.5 - Ejecutar `npm run build` para crear la build.

3.6 - Ejecutar `npm run export` para exportar el sitio web en formato estático.

3.7 - Vamos a copiar unos archivos de una carpeta a la base del proyecto, por lo que primero hay que limpiarlo.\
    Para ello, eliminamos la carpeta **_next** y todas aquellas carpetas o archivos que se puedan generar en base a las carpetas **src/public** y **src/pages**.

3.8 - Copiar los archivos de la carpeta **src/out** a la carpeta base del proyecto.

### 4 - Preview de los archivos exportados

Como estamos sirviendo el proyecto a través de Github Pages, tenemos que simular el mismo entorno en local.

4.1 - Nos posicionamos en la carpeta base del proyecto.

4.2 - Instalar `ruby 2.7.2p137`, también instalar RubyGem si no viene incluido.

4.3 - Ejecutar `gem install bundle` para instalar Bundler

4.4 - Ejecutar `bundle config set --local path vendor/bundle` para configurar Bundler

4.5 - Ejecutar `bundle install --gemfile githubpages.rb` para instalar las gemas necesarias

4.6 - Ejecutar `bundle exec jekyll serve` para iniciar el proyecto en modo previsualización.\
    Ahora se puede ver el proyecto a través de la url [http://localhost:4000](http://localhost:4000) tal cual se vería como si estuviese en internet

## Setup Producción

Este proyecto se realizó utilizando Github Pages, NIC Argentina y Namecheap.\
Un buen tutorial sobre como montar a producción los archivos exportados desde el código fuente, se muestran a continuación:\
[Tutorial: cómo armar un blog con GitHub pages](https://curiosidadesespaciales.ar/2020/09/21/Tutorial-blog-2/)
