import { HeaderSection, NavBarCustom } from '@/modules/core'
import { LayoutAsideSection } from '@/modules/core/layouts'

const options = [
  { href: '1', label: 'Option 1' },
  { href: '2', label: 'Option 2' },
  { href: '3', label: 'Option 3' },
]

const menuNavbar = [
  { label: 'Feddback', href: '/feedback' },
  { label: 'Historial', href: '/history' },
  { label: 'ayuda', href: '/help' },
]

const menuFooter = [
  { label: 'Terminos y condiciones', href: '/navbar' },
  { label: 'Politicas de privacidad', href: '/privacy' },
  { label: 'Contacto', href: '/contact' },
]

export default function Page() {
  return (
    <div>
      <NavBarCustom
        menuFooter={menuFooter}
        menuNavbar={menuNavbar}
        user={{
          name: 'Pancracio Tamarindo',
          email: 'felipao@hotmail.com',
          roles: options,
        }}
      />
      <HeaderSection showBackButton />
      <LayoutAsideSection
        aside={
          <section>
            <h1>Este es el aside</h1>
          </section>
        }
      >
        <main>
          <h1>Navbar</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptates, quia, voluptas, quos quidem quibusdam doloribus
            necessitatibus autem quod nesciunt possimus. Quisquam, quas
            voluptates. Quisquam, quas voluptates. Quisquam, quas voluptates.
          </p>
        </main>
      </LayoutAsideSection>
    </div>
  )
}
