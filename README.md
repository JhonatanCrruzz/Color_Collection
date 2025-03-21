# Colors Collection

**Colors Collection** es una plataforma donde puedes guardar, organizar y acceder fácilmente a tu propio catálogo de colores. Ideal para diseñadores, desarrolladores web o cualquier persona que quiera gestionar paletas de colores y encontrar inspiración visual.

## Descripción

Este proyecto te permite:
- Guardar colores en formato hexadecimal.
- Organizar tus colores favoritos y crear una colección personalizada.
- Descargar la lista de colores en formato JSON.
- Cargar una colección existente desde un archivo JSON.

## Características
- **Interfaz intuitiva**: Agrega colores a tu catálogo y visualiza una lista de ellos de manera sencilla.
- **Generación dinámica de cubos de color**: Los colores se muestran en cubos de color con su código hexadecimal.
- **Copia fácil al portapapeles**: Los usuarios pueden copiar fácilmente el código hexadecimal de cada color.
- **Soporte para importar y exportar colores**: Puedes guardar tu colección en un archivo JSON o cargar una colección existente.

## Demo

Puedes ver el proyecto en vivo [aquí](https://jhonatancrruzz.github.io/Colors-Collection/).

## Requisitos

Para ejecutar este proyecto, solo necesitas un navegador moderno. No se requieren dependencias adicionales.

## Instalación

1. **Clona el repositorio**:
```bash
   git clone https://github.com/tu-usuario/Colors-Collection.git****
```
   
2. **Abre el proyecto**:
Navega al directorio del proyecto y abre index.html en tu navegador preferido.
```bash
  cd Colors-Collection
  open index.html
```


## Uso
1. **Agregar colores**:
- Ingresa un color en formato hexadecimal (Ej: #ff5733) en el campo de texto y haz clic en "Agregar Color".

2. **Guardar colores**:
- Los colores se guardan automáticamente en tu navegador usando localStorage.
- Si deseas, puedes descargar tus colores en un archivo JSON para usarlos en otros proyectos o compartirlos.

3. **Importar colores**:
- Haz clic en "Seleccionar archivo" para cargar un archivo JSON que contenga tu colección de colores.
  
## Estructura del Proyecto
   ```bash
.
├── assets/
│   └── icons/           # Iconos de la aplicación
│   └── images/          # Imágenes para la vista previa
├── css/
│   └── styles.css       # Estilos principales
│   └── fonts.css        # Fuentes personalizadas
│   └── normalize.css    # Normalización de estilos
├── js/
│   └── script.js        # Lógica JavaScript para la funcionalidad
├── index.html           # Archivo principal HTML
└── colores.json         # Archivo de colores predeterminado (si no hay colores en localStorage)

```

## Consideraciones
- Los colores se guardan localmente en tu navegador utilizando localStorage. Si borras los datos del navegador, perderás la colección.
- El formato de color debe ser hexadecimal (Ej: #ff5733).
- La aplicación está diseñada para ser simple y fácil de usar, ideal para guardar paletas de colores de proyectos de diseño, web o gráficos.

### Contribución
¡Contribuir a este proyecto es bienvenido! Si tienes sugerencias o mejoras, por favor haz un fork y abre un pull request. Si encuentras algún bug, no dudes en reportarlo.

