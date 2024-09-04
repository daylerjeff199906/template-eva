import { MenuItems } from '@/types'

export interface IMenuSectionProps {
  menuNavbar: MenuItems.IMenuItem[]
}

export interface IRolesSectionProps {
  options: MenuItems.IMenuItem[]
}

export interface INavBarCustomProps {
  disabledItemsFooter?: boolean
  menuFooter?: MenuItems.IMenuItem[]
  menuNavbar?: MenuItems.IMenuItem[]
  user: {
    name: string
    email: string
    roles: MenuItems.IMenuItem[]
  }
}
