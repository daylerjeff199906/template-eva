import Image from 'next/image'

export const NavBarCustom = () => {
  return (
    <nav>
      <main className="container flex justify-between">
        <section>
          <div>
            <Image
              src="/images/logoGrel.webp"
              alt="logo"
              width={140}
              height={100}
            />
          </div>
        </section>
        <section className="flex gap-6">
          <div className="flex">
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
          </div>
          <div></div>
        </section>
      </main>
    </nav>
  )
}
