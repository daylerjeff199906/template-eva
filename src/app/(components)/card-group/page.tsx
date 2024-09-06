import { CardGroup } from "@/modules/core/components"

export default function Page() {
    return (
        <div>
            <CardGroup
                title="Proyecto X"
                description="Descripción del proyecto X"
                labelRef="Ver detalles"
                progress={75}
                states={true}
            />
        </div>
    )
}