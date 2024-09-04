import Link from 'next/link'
interface IItemLink {
  label: string
  href: string
  isActived?: boolean
}

export const ItemLink = (props: IItemLink) => {
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
