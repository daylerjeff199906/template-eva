import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface IUserDropdownProps {
  image?: string
  user: string
  description: string
}

export const UserDropdown = (props: IUserDropdownProps) => {
  const { image, user, description } = props

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="p-0 m-0">
        <section className="flex items-start gap-3">
          <div></div>
          <div className="flex flex-col items-start">
            <h3 className="text-sm font-semibold">{user}</h3>
            <h2 className="text-xs text-gray-500">{description}</h2>
          </div>
        </section>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
