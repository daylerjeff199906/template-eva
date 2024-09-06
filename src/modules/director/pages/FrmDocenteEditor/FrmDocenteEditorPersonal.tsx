"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LayoutFrmHorizontal } from "@/modules/core"

export const FrmDocenteEditorPersonal = () => {
    return (
        <main className="container pt-6">
            <form className="flex flex-col gap-6">
                <section className="p-6 bg-white">
                    <LayoutFrmHorizontal title="Datos Personales" subtitle="Ingrese los datos personales del docente">
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
                                placeholder="Ingrese su apellido paterno" required
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
                    </LayoutFrmHorizontal>
                </section>
                <section className="p-6 bg-white">
                    <LayoutFrmHorizontal title="Datos Personales" subtitle="Ingrese el correo y un celular de contacto, asegurence de que los datos sean reales">
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
                    </LayoutFrmHorizontal>
                </section>
                <section className="flex justify-end items-center gap-4 p-4 bg-white">
                    <Button variant={"outline"} className="h-10 border-green-800 text-green-800 bg-green-800/10">Cancelar</Button>
                    <Button className="h-10">Guardar datos</Button>
                </section>
            </form>
        </main>
    )
}