import './globals.css';
export default function Home() {
  return (
    <main className=''>
      {/* Menu inicio  */}
      <div> 
      <ul className="menuInicio flex justify-center gap-20 list-none p-0 mt-5">
      <li><a href="#">Home</a></li>
      <li>//</li>
      <li><a href="#">Acerca de mi</a></li>
      <li>//</li>
    <li><a href="#">Experiencia</a></li>
    <li>//</li>
    <li><a href="#">Proyecto</a></li>
    </ul>
    </div>

      {/* Home  */}
      <div className="relative">
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://preview.redd.it/1iwcit1gidyy.jpg?auto=webp&s=2e7883b8b95e0d5ed00e66d862992b618b8a3796')" }}></div>
  <div className="relative z-10 text-white p-8">
    <h1 className="text-4xl">Texto sobre la imagen</h1>
    <p className="mt-4">Este es un párrafo encima de la imagen de fondo.</p>
  </div>
</div>



    </main>
  );
}

