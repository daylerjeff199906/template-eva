import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

interface DialogImportacionProps {
    isOpenImport: boolean
    onCloseImport: () => void
    tittleImport?: string
    descriptionImport?: string
    onSubmitImport: () => void
    cancelLabelImport?: string
    aceppLabelImport?: string
}

export default function DialogImportacion(Props: DialogImportacionProps) {
    const {
        isOpenImport,
        onCloseImport,
        tittleImport = "Desea importar los datos",
        descriptionImport = "Está seguro de realizar la acción de importación de los datos seleccionados",
        onSubmitImport,
        cancelLabelImport = "Cancelar",
        aceppLabelImport = "Continuar",
    } = Props

    return (
        <AlertDialog open={isOpenImport}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {tittleImport}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {descriptionImport}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild >
                        <Button type="button" 
                        onClick={onCloseImport} 
                        variant="secondary" 
                        className="border-2 border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500"
                        >
                            {cancelLabelImport}
                        </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onSubmitImport}>
                        {aceppLabelImport}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}