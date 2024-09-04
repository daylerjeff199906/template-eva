'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserDropdown } from '@/modules/core'
import { ItemLink, MenuSection, RolesSection } from './sections'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
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

interface INavBarCustomProps {
  disabledItemsFooter?: boolean
}

export const NavBarCustom = (props: INavBarCustomProps) => {
  const { disabledItemsFooter } = props
  const pathname = usePathname()
  return (
    <nav className="flex flex-col">
      <main className="container flex justify-between py-2 items-center">
        <section className="flex gap-4 items-center">
          <div
            id="section-brand"
            className="w-full min-w-[140px]"
          >
            <Image
              src="/images/logoGrel.webp"
              alt="logo"
              width={140}
              height={100}
            />
          </div>
          <hr className="h-10 w-0.5 bg-gray-300" />
          <div
            id="user-roles"
            className="w-full max-w-xs min-w-[180px]"
          >
            <RolesSection options={options} />
          </div>
        </section>
        <section className="flex gap-6 items-center">
          <MenuSection menuNavbar={menuNavbar} />
          <hr className="h-10 w-0.5 bg-gray-300" />
          <UserDropdown
            user="Pepito Perez"
            description="pepe@gmail.edu.pe"
          />
        </section>
      </main>
      {!disabledItemsFooter && (
        <footer className="flex border-b">
          {menuFooter.map((item) => (
            <ItemLink
              key={item.label}
              {...item}
              isActived={pathname === item.href}
            />
          ))}
        </footer>
      )}
    </nav>
  )
}
