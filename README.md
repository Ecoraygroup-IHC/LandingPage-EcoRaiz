# EcoRaíz - Landing Page

EcoRaíz es una solución digital desarrollada por EcoRay Group para apoyar el cuidado, monitoreo y supervivencia de cultivos en interiores urbanos. Esta implementación corresponde al avance de Landing Page del proyecto del curso IHC y Tecnologías Móviles.

## Información del proyecto

La Landing Page presenta la propuesta de valor de EcoRaíz, sus beneficios, funcionalidades principales, segmentos objetivo y acceso a una demostración del dashboard. El sitio fue implementado con tecnologías web estáticas: HTML, CSS y JavaScript.

## Autores

- Brayan Benjamin Huerta Cardenas
- Eduardo Fabian Salvador Huamani
- Giovanni Marcelo Gallegos De La Cruz
- Fabricio Jose Rivera Rupay
- Felix Ignacio Cortes Rojas
- Kirk Douglas Quiliano Motta

## Segmentos objetivo

1. Residentes urbanos aficionados a las plantas que viven en departamentos o espacios interiores y necesitan recomendaciones simples para cuidar sus cultivos.
2. Expertos ambientales, investigadores y educadores que requieren revisar variables ambientales, datos históricos y comportamiento de microclimas.
3. Emprendedores con pequeños negocios de plantas que necesitan controlar su inventario vivo, reducir pérdidas y detectar riesgos de deterioro.

## Principales características

- Landing Page responsive y adaptable a escritorio y dispositivos móviles.
- Presentación de la problemática, solución, beneficios y funcionalidades de EcoRaíz.
- Formulario de contacto con validación mediante JavaScript.
- Acceso demo a una interfaz de aplicación.
- Dashboard interactivo con información de cultivos, alertas, análisis y acciones.
- Uso de recursos visuales propios, estilos personalizados y componentes reutilizables.

## Estructura del proyecto

```text
LandingPage-EcoRaiz/
│
├── README.md
├── netlify.toml
│
└── public/
    ├── index.html
    ├── contacto.html
    ├── app.html
    ├── dashboard.html
    ├── favicon.ico
    │
    └── assets/
        ├── styles/
        │   ├── styles.css
        │   └── dashboard.css
        │
        ├── images/
        │   ├── logo.svg
        │   └── hero-plant.svg
        │
        └── scripts/
            ├── main.js
            ├── app.js
            └── dashboard.js
```

## Cómo ejecutar el proyecto

Opción 1:

1. Abrir la carpeta del proyecto.
2. Ingresar a la carpeta `public`.
3. Abrir el archivo `index.html` en el navegador.

Opción 2:

1. Abrir el proyecto en WebStorm o Visual Studio Code.
2. Ejecutar el archivo `public/index.html` con Live Server o desde el navegador.

## Despliegue

El proyecto está preparado para desplegarse en Netlify. El archivo `netlify.toml` define la carpeta `public` como directorio de publicación.

Enlace de despliegue usado por el equipo:

https://ecoraygroup-ecoraiz.netlify.app

## Control de versiones

El proyecto debe trabajarse con Git y GitHub. Para cumplir con GitFlow, se recomienda mantener las ramas `main`, `develop`, `release/*`, `hotfix/*` y crear las ramas `feature/*` a partir de `develop`.
