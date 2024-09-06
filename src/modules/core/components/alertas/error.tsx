import { useEffect, useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CircleX, X } from "lucide-react"

interface AlertaErrorProps {
  tittleError?: string
  mensajeError?: string
  tipoAlert: string
  onCloseError: () => void
  autoCloseTime?: number
}
export default function AlertaError(Props: AlertaErrorProps) {
  const {
    tittleError = "¡Error! tienes un mensaje de error",
    mensajeError = " Tienes errores por corregir, verifica que todo esté adecuadamente antes que termine el plazo.",
    tipoAlert = "Error Alert",
    onCloseError,
    autoCloseTime = 9000
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
        onCloseError()  // Cerrar la alerta
      }
    }, 100)  // Actualización cada 100ms para mayor fluidez

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearInterval(timer)
  }, [autoCloseTime, onCloseError])

  return (
    <div className="p-4">
      <Alert className="border-2 border-red-500 bg-white shadow-sm" >
        <div className="absolute top-0 left-0 h-1 bg-red-500 transition-all duration-100"
          style={{ width: `${progress}%` }} />
        <div className="flex items-center">
          <CircleX className="text-red-500" />
          <div className="ml-3">
            <AlertTitle className="text-lg font-semibold text-red-500">
              {tittleError}
            </AlertTitle>
            <AlertDescription className="text-gray-600">
              {mensajeError}
            </AlertDescription>
          </div>
        </div>
        <button onClick={onCloseError}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          <X className="h-5 w-5" />
        </button>
      </Alert>
    </div>
  )
}
