# Dashboard sobre Colombia

Este proyecto es un dashboard que muestra información acerca de tres categorias principales: Presidentes, Atracciones Turísticas y Aeropuertos en Colombia 🇨🇴. La información se obtiene de la API: [API Colombia](https://api-colombia.com/).

## Estructura del proyecto

- **src/components:** Contiene los principales elementos del dashboard, aquí se encontrarán las distintas entidades y sus respectivas funciones como lo son el caso de **`Presidents`**, **`TouristAttractions`**, **`AirportsByDepartment`** y **`AirportsByRegion`**. Así como **`Dashboard`** que es donde se encontrará la lógica para saber cuál de las diferentes entidades y su respectiva información mostrar. En **`Tabs`** se encuetra la lógica para los botones del dashboard y finalmente en **`EntityCount`** se estaba haciendo el desarrollo de la lógica para el conteo del número en registros totales de la entidad.
- **src/App.js:** Punto de entrada principal de la aplicación.
- **src/index.js:** Archivo de inicialización de React.

## Instalación y configuración

1. Clonar el repositorio
   ~~~
   git clone https://github.com/JuanT1901/colombian_api_Juan_Diego_Torres.git
   ~~~
2. Instalar dependencias
   ~~~
   npm install
   ~~~
3. Iniciar servidor de desarrollo
   ~~~
   npm start
   ~~~
   Esto iniciará el servidor de desarrollo en un puerto local. Siempre va a ser redirigido a la ruta "/colombia_dash".
   
## Características del Proyecto

- Pestañas: La aplicación tiene un componente de pestañas que permite navegar entre diferentes vistas sin cambiar la URL.
- Conteo de registros: Cada vista muestra el conteo total de registros de la entidad correspondiente.
- Agrupamientos y Procesamiento de Datos:
  - Presidentes: Agrupados por partido político.
  - Atracciones Turísticas: Agrupadas por departamento y ciudad.
  - Aeropuertos: Agrupados por departamento y ciudad como también por regiones.

## Notas Adicionales

Dependencias Principales:

- react: Biblioteca principal para construir la UI.
- axios: Utilizado para realizar solicitudes HTTP a la API.
- react-router-dom: Manejo de rutas dentro de la aplicación.
