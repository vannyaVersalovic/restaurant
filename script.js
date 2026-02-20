document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. LÓGICA DE PLANTILLA (CONFIG.JS)
    // ==========================================
    const inyectarConfiguracion = () => {
        if (typeof CONFIG === 'undefined') {
            console.error("No se encontró el archivo config.js");
            return;
        }

        // Actualizar Color Primario en todo el sitio
        if(CONFIG.colorPrimario) {
            document.documentElement.style.setProperty('--primario', CONFIG.colorPrimario);
        }

        // Actualizar Nombre del Local (Logo)
        const logos = document.querySelectorAll('.logo');
        logos.forEach(logo => {
            // 1. Buscamos si ya existe una imagen en el logo
            const img = logo.querySelector('img');
            const imgHTML = img ? img.outerHTML : ''; // Guardamos el HTML de la imagen si existe

            // 2. Procesamos el nombre del local
            const palabras = CONFIG.nombreLocal.split(' ');
            let textoHTML = '';
            
            if (palabras.length > 1) {
                textoHTML = `${palabras[0]} <span>${palabras.slice(1).join(' ')}</span>`;
            } else {
                textoHTML = CONFIG.nombreLocal;
            }

            // 3. Inyectamos la imagen guardada + el nuevo texto
            logo.innerHTML = imgHTML + " " + textoHTML;
        });

        // Títulos y Taglines
        const heroH1 = document.querySelector('.hero-content h1');
        if (heroH1) heroH1.innerText = CONFIG.nombreLocal;

        const tagline = document.querySelector('.tagline');
        if (tagline) tagline.innerText = CONFIG.lema;

        // Actualizar Enlaces de WhatsApp (Botones de pedido y flotante)
        const wspLinks = document.querySelectorAll('a[href*="wa.me"]');
        wspLinks.forEach(link => {
            const urlActual = new URL(link.href);
            const mensajeOriginal = urlActual.searchParams.get('text') || "Hola! Me gustaría más información.";
            link.href = `https://wa.me/${CONFIG.telefonoWhatsApp}?text=${encodeURIComponent(mensajeOriginal)}`;
        });

        // Información de Contacto (Dirección y Horarios)
        const dirElem = document.querySelector('.info-item:nth-child(1) p');
        if (dirElem) dirElem.innerText = CONFIG.direccion;

        const horarioElem = document.querySelector('.info-item:nth-child(2)');
        if (horarioElem && CONFIG.horario) {
            horarioElem.innerHTML = `
                <h3>⏰ Horario de Atención</h3>
                <p><strong>Lun - Vie:</strong> ${CONFIG.horario.semana}</p>
                <p><strong>Sáb - Dom:</strong> ${CONFIG.horario.finde}</p>
            `;
        }
    };

    inyectarConfiguracion();

    // ==========================================
    // 2. LÓGICA DEL MENÚ (FILTROS Y BUSCADOR)
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    const searchInput = document.getElementById('menuSearch');

    function filterMenu() {
        const activeBtn = document.querySelector('.filter-btn.active');
        if(!activeBtn) return;

        const activeFilter = activeBtn.getAttribute('data-filter');
        const searchText = searchInput ? searchInput.value.toLowerCase() : "";

        menuItems.forEach(item => {
            const category = item.getAttribute('data-category');
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();

            const matchesFilter = (activeFilter === 'todos' || category === activeFilter);
            const matchesSearch = (title.includes(searchText) || description.includes(searchText));

            if (matchesFilter && matchesSearch) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterMenu();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterMenu);
    }

    // Detectar filtro desde la URL (Viniendo del index.html)
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam) {
        const targetBtn = document.querySelector(`[data-filter="${filterParam}"]`);
        if (targetBtn) targetBtn.click();
    }

    // ==========================================
    // 3. FORMULARIO DE CONTACTO
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(`¡Gracias por escribirnos! Tu mensaje ha sido enviado a ${CONFIG.nombreLocal}.`);
            contactForm.reset();
        });
    }
    // Funcionalidad Menú Hamburguesa
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

if (menu) {
    menu.addEventListener('click', function() {
        menuLinks.classList.toggle('active');
        // Opcional: animar las barritas
        menu.classList.toggle('is-active');
    });
}
});