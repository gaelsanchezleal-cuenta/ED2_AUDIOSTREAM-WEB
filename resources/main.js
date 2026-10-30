// Arreglo con los datos completos de tus 10 canciones locales
var canciones = [
    {
        titulo: "China",
        cantante: "Anuel AA, Daddy Yankee, Karol G, Ozuna, J Balvin",
        album: "Emmanuel",
        productor: "Tainy",
        mezcla: "Mosty",
        descripcion: "Sencillo colaborativo que reúne a grandes exponentes del género urbano.",
        imagen: "https://i1.sndcdn.com/artworks-000580278392-x9ys7i-t1080x1080.jpg",
        audio: "resources/Anuel AA, Daddy Yankee, Karol G, O.mp3"
    },
    {
        titulo: "Dangerous Woman",
        cantante: "Ariana Grande",
        album: "Dangerous Woman",
        productor: "Max Martin, Johan Carlsson",
        mezcla: "Serban Ghenea",
        descripcion: "Sencillo principal del tercer álbum de estudio de Ariana Grande.",
        imagen: "https://m.media-amazon.com/images/I/71rtbFVgVuL._UF1000,1000_QL80_.jpg",
        audio: "resources/Ariana Grande - Dangerous Woman.mp3"
    },
    {
        titulo: "MARLBORO ROJO",
        cantante: "FUERZA REGIDA",
        album: "Pero No Te Enamores",
        productor: "Jesus Ortiz Paz",
        mezcla: "Angel Tovar",
        descripcion: "Tema destacado del movimiento de corridos bélicos y música regional mexicana.",
        imagen: "https://m.media-amazon.com/images/I/31fbfpy0wxL._UXNaN_FMjpg_QL85_.jpg",
        audio: "resources/FUERZA REGIDA - MARLBORO ROJO.mp3"
    },
    {
        titulo: "Suzuki",
        cantante: "Fuerza Regida",
        album: "Grand Theft Auto VI: The Album",
        productor: "Synthetic",
        mezcla: "Andres Sanin",
        descripcion: '"SUZUKI" es una canción oficial de la banda sonora de Grand Theft Auto VI, interpretada por Fuerza Regida.',
        imagen: "resources/imagen_rola.png",
        audio: "resources/Fuerza Regida - Suzuki.mp3"
    },
    {
        titulo: "Vestido de Besos",
        cantante: "Joan Sebastian",
        album: "Con Todo el Alma",
        productor: "Joan Sebastian",
        mezcla: "Musart Records",
        descripcion: "Tema romántico clásico interpretado por El Poeta del Pueblo.",
        imagen: "https://cdn-images.dzcdn.net/images/cover/a745aba19393a844ab57c4f35eb6157f/1900x1900-000000-80-0-0.jpg",
        audio: "resources/Joan Sebastian - Vestido de Besos.mp3"
    },
    {
        titulo: "Pruébame",
        cantante: "José José",
        album: "Secretos",
        productor: "Manuel Alejandro",
        mezcla: "Ariola",
        descripcion: "Balada romántica icónica interpretada por El Príncipe de la Canción.",
        imagen: "https://images.genius.com/be4809d0265b97850a22823d82d034a7.600x600x1.png",
        audio: "resources/José José - Pruébame.mp3"
    },
    {
        titulo: "Si Quieres",
        cantante: "Juan Gabriel",
        album: "Cosas de Enamorados",
        productor: "Juan Gabriel",
        mezcla: "BMG",
        descripcion: "Éxito inolvidable del Divo de Juárez.",
        imagen: "https://images.genius.com/ff4f1666083931593dc20d81bac250e5.1000x1000x1.png",
        audio: "resources/Juan Gabriel - Si Quieres.mp3"
    },
    {
        titulo: "Con la Misma Piedra",
        cantante: "Julio Iglesias",
        album: "Hey!",
        productor: "Ramón Arcusa",
        mezcla: "CBS",
        descripcion: "Un clásico atemporal de la música en español.",
        imagen: "https://i1.sndcdn.com/artworks-9H50ygtnzES5Z31W-Y6p0sg-t500x500.jpg",
        audio: "resources/Julio Iglesias - Con la Misma Piedra.mp3"
    },
    {
        titulo: "Vasos Vacíos",
        cantante: "Los Fabulosos Cadillacs",
        album: "Vasos Vacíos",
        productor: "Andrés Calamaro",
        mezcla: "Sony Music",
        descripcion: "Colaboración legendaria de ska/rock latino con Celia Cruz.",
        imagen: "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/194397644418.jpg",
        audio: "resources/Los Fabulosos Cadillacs - Vasos Vacíos.mp3"
    },
    {
        titulo: "La Mentira",
        cantante: "Luis Miguel",
        album: "Romance",
        productor: "Armando Manzanero",
        mezcla: "WEA Latina",
        descripcion: "Bolero clásico interpretado en el emblemático álbum Romance.",
        imagen: "https://images-na.ssl-images-amazon.com/images/I/41O-WcvLTfL._AC_UL210_SR210,210_.jpg",
        audio: "resources/Luis Miguel - La mentira.mp3"
    }
];

// Variable para controlar la canción actual
var indiceActual = 0;

// Obtención de elementos del DOM por su ID
var imagen = document.getElementById('imagen');
var mensaje = document.getElementById('mensaje');
var title = document.getElementById('title');

var cantante = document.getElementById('cantante');
var album = document.getElementById('album');
var productor = document.getElementById('productor');
var mezcla = document.getElementById('mezcla');

var audioPlayer = document.getElementById('audioPlayer');

// Función principal para actualizar ambas tarjetas y el reproductor de audio
function actualizar_interfaz() {
    var cancion = canciones[indiceActual];

    // Actualiza los elementos de la primera tarjeta
    if (imagen) imagen.src = cancion.imagen;
    if (mensaje) mensaje.textContent = cancion.descripcion;

    // Actualiza los elementos de la segunda tarjeta
    if (title) title.textContent = "Cancion: " + cancion.titulo + " - " + cancion.cantante;
    if (cantante) cantante.innerHTML = "<strong>Cantante(s):</strong> " + cancion.cantante;
    if (album) album.innerHTML = "<strong>Album:</strong> " + cancion.album;
    if (productor) productor.innerHTML = "<strong>Productor principal:</strong> " + cancion.productor;
    if (mezcla) mezcla.innerHTML = "<strong>Mezcla y Masterización:</strong> " + cancion.mezcla;

    // Actualiza la fuente del archivo de audio y lo carga
    if (audioPlayer) {
        audioPlayer.src = cancion.audio;
        audioPlayer.load();
    }
}

// Función para avanzar a la siguiente canción
function evento_siguiente() {
    indiceActual = indiceActual + 1;
    if (indiceActual >= canciones.length) {
        indiceActual = 0; // Regresa a la primera canción si llega al final
    }
    actualizar_interfaz();
    if (audioPlayer) audioPlayer.play();
}

// Función para retroceder a la canción anterior
function evento_anterior() {
    indiceActual = indiceActual - 1;
    if (indiceActual < 0) {
        indiceActual = canciones.length - 1; // Va a la última canción si retrocede desde la primera
    }
    actualizar_interfaz();
    if (audioPlayer) audioPlayer.play();
}

// Funciones de control de reproducción
function evento_reproducir() {
    if (audioPlayer) audioPlayer.play();
}

function evento_pausar() {
    if (audioPlayer) audioPlayer.pause();
}