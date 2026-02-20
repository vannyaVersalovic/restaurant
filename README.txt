================================================== 
MANUAL DE CONFIGURACIÓN - SABOR LOCAL (GASTRONOMÍA)

Este proyecto es una plantilla web profesional de 4 páginas 
(Inicio, Menú, Nosotros y Contacto) optimizada para móviles 
y lista para ventas.

CÓMO CAMBIAR EL NOMBRE Y CONFIGURACIÓN GENERAL
Abre el archivo "config.js". Este es el "cerebro" del sitio.
Solo debes cambiar los textos entre comillas para actualizar:
- Nombre del local (Se actualizará en el logo y títulos automáticamente).
- Número de WhatsApp.
- Colores principales.
- Horarios y Dirección.

CÓMO CAMBIAR EL TELÉFONO / WHATSAPP (MANUAL)
Aunque el config.js lo hace automático, puedes buscar en los 4 
archivos HTML la línea que contiene: href="https://wa.me/56926073767"
Cambia el número (después del 569) por el del cliente.

CÓMO CAMBIAR LOS PRECIOS
Abre el archivo "menu.html". Busca las etiquetas que tienen 
la clase: class="price". Ejemplo: <span class="price">$8.500</span>
Solo cambia el valor dentro del texto.

CÓMO CAMBIAR LAS FOTOS (LOGO Y PLATOS)
1. Logo: Reemplaza el archivo en "imagenes/logo.png".
2. Platos/Galería: Abre "menu.html" o "index.html". Busca las 
   etiquetas <img>. Cambia el texto dentro de src="..." por el 
   nombre de tu foto. 
   Ejemplo: <img src="imagenes/mi-comida.jpg">
   (Asegúrate de que la foto esté dentro de la carpeta "imagenes").

CONFIGURACIÓN DEL MENÚ DE NAVEGACIÓN
Si decides agregar una página nueva, debes añadir el link <li> 
dentro de la etiqueta <ul class="nav-links"> de TODOS los 
archivos HTML para que la navegación sea fluida y no se rompa.

CONTACTO Y FORMULARIO
En "contacto.html" puedes editar la dirección física y el 
mensaje de éxito del formulario en el archivo "script.js".

================================================== 
Diseñado por: Vannya Salinas
==================================================