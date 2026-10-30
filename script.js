const botonMenu = document.getElementById('btn-hamburguesa');
const menuDesplegable = document.getElementById('menu-desplegable');

if (botonMenu && menuDesplegable) {
    botonMenu.addEventListener('click', function () {
        const abierto = menuDesplegable.classList.toggle('menu-visible');
        botonMenu.setAttribute('aria-expanded', abierto);
    });
}
const sliders = document.querySelectorAll('.slider');

sliders.forEach(function (slider) {
    const imagenes = slider.querySelectorAll('.slide');
    const puntos = slider.querySelectorAll('.ellipse');
    const botonAnterior = slider.querySelector('.btn-anterior');
    const botonSiguiente = slider.querySelector('.btn-siguiente');
    let actual = 0;

    function actualizarBotones() {
        botonAnterior.hidden = (actual === 0);
        botonSiguiente.hidden = (actual === imagenes.length - 1);
    }

    function mostrar(indice) {
        imagenes[actual].classList.remove('slide-activa');
        puntos[actual].classList.remove('ellipse-activa');

        actual = indice;

        imagenes[actual].classList.add('slide-activa');
        puntos[actual].classList.add('ellipse-activa');

        actualizarBotones();
    }

    botonSiguiente.addEventListener('click', function () {
        if (actual < imagenes.length - 1) {
            mostrar(actual + 1);
        }
    });

    botonAnterior.addEventListener('click', function () {
        if (actual > 0) {
            mostrar(actual - 1);
        }
    });

    puntos.forEach(function (punto, indice) {
        punto.addEventListener('click', function () {
            mostrar(indice);
        });
    });

    actualizarBotones();
});

const formulario = document.querySelector('.formulario-contacto');

if (formulario) {
    const modal = document.getElementById('modal-exito');
    const botonCerrarModal = document.getElementById('cerrar-modal');
    const selector = document.getElementById('select-trigger');
    const textoSelector = selector.querySelector('span');
    const listaPaises = document.getElementById('lista-paises');
    const inputPais = document.getElementById('pais-input');
    const paises = listaPaises.querySelectorAll('li');

    selector.addEventListener('click', function (e) {
        e.stopPropagation();
        listaPaises.classList.toggle('abierta');
    });

    paises.forEach(function (pais) {
        pais.addEventListener('click', function () {
            textoSelector.textContent = pais.textContent;
            textoSelector.classList.add('pais-elegido');
            inputPais.value = pais.textContent;
            listaPaises.classList.remove('abierta');
        });
    });

    document.addEventListener('click', function () {
        listaPaises.classList.remove('abierta');
    });

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!inputPais.value) {
            listaPaises.classList.add('abierta');
            return;
        }

        modal.classList.add('visible');
    });

    botonCerrarModal.addEventListener('click', function () {
        modal.classList.remove('visible');
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('visible');
        }
    });
}
