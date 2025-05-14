"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elementos = document.querySelectorAll(".animado, .animadoArriba, .animadoIzquierda, .animadoDerecha");
  
    const opciones = {
      root: null, // Observa respecto al viewport
      rootMargin: "0px",
      threshold: 0.1, // El 10% del elemento visible
    };
  
    const callback = (entradas, observador) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target); // Deja de observar el elemento después de animarlo
        }
      });
    };
  
    const observer = new IntersectionObserver(callback, opciones);
  
    // Observa todos los elementos seleccionados
    elementos.forEach((elemento) => {
      observer.observe(elemento);
    });
  
    // Cleanup para evitar fugas de memoria
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-800 to-black text-white px-4 sm:px-8 lg:px-8">
 <div className="fixed top-0 w-full z-50 flex flex-row items-center justify-center h-[10vh] text-center px-2 bg-black-opacity-80 backdrop-blur-sm">
  <ul className="menuInicio flex flex-row flex-wrap justify-center items-center gap-8 md:gap-10">
    <li className=" md:text-2xl transition-transform hover:scale-110 animado">
      <a href="#home">Home</a>
    </li>
    <li className="md:text-2xl transition-transform hover:scale-110 animado">
      <a href="#acerca">Acerca de mí</a>
    </li>
    <li className=" md:text-2xl transition-transform hover:scale-110 animado">
      <a href="#exp">Experiencia</a>
    </li>
    <li className="md:text-2xl transition-transform hover:scale-110 animado">
      <a href="#proyectos">Proyectos</a>
    </li>
  </ul>
</div>



      <div id="home" className="flex justify-center items-center h-[100vh] relative">
        <div className="w-full max-w-[1000px] h-[1000px] relative flex flex-col items-center justify-center text-center px-4 gap-8">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 rounded-lg"
            style={{ backgroundImage: "url('/img/cubo.png')" }}
          ></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h1 className="text-6xl sm:text-9xl font-bold animado">David Henrique</h1>
            <p className="text-2xl max-w-md animadoArriba">Programador de Frontend y Backend, con muchas ganas de seguir aprendiendo.</p>
          </div>
        </div>
      </div>

      <div className="separacion"></div>

      <section id="acerca" className="flex flex-col items-center justify-center px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-30">
          <div className="relative w-32 h-32 md:w-140 md:h-140 group">
            <img 
              src="/img/PXL_20250513_221219442.jpg"
              alt="Foto de Perfil"
              className="w-full h-full object-cover rounded-full shadow-lg border-4 border-purple-500 transition duration-500 group-hover:opacity-0"
            />

            <img 
              src="/img/yo.JPG" 
              alt="Foto Dibujo Hover"
              className="w-full h-full object-cover rounded-full shadow-lg border-4 border-purple-500 absolute top-0 left-0 opacity-0 transition duration-500 group-hover:opacity-100"
            />
          </div>

          <div>
            <div className="text-center md:text-left">
              <h2 className="text-5xl sm:text-7xl font-bold mb-8 animado">Acerca de mí</h2>
              <p className="text-xl sm:text-2xl max-w-xl">
                Soy David Henrique, un programador Web con experiencia en Frontend y Backend. Me gusta mucho todo lo relacionado a diseño, me gusta dibujar y jugar videojuegos en mis tiempos libres.
              </p>
            </div>
          </div>
        </div>
      </section>

         <div className="separacion"></div>

      <section id="exp" className="flex flex-col items-center justify-center py-16 px-8">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl sm:text-8xl font-bold mb-20 text-center animado">Experiencia</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300 animadoIzquierda">
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                  alt="GitHub Logo" 
                  className="w-16 h-16 mb-4 transition-transform duration-300 transform hover:scale-125" 
                />
                <h3 className="text-3xl font-semibold">GitHub</h3>
              </div>
              <p className="text-xl">
                Experiencia en el uso de GitHub para el control de versiones y colaboración en proyectos. También tengo un portafolio de proyectos personales en mi cuenta de GitHub usando ramas.
              </p>
            </div>

            <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300 animadoArriba">
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" 
                  alt="Frontend Logo" 
                  className="w-16 h-16 mb-4 transition-transform duration-300 transform hover:scale-125" 
                />
                <h3 className="text-3xl font-semibold">Frontend Y Backend</h3>
              </div>
              <p className="text-xl">
                Experiencia en el desarrollo de aplicaciones web utilizando tecnologías como React y Next.js. Conocimientos en HTML, CSS, PHP, TypeScript y JavaScript. Desarrollo de aplicaciones web responsivas y optimizadas para diferentes dispositivos.
              </p>
            </div>

            <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300 animadoDerecha">
              <div className="flex flex-col items-center mb-4">
                <img 
                  src="https://images.icon-icons.com/3261/PNG/512/reactjs_logo_icon_206693.png" 
                  alt="Proyectos Personales Logo" 
                  className="w-20 h-20 mb-4 transition-transform duration-300 transform hover:scale-125" 
                />
                <h3 className="text-3xl font-semibold">Proyectos Personales</h3>
              </div>
              <p className="text-xl">
                Desarrollo de proyectos propios publicados en GitHub con tecnologías como PHP, TypeScript y JavaScript. Integración de tecnologías como Git, y despliegues en Vercel y Railway.
              </p>
            </div>
          </div>
        </div>
      </section>
         <div className="separacion"></div>



  <section id="proyectos" className="py-20 px-8">
  <div className="max-w-6xl mx-auto">
     <h2 className="text-5xl sm:text-8xl font-bold mb-20 text-center animado">Proyectos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      <div className="group relative bg-purple-800 p-8 rounded-lg  text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
        style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/61M3rDwh4qL._h1_.png')" }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
              Proyecto Tetris
            </h4>
            <p className="text-white text-lg mb-4">Un proyecto de Tetris hecho con React y JavaScript</p>
            <a href="https://tetris-proyecto.vercel.app/" target="_blank" rel="noopener noreferrer"
                         className="text-white text-lg font-bold py-2 px-6 bg-teal-600 rounded-lg shadow-md hover:bg-teal-400 transition-all duration-300">
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

      <div className=" group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
        style={{ backgroundImage: "url('https://cloud.educaplay.com/r2/img/activities/RELACIONAR_MOSAICO/logoActivity.png?v=1747042562')" }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
              Proyecto Memory
            </h4>
            <p className="text-white text-lg mb-4">Un juego de memoria hecho con Next.js, ShadCN y JavaScript, incluyendo creacion de api propia y base de datos</p>
            <a href="https://proyecto-memory-gray.vercel.app/" target="_blank" rel="noopener noreferrer"
                        className="text-white text-lg font-bold py-2 px-6 bg-teal-600 rounded-lg shadow-md hover:bg-teal-400 transition-all duration-300">
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

      <div className=" group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
        style={{ backgroundImage: "url('https://i1.wp.com/accessaa.co.uk/wp-content/uploads/2017/07/Screen-Shot-2017-07-03-at-11.42.31.png?fit=681%2C473&ssl=1')" }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
              Gestion de Tickets
            </h4>
            <p className="text-white text-lg mb-4">Un proyecto hecho con React y JavaScript, en que controlamos inicios de sesiones y gestion de Tickets con comentarios </p>
            <a href="https://proyecto-gestion-one.vercel.app/" target="_blank" rel="noopener noreferrer"
                         className="text-white text-lg font-bold py-2 px-6 bg-teal-600 rounded-lg shadow-md hover:bg-teal-400 transition-all duration-300">
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

      <div className=" group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
        style={{ backgroundImage: "url('https://img.freepik.com/vector-premium/recetas-linea-concepto-lista-ingredientes-chef-profesional-plato-tiny-people-lee-libro-recetas-ook-in-hef-ap-estilo-moderno-dibujos-animados-planos-ilustracion-vectorial-sobre-fondo-blanco_501813-1111.jpg')" }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
              Recelist
            </h4>
            <p className="text-white text-lg mb-4">Proyecto FullStack de una pagina web sobre recetas</p>
            <a href="https://proyecto-rece-list.vercel.app/" target="_blank" rel="noopener noreferrer"
                          className="text-white text-lg font-bold py-2 px-6 bg-teal-600 rounded-lg shadow-md hover:bg-teal-400 transition-all duration-300">
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
        style={{ backgroundImage: "url('/img/web.jpg')" }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
             Master Webs
            </h4>
            <p className="text-white text-lg mb-4">Crud completo hecho en php con una base de datos hecha desde cero</p>
            <a href="https://davesito4.alwaysdata.net/MasterWebs(CRUD)/theme/" target="_blank" rel="noopener noreferrer"
             className="text-white text-lg font-bold py-2 px-6 bg-teal-600 rounded-lg shadow-md hover:bg-teal-400 transition-all duration-300">
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

      <div className=" group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
         style={{ backgroundImage: "url('/img/disenyo.png')" }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
            Patrones de Diseño
            </h4>
            <p className="text-white text-lg mb-4">Un proyecto sencillo sobre los patrones de diseño hecho en php, subido con firezilla y alwaysdata</p>
            <a href="https://davesito4.alwaysdata.net/patrones-de-disenyo-php/index.php" target="_blank" rel="noopener noreferrer"
             className="text-white text-lg font-bold py-2 px-6 bg-teal-600 rounded-lg shadow-md hover:bg-teal-400 transition-all duration-300"
>
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<div className="separacion"></div>

<div className="w-full border-t border-white opacity-50 my-5"></div>

<footer className="text-white py-16 flex flex-col items-center relative overflow-hidden">
  <div className="flex flex-col items-center gap-8 z-10 relative">

    <h2 className=" text-4xl md:text-5xl font-bold text-center">Contáctame</h2>

    <div className="flex gap-8">
      <a href="https://github.com/DavidHenrique24" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
         className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="GitHub" className="w-10 h-10" />
      </a>
      <a href="https://www.linkedin.com/in/david-henrique-9519a3356/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
         className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/ios11/512/FFFFFF/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
      </a>
      <a href="Davidhenriquemacias2005@hotmail.com" aria-label="Email"
         className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/win10/512/FFFFFF/gmail.png" alt="Email" className="w-10 h-10" />
      </a>
    </div>

  </div>
  <div className="mt-8 text-center z-10 relative">
    <p className="text-lg">Espero vernos pronto!</p>
  </div>
  <img src="/img/Y8HD.gif" alt="GitHub" className="w-30 h-20 opacity-5 mt-3" />
</footer>

</main>
    
    
  );
}
