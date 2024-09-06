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
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    return (
        <div className="flex justify-center items-center h-screen">
            <div >
                <Button variant="outline" onClick={() => setOpen(true)}>IMPORTAR</Button>
                <Button variant="outline" onClick={() => setOpen1(true)}>CONFRIMAR</Button>
                <Button variant="outline" onClick={() => setOpen2(true)}>Agregar Categoria</Button>
                <Button variant="outline" onClick={() => setOpen3(true)}>Agregar Nivel</Button>
                <Button variant="outline" onClick={() => setOpen4(true)}>Agregar Modalidad</Button>
            </div>
            <div>
                <DialogImportacion isOpenImport={open} onCloseImport={() => setOpen(false)} onSubmitImport={() => setOpen(false)}/>
                <DialogConfirmacion isOpenConfirm={open1} onCloseConfirm={() => setOpen1(false)} onSubmitConfirm={() => setOpen1(false)} />
                <DialogCategoria isOpenCategory={open2} onCloseCategory={() => setOpen2(false)} onSubmitCategory={() => setOpen2(false)} />
                <DialogNivel isOpenNivel={open3} onCloseNivel={() => setOpen3(false)} onSubmitNivel={() => setOpen3(false)}/>
                <DialogModalidad isOpenMod={open4} onCloseMod={() => setOpen4(false)} onSubmitMod={() => setOpen4(false)}/>
            </div>
        </div>
    )
}
