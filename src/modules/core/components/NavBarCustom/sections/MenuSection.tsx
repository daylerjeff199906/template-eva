import { NavBar } from '@/types'
import Link from 'next/link'

export const MenuSection = (props: NavBar.IMenuSectionProps) => {
  const { menuNavbar } = props
  return (
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
  )
}
