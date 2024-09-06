"use client"

import DialogConfirmacion from "@/modules/core/components/dialogos/confirmacion"
import DialogImportacion from "@/modules/core/components/dialogos/importacion"
import DialogCategoria from "@/modules/core/components/dialogos/categoria"
import DialogNivel from "@/modules/core/components/dialogos/nivel"
import DialogModalidad from "@/modules/core/components/dialogos/modalidad"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Dialogos() {
    const [open, setOpen] = useState(false)
    return (
            <div className="flex justify-center items-center h-screen">
                <div >
                    <DialogImportacion />
                    <Button variant="outline" onClick={() => setOpen(true)}>Abrir</Button>
                    <DialogConfirmacion isOpen={open} onClose={() => setOpen(false)} onSubmit={() => setOpen(false)}/>
                    <DialogCategoria />
                    <DialogNivel />
                    <DialogModalidad />
                </div>
            </div>
    )
}
