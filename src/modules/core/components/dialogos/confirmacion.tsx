import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
interface DialogConfirmacionProps {
    isOpenConfirm: boolean
    onCloseConfirm: () => void
    tittleConfirm?: string
    description?: string
    onSubmitConfirm: () => void
    cancelLabel?: string
    aceppLabel?: string
}

export default function DialogConfirmacion(Props: DialogConfirmacionProps) {
    const {
        isOpenConfirm,
        onCloseConfirm,
        tittleConfirm = "Confirmar Evaluación",
        description = "Está seguro de realizar la evaluación. Concuerda que los datos registrados son coherentes",
        onSubmitConfirm,
        cancelLabel = "Cancelar",
        aceppLabel = "Continuar",
    } = Props

    return (
        <AlertDialog open={isOpenConfirm}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {tittleConfirm}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild >
                        <Button type="button" onClick={onCloseConfirm} variant="secondary"
                            className="border-2 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500">
                            {cancelLabel}
                        </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onSubmitConfirm}>
                        {aceppLabel}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}