'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export const UserProfile = () => {

    return (
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
    )
}