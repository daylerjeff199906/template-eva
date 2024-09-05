'use client'

import Link from "next/dist/client/link"
import { LayoutAsideSection } from "../../layouts"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button, buttonVariants } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export const UserProfile = () => {
    const pathname = usePathname()

    console.log('pathname', pathname)

    return (
        <LayoutAsideSection aside={<div className="flex flex-col p-5 gap-4 w-[286px] bg-white">
            <h1 className="font-bold">Menu</h1>
            <Link href={pathname} className={"hover:bg-slate-100 p-2" + buttonVariants({ variant: 'secondary' })}>
                <span className="text-sm">

                    Datos Personales
                </span>
            </Link>
            <Link href={"/teacher/profile/contact"} className="hover:bg-slate-100 p-2 hover:border rounded-md text-sm">
                Datos de Contacto
            </Link>
        </div>}>
            <div className="flex flex-col gap-6 w-full">
                <form className="flex flex-col gap-4 p-8 w-full bg-white">
                    <div>
                        <Label htmlFor="text">Nombres</Label>
                        <Input
                            id="text"
                            type="text"
                            className="h-10"
                            placeholder="Ingrese sus nombres"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="text">Apellido Paterno</Label>
                        <Input
                            id="text"
                            type="text"
                            className="h-10"
                            placeholder="Ingrese su apellido paterno"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="text">Apellido Materno</Label>
                        <Input
                            id="text"
                            type="text"
                            className="h-10"
                            placeholder="Ingrese su apellido materno"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="text">N° de Documento</Label>
                        <Input
                            id="text"
                            type="text"
                            className="h-10"
                            placeholder="Ingrese su n° de documento"
                            required
                        />
                    </div>
                </form>
                <div className="flex justify-end items-center gap-4 p-8 bg-white">
                    <Button variant={"outline"} className="h-10 border-green-800 text-green-800 bg-green-800/10">Cancelar</Button>
                    <Button className="h-10">Guardar datos</Button>
                </div>
            </div>
        </LayoutAsideSection>

    )
}