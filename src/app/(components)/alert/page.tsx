"use client"
import AlertError from "@/modules/core/components/alertas/error"
import AlertInfo from "@/modules/core/components/alertas/info"
import AlertDanger from "@/modules/core/components/alertas/danger"
import AlertSucces from "@/modules/core/components/alertas/success"
import { useState } from "react"

export default function MostrarAlertas() {
    const [isErrorVisible, setIsErrorVisible] = useState(true)
    const [isInfoVisible, setIsInfoVisible] = useState(true)
    const [isDangerVisible, setIsDangerVisible] = useState(true)
    const [isSuccessVisible, setIsSuccessVisible] = useState(true)

    return (
        <div>
            {isInfoVisible && (
                <AlertInfo
                    tipoAlert="info"
                    onCloseInfo={() => setIsInfoVisible(false)}
                />
            )}

            {isDangerVisible && (
                <AlertDanger
                    tipoAlert="danger"
                    onCloseDanger={() => setIsDangerVisible(false)}
                />
            )}

            {isErrorVisible && (
                <AlertError
                    tipoAlert="error"
                    onCloseError={() => setIsErrorVisible(false)}

                />
            )}

            {isSuccessVisible && (
                <AlertSucces
                    tipoAlert="success"
                    onCloseSuccess={() => setIsSuccessVisible(false)}
                />
            )}
        </div>
    )
}
