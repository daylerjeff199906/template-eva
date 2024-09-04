'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { UserDropdown } from '@/modules/core'
import { ItemLink, MenuSection, RolesSection } from './sections'
import { IMenuItem } from '@/types'

// const options = [
//   { value: '1', label: 'Option 1' },
//   { value: '2', label: 'Option 2' },
//   { value: '3', label: 'Option 3' },
// ]

// const menuNavbar = [
//   { label: 'Feddback', href: '/feedback' },
//   { label: 'Historial', href: '/history' },
//   { label: 'ayuda', href: '/help' },
// ]

// const menuFooter = [
//   { label: 'Terminos y condiciones', href: '/navbar' },
//   { label: 'Politicas de privacidad', href: '/privacy' },
//   { label: 'Contacto', href: '/contact' },
// ]

interface INavBarCustomProps {
  disabledItemsFooter?: boolean
  menuFooter?: IMenuItem[]
  menuNavbar?: IMenuItem[]
  user: {
    name: string
    email: string
    roles: IMenuItem[]
  }
}

export const NavBarCustom = (props: INavBarCustomProps) => {
  const { disabledItemsFooter, menuFooter, menuNavbar, user } = props
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
            {user && <RolesSection options={user?.roles} />}
          </div>
        </section>
        <section className="flex gap-6 items-center">
          {menuNavbar && <MenuSection menuNavbar={menuNavbar} />}
          <hr className="h-10 w-0.5 bg-gray-300" />
          {user && (
            <UserDropdown
              user={user.name}
              description={user.email}
            />
          )}
        </section>
      </main>
      {!disabledItemsFooter && (
        <footer className="flex border-b">
          {menuFooter?.map((item) => (
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
