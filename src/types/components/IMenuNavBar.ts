import { IMenuItem } from '.'

export interface IMenuSectionProps {
  menuNavbar: IMenuItem[]
}

export interface IRolesSectionProps {
  options: { label: string; value: string }[]
}
