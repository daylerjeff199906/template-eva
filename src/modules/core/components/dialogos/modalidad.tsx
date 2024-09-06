import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function DialogCategoria() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Agregar Modalidad</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[520px]">
                <DialogHeader>
                    <DialogTitle>Agregar Modalidad</DialogTitle>
                    <DialogDescription>
                    Registre el nombre y el estado (opcional) de la modalidad. Se guardará en estado desactivado por defecto.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center">
                        <Label htmlFor="name" className="text-left">
                            Nombre de la Modalidad
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
                        Estado Activo
                    </label>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary" className="border-red-500 text-red-500 hover:bg-red-50">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button type="submit">Guardar Cambios</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
