

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-700 to-black text-white">
      
      {/* Menu inicio */}
      <div className="flex flex-col items-center justify-center h-[10vh] text-center px-2">
        <ul className="menuInicio flex justify-center gap-20 list-none">
          <li><a href="#">Home</a></li>
          <li>//</li>
          <li><a href="#">Acerca de mí</a></li>
          <li>//</li>
          <li><a href="#">Experiencia</a></li>
          <li>//</li>
          <li><a href="#">Proyectos</a></li>
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
    
    {/* Contenedor de las imágenes */}
    <div className="relative w-100 h-100 group">
      {/* Imagen normal */}
      <img 
        src="https://preview.redd.it/mt8gf0gkmclc1.jpeg?auto=webp&s=a996aac416a181dc52c14be2c0f58a1d05ea8e6a" 
        alt="Foto de Perfil" 
        className="w-full h-full object-cover rounded-full shadow-lg border-4 border-purple-500 transition duration-500 group-hover:opacity-0"
      />
      {/* Imagen al hacer hover */}
      <img 
        src="https://i.ebayimg.com/images/g/yfwAAOSwBOBkQh-V/s-l1200.jpg" 
        alt="Foto Hover" 
        className="w-full h-full object-cover rounded-full shadow-lg border-4 border-purple-500 absolute top-0 left-0 opacity-0 transition duration-500 group-hover:opacity-100"
      />
    </div>

    {/* Texto al lado */}
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


  <section className="py-50 px-8 ">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-8xl font-bold mb-20 text-center text-white">Proyectos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* Proyecto 1 */}
      <div className="group relative bg-blue-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://images.icon-icons.com/3261/PNG/512/reactjs_logo_icon_206693.png" 
          alt="Proyecto 1" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 1</h3>

        {/* Hover State */}
        <div className="absolute inset-0 bg-purple-900 bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="text-center px-6">
            <p className="text-white text-lg mb-4">Un proyecto que utiliza React y otras tecnologías modernas.</p>
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

      {/* Proyecto 2 */}
      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" 
          alt="Proyecto 2" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 2</h3>

        {/* Hover State */}
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

      {/* Proyecto 3 */}
      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/HTML5_logo_and_wordmark.svg" 
          alt="Proyecto 3" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 3</h3>

        {/* Hover State */}
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

      {/* Proyecto 4 */}
      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/HTML5_logo_and_wordmark.svg" 
          alt="Proyecto 4" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 4</h3>

        {/* Hover State */}
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

      {/* Proyecto 5 */}
      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/HTML5_logo_and_wordmark.svg" 
          alt="Proyecto 5" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 5</h3>

        {/* Hover State */}
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

      {/* Proyecto 6 */}
      <div className="group relative bg-purple-800 p-8 rounded-lg shadow-lg flex-1 text-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/49/HTML5_logo_and_wordmark.svg" 
          alt="Proyecto 6" 
          className="w-full h-48 object-cover mb-4 group-hover:hidden transition-all duration-300" 
        />
        <h3 className="text-3xl font-semibold text-white group-hover:hidden transition-all duration-300">Proyecto 6</h3>

        {/* Hover State */}
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

<footer className="text-white py-50 px-8 flex flex-col items-center gap-8 bg-gradient-to-b from-purple-700 to-purple">
  <div className="flex flex-col items-center gap-8 relative z-10">
    {/* Título */}
    <h2 className="text-5xl font-bold text-center">Contáctame</h2>
    {/* Iconos de redes */}
    <div className="flex gap-8">
      <a href="" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" alt="GitHub" className="w-10 h-10" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/ios11/512/FFFFFF/linkedin.png" alt="LinkedIn" className="w-10 h-10" />
      </a>
      <a href="" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/m_outlined/512/FFFFFF/instagram-new.png" alt="Instagram" className="w-10 h-10" />
      </a>
      <a href="" className="hover:scale-125 transition-transform duration-300">
        <img src="https://img.icons8.com/win10/512/FFFFFF/gmail.png" alt="Email" className="w-10 h-10" />
      </a>
    </div>
  </div>
</footer>


    </main>
    
    
  );
}
