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
                <Button variant="outline">Agregar Categoria</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[520px]">
                <DialogHeader>
                    <DialogTitle>Agregar Categoria</DialogTitle>
                    <DialogDescription>
                        Registre el nombre y el estado (opcional) de la categoria. Se guardará en estado desactivado por defecto.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center ">
                        <Label htmlFor="name" className="text-left">
                            Nombre de la categoria
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
                            Estado Activo
                        </label>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button type="submit"> Guardar Cambios</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
