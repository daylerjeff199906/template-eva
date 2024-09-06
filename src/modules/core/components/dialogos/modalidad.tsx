import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface DialogModalidadProps {
    isOpenMod: boolean
    onCloseMod: () => void
    tittleMod?: string
    descriptionMod?: string
    onSubmitMod: () => void
    cancelLabelMod?: string
    aceppLabelMod?: string
    labelnameMod?: string
    labelCheckboxMod?: string
}

export default function DialogCategoria(Props: DialogModalidadProps) {
    const {
        isOpenMod,
        onCloseMod,
        tittleMod = "Agregar Modalidad",
        descriptionMod = "Registre el nombre y el estado (opcional) de la modalidad. Se guardará en estado desactivado por defecto.",
        onSubmitMod,
        cancelLabelMod = "Cancelar",
        aceppLabelMod = "Guardar Cambios",
        labelnameMod = "Nombre de la Modalidad",
        labelCheckboxMod = "Estado Activo",
    } = Props

    return (
        <Dialog open={isOpenMod}>
            <DialogContent className="sm:max-w-[520px]">
                <DialogHeader>
                    <DialogTitle>
                        {tittleMod}
                    </DialogTitle>
                    <DialogDescription>
                        {descriptionMod}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center">
                        <Label htmlFor="name" className="text-left">
                            {labelnameMod}
                        </Label>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-5">
                        <Input id="namecategory" className="col-span-3" />
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="px-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {labelCheckboxMod}
                    </label>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={onCloseMod}
                            type="button"
                            variant="secondary"
                            className="border-2 border-red-500 text-red-500 hover:bg-red-50">
                            {cancelLabelMod}
                        </Button>
                    </DialogClose>
                    <Button onClick={onSubmitMod}
                        type="submit">
                        {aceppLabelMod}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
