// ===== Ejercicio 1: Tema y saludo dinámico =====

let temaActual = 'claro'; // Variable que guarda el estado[cite: 2]
const botonTema = document.querySelector('#boton-tema');
const saludoElemento = document.querySelector('#saludo');

// Función para alternar el tema[cite: 2]
function cambiarTema() {
    document.body.classList.toggle('modo-oscuro');
    
    if (temaActual === 'claro') {
        temaActual = 'oscuro';
        botonTema.textContent = ' Modo oscuro';
    } else {
        temaActual = 'claro';
        botonTema.textContent = 'Modo claro';
    }
}
botonTema.addEventListener('click', cambiarTema); // Escucha el click[cite: 2]

// Función del saludo con la hora[cite: 2]
function saludar() {
    const hora = new Date().getHours();
    
    if (hora < 12) {
        saludoElemento.textContent = 'Buenos días';
    } else if (hora < 20) {
        saludoElemento.textContent = 'Buenas tardes';
    } else {
        saludoElemento.textContent = 'Buenas noches';
    }
}
saludar(); // Ejecuta el saludo al cargar la página[cite: 2]


// ===== Ejercicio 2: Panel de Estadísticas Dinámico =====

// Datos de las estadísticas[cite: 2]
const estadisticas = [
    { etiqueta: 'Proyectos', valor: 24 },
    { etiqueta: 'Clientes', valor: 12 },
    { etiqueta: 'Años', valor: 3 }
];

const panel = document.querySelector('#panel-estadisticas');

// 1. Crear las tarjetas en el HTML[cite: 2]
estadisticas.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('tarjeta-stat');
    
    // Inyectamos el número y el texto[cite: 2]
    div.innerHTML = `<h3 class="numero">${item.valor}</h3><p>${item.etiqueta}</p>`;
    panel.appendChild(div);
});

// 2. Animación de los números desde 0[cite: 2]
const numerosHTML = document.querySelectorAll('.numero');

numerosHTML.forEach(elemento => {
    const meta = parseInt(elemento.textContent); // Guardamos el valor final
    let actual = 0;
    elemento.textContent = 0; // Reiniciamos a 0 visualmente

    const intervalo = setInterval(() => {
        actual++; // Sumamos de 1 en 1
        elemento.textContent = actual;

        if (actual >= meta) {
            clearInterval(intervalo); // Detenemos la animación al llegar a la meta[cite: 2]
        }
    }, 50); // Se actualiza cada 50 milisegundos
});


// 3. Contador Manual de Interacciones (+1 y -1)[cite: 2]
let interacciones = 0;
const textoValor = document.querySelector('#valor-interacciones');

document.querySelector('#btn-sumar').addEventListener('click', () => {
    interacciones++;
    textoValor.textContent = interacciones;
});

document.querySelector('#btn-restar').addEventListener('click', () => {
    if (interacciones > 0) { // Evita números negativos[cite: 2]
        interacciones--;
        textoValor.textContent = interacciones;
    }
});