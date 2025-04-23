
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      {/* Menu inicio */}
      <div className="flex flex-col items-center justify-center h-[10vh] text-center px-2">
        <ul className="menuInicio flex justify-center gap-20 list-none  ">
          <li><a href="#">Home</a></li>
          <li>//</li>
          <li><a href="#">Acerca de mi</a></li>
          <li>//</li>
          <li><a href="#">Experiencia</a></li>
          <li>//</li>
          <li><a href="#">Proyecto</a></li>
        </ul>
      </div>

      {/* Home */}
      <div className="flex justify-center items-center h-[80vh]">
        <div
          className="w-[600px] h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/img/cubo.png')" }}
        >
          
          <h1 className="text-5xl font-bold">David Henrique</h1>
          <p className="mt-4 text-lg max-w-md">Este es un párrafo encima de un fondo que va de morado a negro.</p>
        </div>
      </div>
    </main>
  );
}
