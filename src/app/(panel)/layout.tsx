'use client'
import { usePathname } from 'next/navigation'
import { NavBarCustom } from '@/modules/core'
import { MenuItems } from '@/types'

interface LayoutProps {
  children: React.ReactNode
}

const menuNav: MenuItems.IMenuItem[] = [
  {
    label: 'FeedBack',
    href: '/feedback',
  },
  {
    label: 'Historial',
    href: '/about',
  },
  {
    label: 'Ayuda',
    href: '/help',
  },
]

const menuItemsTeacher: MenuItems.IMenuItem[] = [
  {
    label: 'Inicio',
    href: '/teacher',
  },
  {
    label: 'Evaluaciones',
    href: '/teacher/evaluations',
  },
  {
    label: 'Perfil',
    href: '/teacher/profile',
  },
]

const menuItemsDirector: MenuItems.IMenuItem[] = [
  {
    label: 'Inicio',
    href: '/director',
  },
  {
    label: 'Gestionar aulas',
    href: '/director/manage-classrooms',
  },
  {
    label: 'Gestionar docentes',
    href: '/director/manage-teachers',
  },
  {
    label: 'Evaluaciones',
    href: '/director/evaluations',
  },
  {
    label: 'Asignar evaluaciones',
    href: '/director/evaluations/assign-evaluations',
  },
  {
    label: 'Perfil',
    href: '/director/profile',
  },
]

export default function Layout(props: LayoutProps) {
  const { children } = props
  const pathname = usePathname()
  const initialPath = pathname.split('/')[1]

  const menuItems =
    initialPath === 'teacher' ? menuItemsTeacher : menuItemsDirector

  return (
    <main className="flex flex-col h-full">
      <NavBarCustom
        menuNavbar={menuNav}
        menuFooter={menuItems}
        user={{
          name: 'Pancracio López',
          email: 'pancracio@gmail.com',
          roles: [{ label: 'Director', href: '/director' }],
        }}
      />
      <article className="w-full h-full">{children}</article>
    </main>
  )
}
