'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export const UserContact = () => {
    return (
            <div className="flex flex-col gap-6 w-full">
                <form className="flex flex-col gap-4 p-8 w-full bg-white">
                    <div>
                        <Label htmlFor="text">Teléfono</Label>
                        <Input
                            id="text"
                            type="text"
                            className="h-10"
                            placeholder="Ingrese su Teléfono"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="text">Email</Label>
                        <Input
                            id="text"
                            type="text"
                            className="h-10"
                            placeholder="Ingrese su Email"
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