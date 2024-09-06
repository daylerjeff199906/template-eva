'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { UserDropdown } from '@/modules/core'
import { ItemLink, MenuSection, RolesSection } from './sections'
import { NavBar } from '@/types'

export const NavBarCustom = (props: NavBar.INavBarCustomProps) => {
  const { disabledItemsFooter, menuFooter, menuNavbar, user } = props
  const pathname = usePathname()
  return (
    <nav className="bg-white">
      <main className="container flex justify-between py-2 items-center min-h-16 h-16 max-h-16">
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
        <footer className="flex border-b container">
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
