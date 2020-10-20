# challenge-meli-frontend
Frontend challenge de Mercado Libre


El servidor API se encuentra en el directorio **/server** y se levanta en localhost:8000 con

**npm run start**


La PWA se levanta en localhost:5000 con

**npm run serve:dev**

  
  

## Dependencias

Se utilizan las siguientes dependencias:

**react, react-dom, react-router-dom**, para todo lo relacionado con la vista y el ruteo de la app.

**prop-types** para control de props.

**react-helmet** para los tags meta de SEO.

  

## Características


El proyecto está configurado con lo usual, webpack, prettier, babel, eslint con la configuración de AirBnb, utiliza workbox, instala un manifest, etc.
  

A nivel de performance cumple con casi todo lo requerido por Google Lighthouse para una PWA. Sólo quedan en rojo las llamadas que no realiza sobre https, porque está corriendo localmente.


Faltan algunas revisiones para mejorar la performance general, sobre todo para hacer lazy algunos componentes y algunos bugs que quedan por resolver del ruteo.



## Consideraciones

El documento entregado para hacer el proyecto se encuentra dentro del repo en un pdf, en el mismo se detalla los datos que se precisa que devuelva la api y los diseños de las pantallas. Como aclaración, los datos en los diseños no concuerdan al 100% con lo que debe traer la api, asi que algunos datos fueron reemplazados por otros.

Como sólo se entrega el diseño para la versión desktop no se realiza la web de forma responsive, solo para ancho de pantalla de 1000px.


  
  

Por cualquier consulta o duda me avisan y lo hablamos, no hay problema.
