import { IMenuItem } from '.'

export interface IMenuSectionProps {
  menuNavbar: IMenuItem[]
}

export interface IRolesSectionProps {
  options: IMenuItem[]
}

export interface INavBarCustomProps {
  disabledItemsFooter?: boolean
  menuFooter?: IMenuItem[]
  menuNavbar?: IMenuItem[]
  user: {
    name: string
    email: string
    roles: IMenuItem[]
  }
}
