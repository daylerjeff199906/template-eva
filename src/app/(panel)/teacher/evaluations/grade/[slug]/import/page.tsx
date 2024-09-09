"use client";

import { FileDropzone } from "@/app/(components)/dropzone/Dropzone";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/modules/core";
import { DownloadIcon } from "lucide-react";

export default function ImportPage () {

    return (
        <div>
            <HeaderSection
                title="Importar calificaciones"
                subtitle="Suba un archivo con las calificaciones de sus estudiantes para importarlas a la plataforma."
                disableAddButton
            />
            <main className="flex flex-col container space-y-8 py-6">
                <section className="justify-between items-end inline-flex">
                    <div className="justify-start items-start gap-4 flex">
                        <div className="w-8 h-8 p-4 rounded-full border border-slate-500 flex-col justify-center items-center gap-2.5 inline-flex">
                            <span className="text-base font-medium">1</span>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <h5 className="text-xl font-medium">Importe su archivo</h5>
                            <p className="text-slate-600 text-sm">Seleccione un archivo que contenga sus los datos para importar.</p>
                        </div>
                    </div>
                    <Button variant='link'  className="space-x-2">
                        <DownloadIcon size={20}/>
                        <div className="text-sm font-medium">Descargar formato de  ejemplo</div>
                    </Button>
                </section>

                <FileDropzone />

                <div className="justify-start items-center gap-4 inline-flex">
                    <div className="justify-start items-start gap-4 flex">
                        <div className="w-8 h-8 p-4 rounded-full border border-slate-400 flex-col justify-center items-center gap-2.5 inline-flex">
                            <span className="text-slate-400 text-base font-medium">2</span>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <h5 className="text-slate-400 text-xl font-medium">Verificar datos</h5>
                            <p className="w-[584px] text-slate-400 text-sm">Revise si la información a subir es la correcta</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
