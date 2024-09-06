import { useEffect, useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, X } from "lucide-react"

interface AlertaDangerProps {
    tittleDanger?: string
    mensajeDanger?: string
    tipoAlert: string
    onCloseDanger: () => void
    autoCloseTime?: number
}

export default function AlertaDanger(Props: AlertaDangerProps) {
    const {
        tittleDanger = "¡Atención! tienes evaluación pendiente",
        mensajeDanger = " Tienes evaluaciones pendientes de realizar, realiza las evaluaciones de los cursos y grupos asignados antes que termine el plazo.",
        tipoAlert = "Danger Alert",
        onCloseDanger,
        autoCloseTime = 10000
    } = Props

    const [progress, setProgress] = useState(100) // Estado inicial de la barra al 100%

    useEffect(() => {
        const startTime = Date.now()  // Tiempo actual en que empieza la alerta
        const endTime = startTime + autoCloseTime  // Tiempo en el que debería cerrarse

        const timer = setInterval(() => {
            const currentTime = Date.now()
            const timeElapsed = currentTime - startTime
            const remainingProgress = Math.max(100 - (timeElapsed / autoCloseTime) * 100, 0)
            setProgress(remainingProgress)

            if (currentTime >= endTime) {
                clearInterval(timer)  // Limpiar el intervalo cuando llegue a 0%
                onCloseDanger()  // Cerrar la alerta
            }
        }, 100)  // Actualización cada 100ms para mayor fluidez

        // Limpiar el temporizador cuando el componente se desmonte
        return () => clearInterval(timer)
    }, [autoCloseTime, onCloseDanger])

    return (
        <div className="p-4">
            <Alert className="border-2 border-yellow-500 bg-white shadow-sm">
                <div className="absolute top-0 left-0 h-1 bg-yellow-500 transition-all duration-100"
                    style={{ width: `${progress}%` }} />
                <div className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-yellow-500" />
                    <div className="ml-3">
                        <AlertTitle className="text-lg font-semibold text-yellow-500">
                            {tittleDanger}
                        </AlertTitle>
                        <AlertDescription className="text-gray-600">
                            {mensajeDanger}
                        </AlertDescription>
                    </div>
                </div>
                <button
                    onClick={onCloseDanger}
                    className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-700"
                >
                    <X className="h-5 w-5" />
                </button>
            </Alert>
        </div>
    )
}
