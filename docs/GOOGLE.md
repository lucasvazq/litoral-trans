# Configuración de Google

## Indexar

Para verificar el sitio:

1.1 Agregar una nueva propiedad en Google Search Console.
1.2 En Namecheap ir a los DNS de nuestra web.
    Allí agregar un nuevo registro.
    Tipo: CNAME Record, Host: @, Value: el valor que nos da Google Tag Manager para verificar nuestra propiedad.

Para inspeccionar nuesto sitio:

2.1 [Inspeccionar el Sitemap](https://search.google.com/search-console/sitemaps)
2.2 [Inspeccionar las URL](https://search.google.com/search-console?action=inspect)
2.3 [Verificar las páginas indexadas](https://search.google.com/search-console/index)

## Configuración de Google Analytics y Google Tag Manager

En Google Analytics:

1.1 Crear una cuenta y dentro de ella, una propiedad
1.2 Crear un flujo de datos de tipo Web
1.3 Copiar el ID de medición

En Google Tag Manager:

2.1 Crear un contenedor en Google Tag Manager.
2.2 Crear una nueva etiqueta usando **Google Analytics: configuración de GA4**.
2.3 En ID de medición colocar el obtenido de la configuración de Google Analytics.
2.4 Crear un activador y agregarlo a dicha etiqueta.
2.5 Publicar la versión de nuestro GTM.

## Crear un correo para el dominio

1 Crear una cuenta en Google Workspace.
2 Vincularlo al dominio de nuestra web y verificarlo.
    En Namecheap ir a los DNS de nuestra web.
    Allí agregar un nuevo registro.
    Tipo: CNAME Record, Host: @, Value: el valor que nos da Google Admin para verificar nuestra propiedad.
3 Crear un nuevo usuario
4 Agregar los registros de Mail Exchange.
    En Namecheap ir a los DNS de nuestra web.
    En Mail Settings seleccionar el servicio de Gmail.
5 Activar y chequear los registros MX.

## Agregar una empresa a My Business

1 Crear una nueva empresa y completar todos los datos añadiendo el dominio, teléfono y dirección.
2 Agregar los servicios.
3 Añadir horarios.
4 Añadir descripción de la empresa.
5 Añadir fotos de la empresa.
6 Completar la sección **Completa la información de tu Perfil de negocio**.
