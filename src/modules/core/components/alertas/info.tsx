import { useEffect, useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Info, X } from "lucide-react"

interface AlertaInfoProps {
    tittleInfo?: string
    mensajeInfo?: string
    tipoAlert: string
    onCloseInfo: () => void
    autoCloseTime?: number
}


export default function AlertaInfo(Props: AlertaInfoProps) {
    const {
        tittleInfo = "¡Info! tienes un mensaje de información",
        mensajeInfo = " Esta información es importante, revisa siempre que tus notas sean las correactas",
        tipoAlert = "Info Alert",
        onCloseInfo,
        autoCloseTime = 11000
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
                onCloseInfo()  // Cerrar la alerta
            }
        }, 100)  // Actualización cada 100ms para mayor fluidez

        // Limpiar el temporizador cuando el componente se desmonte
        return () => clearInterval(timer)
    }, [autoCloseTime, onCloseInfo])

    return (
        <div className="p-4">
            <Alert className="border-2 border-blue-500 bg-white shadow-sm">
                <div className="absolute top-0 left-0 h-1 bg-blue-500 transition-all duration-100"
                    style={{ width: `${progress}%` }} />
                <div className="flex items-center">
                    <Info className="h-6 w-6 text-blue-500" />
                    <div className="ml-3">
                        <AlertTitle className="text-lg font-semibold text-blue-500">
                            {tittleInfo}
                        </AlertTitle>
                        <AlertDescription className="text-gray-600">
                            {mensajeInfo}
                        </AlertDescription>
                    </div>
                </div>
                <button
                    onClick={onCloseInfo}
                    className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                >
                    <X className="h-5 w-5" />
                </button>
            </Alert>
        </div>
    )
}
