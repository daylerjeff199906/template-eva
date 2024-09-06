import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
interface DialogConfirmacionProps {
    isOpen: boolean
    onClose: () => void
    tittle?: string
    description?: string
    onSubmit: () => void
    cancelLabel?: string
    aceppLabel?: string
}

export default function DialogConfirmacion(Props: DialogConfirmacionProps) {
    const {
        isOpen,
        onClose,
        tittle = "Confirmar Evaluación",
        description = "Está seguro de realizar la evaluación. Concuerda que los datos registrados son coherentes",
        onSubmit,
        cancelLabel = "Cancelar",
        aceppLabel = "Continuar",
    } = Props
    return (
        <AlertDialog open={isOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {tittle}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild >
                        <Button onClick={onClose} variant="secondary">
                            {cancelLabel}
                        </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onSubmit}>
                        {aceppLabel}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}