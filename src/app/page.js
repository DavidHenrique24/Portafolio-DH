export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      
      {/* Menu inicio */}
      <div className="flex flex-col items-center justify-center h-[10vh] text-center px-2">
        <ul className="menuInicio flex justify-center gap-20 list-none">
          <li><a href="#">Home</a></li>
          <li>//</li>
          <li><a href="#">Acerca de mí</a></li>
          <li>//</li>
          <li><a href="#">Experiencia</a></li>
          <li>//</li>
          <li><a href="#">Proyecto</a></li>
        </ul>
      </div>

      {/* Home */}
      <div className="flex justify-center items-center h-[80vh] relative">
        <div className="w-[1000px] h-[1000px] relative flex flex-col items-center justify-center text-center px-4 gap-8">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 rounded-lg"
            style={{ backgroundImage: "url('/img/cubo.png')" }}
          ></div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <h1 className="text-9xl font-bold">David Henrique</h1>
            <p className="text-2xl max-w-md">Programador de Frontend y Backend, con muchas ganas de seguir aprendiendo.</p>
          </div>
        </div>
      </div>

      <div className="separacion"></div>

      {/* Acerca de mí */}
      <section className="flex flex-col items-center justify-center py-40 px-8">
        <div className="flex flex-col md:flex-row items-center gap-30">
          <img 
            src="https://preview.redd.it/mt8gf0gkmclc1.jpeg?auto=webp&s=a996aac416a181dc52c14be2c0f58a1d05ea8e6a" 
            alt="Foto de Perfil" 
            className="w-100 h-100 object-cover shadow-lg border-2xl rounded-full"
          />
          <div className="text-center md:text-left">
            <h2 className="text-7xl font-bold mb-8">Acerca de mí</h2>
            <p className="text-2xl max-w-xl">
              Soy David Henrique, un programador Web con experiencia en Frontend y Backend.
              Me gusta mucho todo lo relacionado a diseño, me gusta dibujar y jugar videojuegos en mis tiempos libres.
            </p>
          </div>
        </div>
      </section>

      <div className="separacion"></div>


    {/* Experiencia */}
    <section className="flex flex-col items-center justify-center py-40 px-8 ">
  <div className="max-w-6xl w-full">
    <h2 className="text-8xl font-bold mb-20 text-center">Experiencia</h2>
    <div className="flex flex-col md:flex-row justify-center gap-12">

      {/* GitHub */}
      {/* Agrego el hover transform pa la animaciones */}
      <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300"> 
        <div className="flex flex-col items-center mb-4">
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

      {/* Frontend Y Backend */}
      <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300">
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

      {/* Proyectos Personales */}
      <div className="bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center hover:scale-105 transform transition-all duration-300"> 
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

      <div className="separacion"></div>

  {/* Proyectos */}




    </main>
  );
}
