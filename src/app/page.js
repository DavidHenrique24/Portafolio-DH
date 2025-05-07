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
    <main className="min-h-screen bg-gradient-to-b from-purple-800 to-black text-white">
      
    
      <div className="fixed top-0 w-full z-50 flex flex-col items-center justify-center h-[10vh] text-center px-2 bg-black-opacity-80 backdrop-blur-sm">
  <ul className="menuInicio flex justify-center gap-50">
    <li className="text-2xl animado"><a href="#home">Home</a></li>
    <li className="text-2xl animado"><a href="#acerca">Acerca de mí</a></li>
    <li className="text-2xl animado"><a href="#exp">Experiencia</a></li>
    <li className="text-2xl animado"><a href="#proyectos">Proyectos</a></li>
  </ul>
</div>




 
      <div id="home" className="flex justify-center items-center h-[100vh] relative">
        <div className="w-[1000px] h-[1000px] relative flex flex-col items-center justify-center text-center px-4 gap-8">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 rounded-lg "
            style={{ backgroundImage: "url('/img/cubo.png')" }}
          ></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h1 className="text-9xl font-bold animado ">David Henrique</h1>
            <p className="text-2xl max-w-md animadoArriba">Programador de Frontend y Backend, con muchas ganas de seguir aprendiendo.</p>
          </div>
        </div>
      </div>
      
      <div id="acerca" className="separacion"></div>



<section  className="flex flex-col items-center justify-center  px-8">
  <div className="flex flex-col md:flex-row items-center gap-30">
    
    
   <div className="relative w-140 h-140 group">
  <img 
    src="/img/yo.png"
    alt="Foto de Perfil" 
    className="w-full h-full object-cover rounded-full shadow-lg border-4 border-purple-500 transition duration-500 group-hover:opacity-0"
  />

  <img 
    src="/img/foto animada.png" 
    alt="Foto Dibujo Hover" 
    className="w-full h-full object-cover rounded-full shadow-lg border-4 border-purple-500 absolute top-0 left-0 opacity-0 transition duration-500 group-hover:opacity-100"
  />
</div>


    <div >
    <div className="text-center md:text-left">
      <h2 className="text-7xl font-bold mb-8 animado ">Acerca de mí</h2>
      <p className="text-2xl max-w-xl">
        Soy David Henrique, un programador Web con experiencia en Frontend y Backend.
        Me gusta mucho todo lo relacionado a diseño, me gusta dibujar y jugar videojuegos en mis tiempos libres.
      </p>
    </div>
    </div>

  </div>
</section>


   

    <section id="exp" className="flex flex-col items-center justify-center py-100 px-8 ">

  <div  className="max-w-6xl w-full">
    <h2 className="text-8xl font-bold mb-20 text-center animado">Experiencia</h2>
    <div className="flex flex-col md:flex-row justify-center gap-12">

  
      <div className=" bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300 animadoIzquierda"> 
        <div className="flex flex-col items-center mb-4 ">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
            alt="GitHub Logo" 
            className="w-16 h-16 mb-4 transition-transform duration-300 transform hover:scale-125" 
          />
          <h3 className="text-3xl font-semibold">GitHub</h3>
        </div>
        <p className="text-xl">
          Experiencia en el uso de GitHub para el control de versiones y colaboración en proyectos. 
          También tengo un portafolio de proyectos personales en mi cuenta de GitHub usando ramas.
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
          Experiencia en el desarrollo de aplicaciones web utilizando tecnologías como React, Next.js, Node.js y Express.
          Conocimientos en HTML, CSS y JavaScript. 
          Desarrollo de aplicaciones web responsivas y optimizadas para diferentes dispositivos.
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
          Desarrollo de proyectos propios publicados en GitHub con tecnologías como PHP, TypeScript y JavaScript.
          Integración de tecnologías como Git, y despliegues en Vercel.
        </p>
      </div>

    </div>
  </div>
</section>

      <section id="proyectos"
  className="py-50 px-8 "
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-8xl font-bold mb-20 text-center text-white animado">Proyectos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

  
      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/61M3rDwh4qL._h1_.png')" }}>
       
  
  
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <p className="text-white text-lg mb-4">Un proyecto de Tetris hecho con React y JavaScript </p>
            <a 
              href="https://tetris-proyecto.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-lg font-bold py-2 px-6 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" 
          alt="Proyecto 2" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 2</h3>

 
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <p className="text-white text-lg mb-4">Este proyecto utiliza Bootstrap para diseño responsivo y limpio.</p>
            <a 
              href="https://github.com/daw2-cognom25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-lg font-bold py-2 px-6 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

  
      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/HTML5_logo_and_wordmark.svg" 
          alt="Proyecto 3" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 3</h3>

 
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <p className="text-white text-lg mb-4">Aplicación web desarrollada con HTML5, CSS3 y JavaScript.</p>
            <a 
              href="https://github.com/daw2-cognom25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-lg font-bold py-2 px-6 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

  
      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/HTML5_logo_and_wordmark.svg" 
          alt="Proyecto 4" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 4</h3>

        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <p className="text-white text-lg mb-4">Este es un proyecto de backend usando Node.js y Express.</p>
            <a 
              href="https://github.com/daw2-cognom25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-lg font-bold py-2 px-6 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>


      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/HTML5_logo_and_wordmark.svg" 
          alt="Proyecto 5" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 5</h3>

        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <p className="text-white text-lg mb-4">Este es un proyecto donde se manejan bases de datos con MySQL.</p>
            <a 
              href="https://github.com/daw2-cognom25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-lg font-bold py-2 px-6 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>


      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/HTML5_logo_and_wordmark.svg" 
          alt="Proyecto 6" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 6</h3>

   
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <p className="text-white text-lg mb-4">Proyecto en el que integro APIs para obtener y mostrar datos.</p>
            <a 
              href="https://github.com/daw2-cognom25" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white text-lg font-bold py-2 px-6 bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-400 transition-all duration-300"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<div className="w-full border-t border-white opacity-50 my-5"></div>

<footer className="text-white py-16 flex flex-col items-center relative overflow-hidden">
  <div className="flex flex-col items-center gap-8 z-10 relative">

    <h2 className="text-4xl md:text-5xl font-bold text-center">Contáctame</h2>

    <div className="flex gap-8">
      <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
         className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="GitHub" className="w-10 h-10" />
      </a>
      <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
         className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/ios11/512/FFFFFF/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
      </a>
      <a href="mailto:tuemail@ejemplo.com" aria-label="Email"
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
