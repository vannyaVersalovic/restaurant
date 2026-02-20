================================================== 
MANUAL DE CONFIGURACIÓN - SABOR LOCAL (GASTRONOMÍA)

Este proyecto es una plantilla web profesional de 4 páginas 
(Inicio, Menú, Nosotros y Contacto) optimizada para móviles 
y lista para ventas.

1. CONFIGURACIÓN GENERAL (EL CEREBRO DEL SITIO)
--------------------------------------------------
Abre el archivo "config.js". Solo debes cambiar los textos 
entre comillas para actualizar todo el sitio a la vez:
- nombreLocal: Cambia el nombre de la empresa.
- lema: La frase principal que aparece en el Inicio.
- telefonoWhatsApp: Número sin el símbolo '+' (Ej: 56926073767).
- colorPrimario: Cambia el color de botones y detalles (Ej: #ff5733).
- direccion y horario: Se actualizarán automáticamente en la web.

2. CÓMO CAMBIAR EL LOGO E IMÁGENES
--------------------------------------------------
- LOGO: Reemplaza la imagen en "imagenes/logo.png" por tu logo 
  con el mismo nombre. El sitio mantendrá el logo y pondrá el 
  nombre del local al lado automáticamente.
- PLATOS Y FOTOS: Abre "menu.html" o "index.html". Busca las 
  etiquetas <img>. Cambia el texto en src="..." por el nombre 
  de tu nueva foto.
  Ejemplo: <img src="imagenes/mi-plato.jpg">
  (Recuerda guardar todas tus fotos en la carpeta "imagenes").

3. CÓMO CAMBIAR PRECIOS Y PRODUCTOS
--------------------------------------------------
Abre el archivo "menu.html":
- PRECIOS: Busca la clase class="price". 
  Ejemplo: <span class="price">$8.500</span>. Solo cambia el número.
- WHATSAPP POR PRODUCTO: Cada botón "Pedir" tiene un mensaje. 
  Busca: text=Hola!%20Quiero%20pedir... y cambia el texto para 
  que sepas qué plato te están pidiendo.

4. MENÚ DE NAVEGACIÓN
--------------------------------------------------
Si agregas una página nueva, debes añadir el link <li> 
dentro de la etiqueta <ul class="nav-links"> en los 4 
archivos HTML para que el menú sea igual en todas partes.

5. CONTACTO Y FORMULARIO
--------------------------------------------------
En "contacto.html" puedes editar los datos de ubicación. 
El formulario de contacto ya viene configurado para enviar 
una alerta de éxito al cliente.

================================================== 
Diseñado por: Vannya Salinas
==================================================