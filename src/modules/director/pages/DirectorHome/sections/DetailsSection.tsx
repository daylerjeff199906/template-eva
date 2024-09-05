export const DetailsSection = () => {
  return (
    <main className="container bg-white py-8 px-6">
      <section className="flex flex-col gap-3">
        <header>
          <h1 className="text-xl font-medium">
            NOMBRE DE LA INSTITUCIÓN EDUCATIVA
          </h1>
        </header>
        <section className="text-sm text-gray-500 grid grid-cols-2 gap-4">
          <div className="grid grid-cols-4">
            <h2 className="col-span-1">Localidad</h2>
            <h3 className="col-span-3">
              : Localidad de la institución educativa
            </h3>
          </div>
          <div className="grid grid-cols-4">
            <h2 className="col-span-1">Dirección</h2>
            <h3 className="col-span-3">
              : Dirección de la institución educativa
            </h3>
          </div>
          <div className="grid grid-cols-4">
            <h2 className="col-span-1">Cod. Ubigeo</h2>
            <h3 className="col-span-3">: 000000002020</h3>
          </div>
          <div className="grid grid-cols-4">
            <h2 className="col-span-1">Cod. local</h2>
            <h3 className="col-span-3">: 234234299 - A23</h3>
          </div>
          <div className="grid grid-cols-4">
            <h2 className="col-span-1">Categoria</h2>
            <h3 className="col-span-3">: Nombre de categoria</h3>
          </div>
          <div className="grid grid-cols-4">
            <h2 className="col-span-1">Código Modular</h2>
            <h3 className="col-span-3">: 23423423 -323</h3>
          </div>
          <div className="grid grid-cols-4">
            <h2 className="col-span-1">Nivel</h2>
            <h3 className="col-span-3">: Nombre de nivel</h3>
          </div>
        </section>
      </section>
    </main>
  )
}
