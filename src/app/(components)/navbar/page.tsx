import { HeaderSection, NavBarCustom } from '@/modules/core'

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
      <HeaderSection />
    </div>
  )
}
