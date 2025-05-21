"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const elementos = document.querySelectorAll(
      ".animado, .animadoArriba, .animadoIzquierda, .animadoDerecha"
    );

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

      <div
        id="home"
        className="flex justify-center items-center h-[100vh] relative"
      >
        <div className="w-full max-w-[1000px] h-[1000px] relative flex flex-col items-center justify-center text-center px-4 gap-8">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 rounded-lg"
            style={{ backgroundImage: "url('/img/cubo.png')" }}
          ></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h1 className="text-6xl sm:text-9xl font-bold animado">
              David Henrique
            </h1>
            <p className="text-2xl max-w-md animadoArriba">
              Programador de Frontend y Backend, con muchas ganas de seguir
              aprendiendo.
            </p>
          </div>
        </div>
      </div>

      <div className="separacion"></div>

      <section
        id="acerca"
        className="flex flex-col items-center justify-center px-8"
      >
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
              <h2 className="text-5xl sm:text-7xl font-bold mb-8 animado">
                Acerca de mí
              </h2>
              <p className="text-xl sm:text-2xl max-w-xl">
                Soy David Henrique, un programador Web con experiencia en
                Frontend y Backend. Me gusta mucho todo lo relacionado a diseño,
                me gusta dibujar y jugar videojuegos en mis tiempos libres.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="separacion"></div>

      <section
        id="exp"
        className="flex flex-col items-center justify-center py-16 px-8"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl sm:text-8xl font-bold mb-20 text-center animado">
            Experiencia
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300 animadoIzquierda">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub Logo"
                  className="w-16 h-16 mb-4 transition-transform duration-300 transform hover:scale-125"
                />
                <h3 className="text-3xl font-semibold">Control de versiones</h3>
              </div>
              <p className="text-xl mb-6">
                Uso avanzado de Git y GitHub para control de versiones, trabajo
                colaborativo y flujos de desarrollo. Experiencia con ramas, pull
                requests y despliegue de contenedores con Docker.
              </p>
              <div className="flex justify-center gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Git"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111288.png"
                  alt="GitHub"
                  className="w-8 h-8"
                />
                <img
                  src="https://josecg.com/assets/img/post/docker/docker_logo.jpg"
                  alt="Docker"
                  className="w-8 h-8"
                />
              </div>
            </div>

            <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300 animadoArriba">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                  alt="Bootstrap Logo"
                  className="w-16 h-16 mb-4 transition-transform duration-300 transform hover:scale-125"
                />
                <h3 className="text-3xl font-semibold text-white">Frontend</h3>
              </div>

              <p className="text-xl mb-6 text-white">
                Desarrollo de interfaces modernas y responsivas con React,
                Next.js, HTML, CSS, Bootstrap y Tailwind CSS. Enfocado en
                experiencia de usuario, diseño accesible y despliegue eficiente
                en Vercel o Railway.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <img
                  title="React"
                  src="https://cdn-icons-png.flaticon.com/512/919/919851.png"
                  alt="React"
                  className="w-8 h-8"
                />
                <img
                  title="HTML5"
                  src="https://cdn-icons-png.flaticon.com/512/174/174854.png"
                  alt="HTML5"
                  className="w-8 h-8"
                />
                <img
                  title="CSS3"
                  src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                  alt="CSS3"
                  className="w-8 h-8"
                />
                <img
                  src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                  alt="Bootstrap"
                  className="w-8 h-8"
                />

                <img
                  title="Tailwind CSS"
                  src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png"
                  alt="Tailwind CSS"
                  className="w-8 h-8"
                />
                <img
                  title="Vercel"
                  src="https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico"
                  alt="Vercel"
                  className="w-8 h-8"
                />
                <img
                  title="Next.js"
                  src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                  alt="Next.js"
                  className="w-8 h-8 rounded-full bg-black p-1"
                />
                <img
                  title="ShadCN"
                  src="https://avatars.githubusercontent.com/u/139895814?v=4"
                  alt="ShadCN"
                  className="w-8 h-8 rounded-full bg-black p-1"
                />
                <img
                  title="Railway"
                  src="https://railway.app/favicon.ico"
                  alt="Railway"
                  className="w-8 h-8"
                />
              </div>
            </div>

            <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300 animadoDerecha">
              <div className="flex flex-col items-center mb-4">
                <img
                  src="https://images.icon-icons.com/3261/PNG/512/reactjs_logo_icon_206693.png"
                  alt="Backend Logo"
                  className="w-20 h-20 mb-4 transition-transform duration-300 transform hover:scale-125"
                />
                <h3 className="text-3xl font-semibold">Backend</h3>
              </div>
              <p className="text-xl mb-6">
                Programación backend con PHP, Laravel, JavaScript y TypeScript.
                Experiencia con bases de datos como MySQL, Supabase y Apis.
                Despliegue eficiente en Vercel y github pages.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
                  alt="PHP"
                  className="w-8 h-8"
                />
                <img
                  src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
                  alt="Laravel"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt="JavaScript"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
                  alt="TypeScript"
                  className="w-8 h-8"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
                  alt="MySQL"
                  className="w-8 h-8"
                />
                <img
                  src="https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj"
                  alt="Supabase"
                  className="w-8 h-8"
                />
                <img
                  src=" https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/github-pages-examples/github-pages-examples.png"
                  alt="githuPages"
                  className="w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="separacion"></div>

      <section id="proyectos" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl sm:text-8xl font-bold mb-20 text-center animado">
            Proyectos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div
              className="group relative bg-purple-800 p-8 rounded-lg  text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
              style={{
                backgroundImage:
                  "url('https://m.media-amazon.com/images/I/61M3rDwh4qL._h1_.png')",
              }}
            >
              <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center px-6">
                  <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                    Proyecto Tetris
                  </h4>
                  <p className="text-white text-lg mb-4">
                    Un proyecto de Tetris hecho con React y JavaScript
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    <a
                      href="https://github.com/tuusuario/proyecto-memory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                      Github
                    </a>
                    <a
                      href="https://proyecto-memory-gray.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-teal-600 rounded-md shadow-md hover:bg-teal-500 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/14/14777.png"
                        alt="Vercel"
                        className="w-5 h-5"
                      />
                      Ver web
                    </a>
                  </div>

                  <div className="flex justify-center gap-4">
                    <img
                      src="https://static-00.iconduck.com/assets.00/js-icon-2048x2048-kbwt89q3.png"
                      alt="JavaScript"
                      className="w-8 h-8 "
                    />

                    <img
                      src="https://www.svgrepo.com/show/306646/react.svg"
                      alt="React"
                      className="w-8 h-8  "
                    />
                    <img
                      src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                      alt="Bootstrap"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
              style={{
                backgroundImage:
                  "url('https://cloud.educaplay.com/r2/img/activities/RELACIONAR_MOSAICO/logoActivity.png?v=1747042562')",
              }}
            >
              <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center px-6">
                  <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                    Proyecto Memory
                  </h4>
                  <p className="text-white text-lg mb-6">
                    Un juego de memoria hecho con Next.js, ShadCN y JavaScript
                    con api propia
                  </p>

                  <div className="flex justify-center gap-4 mb-4">
                    <a
                      href="https://github.com/tuusuario/proyecto-memory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                      Github
                    </a>
                    <a
                      href="https://proyecto-memory-gray.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-teal-600 rounded-md shadow-md hover:bg-teal-500 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/14/14777.png"
                        alt="Vercel"
                        className="w-5 h-5"
                      />
                      Ver web
                    </a>
                  </div>

                  <div className="flex justify-center gap-4">
                    <img
                      src="https://static-00.iconduck.com/assets.00/js-icon-2048x2048-kbwt89q3.png"
                      alt="JavaScript"
                      className="w-8 h-8 "
                    />
                    <img
                      src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
                      alt="Next.js"
                      className="w-8 h-8 rounded-full bg-black"
                    />
                    <img
                      src="https://avatars.githubusercontent.com/u/139895814?v=4"
                      alt="ShadCN"
                      className="w-8 h-8 rounded-full bg-white"
                    />
                    <img
                      src="https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png"
                      alt="Laravel"
                      className="w-8 h-8 "
                    />

                    <img
                      src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
                      alt="Php"
                      className="w-8 h-8 "
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="Tailwind CSS"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
              style={{
                backgroundImage:
                  "url('https://i1.wp.com/accessaa.co.uk/wp-content/uploads/2017/07/Screen-Shot-2017-07-03-at-11.42.31.png?fit=681%2C473&ssl=1')",
              }}
            >
              <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center px-6">
                  <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                    Gestion de Tickets
                  </h4>
                  <p className="text-white text-lg mb-4">
                    Un proyecto hecho con React y JavaScript, en que controlamos
                    inicios de sesiones y gestion de Tickets con comentarios{" "}
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    <a
                      href="https://github.com/tuusuario/proyecto-memory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                      Github
                    </a>
                    <a
                      href="https://proyecto-memory-gray.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-teal-600 rounded-md shadow-md hover:bg-teal-500 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/14/14777.png"
                        alt="Vercel"
                        className="w-5 h-5"
                      />
                      Ver web
                    </a>
                  </div>

                  <div className="flex justify-center gap-4">
                    <img
                      src="https://static-00.iconduck.com/assets.00/js-icon-2048x2048-kbwt89q3.png"
                      alt="JavaScript"
                      className="w-8 h-8"
                    />

                    <img
                      src="https://www.svgrepo.com/show/306646/react.svg"
                      alt="React"
                      className="w-8 h-8  "
                    />

                    <img
                      src="https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj"
                      alt="Supabase"
                      className="w-8 h-8 rounded-full bg-black p-1"
                    />

                    <img
                      src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                      alt="Bootstrap"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
              style={{
                backgroundImage:
                  "url('https://img.freepik.com/vector-premium/recetas-linea-concepto-lista-ingredientes-chef-profesional-plato-tiny-people-lee-libro-recetas-ook-in-hef-ap-estilo-moderno-dibujos-animados-planos-ilustracion-vectorial-sobre-fondo-blanco_501813-1111.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center px-6">
                  <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                    Recelist
                  </h4>
                  <p className="text-white text-lg mb-4">
                    Proyecto FullStack de una pagina web sobre recetas
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    <a
                      href="https://github.com/tuusuario/proyecto-memory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                      Github
                    </a>
                    <a
                      href="https://proyecto-memory-gray.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-teal-600 rounded-md shadow-md hover:bg-teal-500 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/14/14777.png"
                        alt="Vercel"
                        className="w-5 h-5"
                      />
                      Ver web
                    </a>
                  </div>

                  <div className="flex justify-center gap-4">
                    <img
                      src="https://www.svgrepo.com/show/306646/react.svg"
                      alt="React"
                      className="w-8 h-8  "
                    />
                    <img
                      src="https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj"
                      alt="Supabase"
                      className="w-8 h-8 rounded-full bg-black p-1"
                    />

                    <img
                      src="https://static-00.iconduck.com/assets.00/js-icon-2048x2048-kbwt89q3.png"
                      alt="JavaScript"
                      className="w-8 h-8"
                    />

                    <img
                      src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                      alt="Bootstrap"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
              style={{ backgroundImage: "url('/img/web.jpg')" }}
            >
              <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center px-6">
                  <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                    Master Webs
                  </h4>
                  <p className="text-white text-lg mb-4">
                    Crud completo hecho en php con una base de datos hecha desde
                    cero
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    <a
                      href="https://github.com/tuusuario/proyecto-memory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                      Github
                    </a>
                    <a
                      href="https://proyecto-memory-gray.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-teal-600 rounded-md shadow-md hover:bg-teal-500 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/14/14777.png"
                        alt="Vercel"
                        className="w-5 h-5"
                      />
                      Ver web
                    </a>
                  </div>

                  <div className="flex justify-center gap-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
                      alt="Php"
                      className="w-8 h-8 "
                    />
                    <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
                  alt="MySQL"
                  className="w-8 h-8"
                />
                    <img
                      src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                      alt="Bootstrap"
  
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" group relative bg-purple-800 p-8 rounded-lg shadow-lg text-center overflow-hidden bg-cover bg-center flex flex-col justify-end min-h-[300px]"
              style={{ backgroundImage: "url('/img/disenyo.png')" }}
            >
              <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-center px-6">
                  <h4 className="text-white text-3xl font-bold mb-6 tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                    Patrones de Diseño
                  </h4>
                  <p className="text-white text-lg mb-4">
                    Un proyecto sencillo sobre los patrones de diseño hecho en
                    php, subido con firezilla y alwaysdata
                  </p>
                  <div className="flex justify-center gap-4 mb-4">
                    <a
                      href="https://github.com/tuusuario/proyecto-memory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-gray-800 rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                      Github
                    </a>
                    <a
                      href="https://proyecto-memory-gray.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold py-2 px-4 bg-teal-600 rounded-md shadow-md hover:bg-teal-500 transition-all duration-300"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/14/14777.png"
                        alt="Vercel"
                        className="w-5 h-5"
                      />
                      Ver web
                    </a>
                  </div>

                  <div className="flex justify-center gap-4">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
                      alt="Php"
                      className="w-8 h-8 "
                    />
                    <img
                      src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                      alt="Bootstrap"
  
                      className="w-8 h-8"
                    />
                  </div>
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
          <h2 className=" text-4xl md:text-5xl font-bold text-center">
            Contáctame
          </h2>

          <div className="flex gap-8">
            <a
              href="https://github.com/DavidHenrique24"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-125 transition-transform duration-300"
            >
              <img
                src="https://img.icons8.com/ios11/512/FFFFFF/github.png"
                alt="GitHub"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/david-henrique-9519a3356/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-125 transition-transform duration-300"
            >
              <img
                src="https://img.icons8.com/ios11/512/FFFFFF/linkedin.png"
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
            <a
              href="Davidhenriquemacias2005@hotmail.com"
              aria-label="Email"
              className="hover:scale-125 transition-transform duration-300"
            >
              <img
                src="https://img.icons8.com/win10/512/FFFFFF/gmail.png"
                alt="Email"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center z-10 relative">
          <p className="text-lg">Espero vernos pronto!</p>
        </div>
        <img
          src="/img/Y8HD.gif"
          alt="GitHub"
          className="w-30 h-20 opacity-5 mt-3"
        />
      </footer>
    </main>
  );
}
