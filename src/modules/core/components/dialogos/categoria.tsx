import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface DialogCategoriaProps {
    isOpenCategory: boolean
    onCloseCategory: () => void
    tittleCategory?: string
    descriptionCategory?: string
    onSubmitCategory: () => void
    labelnameCategory?: string
    labelCheckboxCategory?: string
    cancelLabelCategory?: string
    aceppLabelCategory?: string
}

export default function DialogCategoria(Props: DialogCategoriaProps) {
    const {
        isOpenCategory,
        onCloseCategory,
        tittleCategory = "Agregar Categoria",
        descriptionCategory = "Registre el nombre y el estado (opcional) de la categoria. Se guardará en estado desactivado por defecto.",
        onSubmitCategory,
        labelnameCategory = "Nombre de la categoria",
        labelCheckboxCategory = "Estado Activo",
        cancelLabelCategory = "Cancelar",
        aceppLabelCategory = "Guardar Cambios",
    } = Props

    return (
        <Dialog open={isOpenCategory}>
            <DialogContent className="sm:max-w-[520px]">
                <DialogHeader>
                    <DialogTitle>
                        {tittleCategory}
                    </DialogTitle>
                    <DialogDescription>
                        {descriptionCategory}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center ">
                        <Label htmlFor="name" className="text-left">
                            {labelnameCategory}
                        </Label>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-5">
                        <Input id="namecategory" className="col-span-3" />
                    </div>
                    <div className="flex items-center">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="px-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {labelCheckboxCategory}
                        </label>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" onClick={onCloseCategory} variant="secondary"
                            className="border-2 border-red-500 text-red-500 hover:bg-red-50">
                            {cancelLabelCategory}
                        </Button>
                    </DialogClose>
                    <Button type="submit" onClick={onSubmitCategory}>
                        {aceppLabelCategory}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
