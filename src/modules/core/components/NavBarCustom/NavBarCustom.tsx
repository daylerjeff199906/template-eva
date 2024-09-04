import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
]

export const NavBarCustom = () => {
  return (
    <nav>
      <main className="container flex justify-between">
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
        <section className="flex gap-6">
          <div className="flex">
            <a href="#">Home</a>
            <a href="#">Home</a>
            <a href="#">Home</a>
          </div>
          <div></div>
        </section>
      </main>
    </nav>
  )
}
