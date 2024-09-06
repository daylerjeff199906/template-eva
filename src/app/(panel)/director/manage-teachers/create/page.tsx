"use client"

import { HeaderSection } from "@/modules/core";
import { FrmDocenteEditorPersonal } from "@/modules/director/pages";

export default function Create() {
    return (
        <main>
            <HeaderSection
                title="Perfil de usuario"
                subtitle="Registrar, actualizar datos relevantes de mi usuario"
                disableAddButton
            />
            <FrmDocenteEditorPersonal />
        </main>
    );
}