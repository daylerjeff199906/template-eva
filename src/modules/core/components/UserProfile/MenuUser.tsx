import { buttonVariants } from "@/components/ui/button"
import { usePathname } from "next/dist/client/components/navigation"
import Link from "next/dist/client/link"

export const MenuUser = () => {
    
    // const pathname = usePathname()

    // console.log('pathname', pathname)

    return (
        <div className="flex flex-col p-5 gap-4 w-[286px] bg-white">
            <h1 className="font-bold">Menu</h1>
            <Link href={"/teacher/profile/"} className={"hover:bg-slate-100 p-2" }>
                <span className="text-sm">

                    Datos Personales
                </span>
            </Link>
            <Link href={"/teacher/profile/contact"} className="hover:bg-slate-100 p-2 hover:border rounded-md text-sm">
                Datos de Contacto
            </Link>
        </div>
    )
}