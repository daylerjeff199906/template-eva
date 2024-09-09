import { useEffect, useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CircleCheck, X } from "lucide-react"

interface AlertaSuccessProps {
    tittleSuccess?: string
    mensajeSuccess?: string
    tipoAlert: string
    onCloseSuccess: () => void
    autoCloseTime?: number
}

export default function AlertaSuccess(Props: AlertaSuccessProps) {
    const {
        tittleSuccess = "¡Completado! Terminaste la evaluación",
        mensajeSuccess = "Esta información es importante, revisa siempre que tus notas sean las correactas",
        tipoAlert = "Success Alert",
        onCloseSuccess,
        autoCloseTime = 8000
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
                onCloseSuccess()  // Cerrar la alerta
            }
        }, 100)  // Actualización cada 100ms para mayor fluidez

        // Limpiar el temporizador cuando el componente se desmonte
        return () => clearInterval(timer)
    }, [autoCloseTime, onCloseSuccess])

    return (
        <div className="p-4">
            <Alert className="border-2 border-green-500 bg-white shadow-sm">
                <div className="absolute top-0 left-0 h-1 bg-green-500 transition-all duration-100"
                    style={{ width: `${progress}%` }} />
                <div className="flex items-center">
                    <CircleCheck className="h-6 w-6 text-green-500" />
                    <div className="ml-3">
                        <AlertTitle className="text-lg font-semibold text-green-500">
                            {tittleSuccess}
                        </AlertTitle>
                        <AlertDescription className="text-gray-600">
                            {mensajeSuccess}
                        </AlertDescription>
                    </div>
                </div>
                <button
                    onClick={onCloseSuccess}
                    className="absolute top-2 right-2 text-green-500 hover:text-green-700"
                >
                    <X className="h-5 w-5" />
                </button>
            </Alert>
        </div>
    )
}
