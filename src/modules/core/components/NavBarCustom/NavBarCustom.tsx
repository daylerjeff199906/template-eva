import Image from 'next/image'
import { UserDropdown } from '@/modules/core'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import Link from 'next/link'

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
  { label: 'Terminos y condiciones', href: '/terms' },
  { label: 'Politicas de privacidad', href: '/privacy' },
  { label: 'Contacto', href: '/contact' },
]

interface IProps {
  disabledItemsFooter?: boolean
}

export const NavBarCustom = (props: IProps) => {
  const { disabledItemsFooter } = props
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
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Roles</SelectLabel>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </section>
        <section className="flex gap-6 items-center">
          <div className="flex gap-2 items-center">
            {menuNavbar.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border py-2 px-3 rounded-md text-xs font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
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
            />
          ))}
        </footer>
      )}
    </nav>
  )
}

interface IItemLink {
  label: string
  href: string
  isActived?: boolean
}

const ItemLink = (props: IItemLink) => {
  const { label, href, isActived } = props
  return (
    <Link
      href={href}
      className={`border-b py-2 px-3 text-xs  ${
        isActived ? 'font-bold border-b-black' : 'font-semibold '
      }`}
    >
      {label}
    </Link>
  )
}
