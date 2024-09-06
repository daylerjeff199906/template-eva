"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"

const frameworks = [
    {
        value: "Opcion 1",
        label: "Opcion 1",
    },
    {
        value: "Opcion 2",
        label: "Opcion 2",
    },
    {
        value: "Opcion 3",
        label: "Opcion 3",
    },
    {
        value: "Opcion 4",
        label: "Opcion 4",
    },
]

interface DialogNivelProps {
    isOpenNivel: boolean
    onCloseNivel: () => void
    tittleNivel?: string
    descriptionNivel?: string
    onSubmitNivel: () => void
    cancelLabelNivel?: string
    aceppLabelNivel?: string
    labelnameNivel?: string
    labelmodalidadNivel?: string
    labelCheckboxNivel?: string
}

export default function DialogCategoria(Props: DialogNivelProps) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    const {
        isOpenNivel,
        onCloseNivel,
        tittleNivel = "Agregar Nivel",
        descriptionNivel = "Registre el nombre, la modalidad y el estado (opcional) del nivel. Se guardará en estado desactivado por defecto.",
        onSubmitNivel,
        cancelLabelNivel = "Cancelar",
        aceppLabelNivel = "Guardar Cambios",
        labelnameNivel = "Nombre del Nivel",
        labelmodalidadNivel = "Modalidad del Nivel",
        labelCheckboxNivel = "Estado Activo",
    } = Props
    return (
        <>
            <Dialog open={isOpenNivel}>
                <DialogContent className="sm:max-w-[520px]">
                    <DialogHeader>
                        <DialogTitle>
                            {tittleNivel}
                        </DialogTitle>
                        <DialogDescription>
                            {descriptionNivel}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center">
                            <Label htmlFor="name" className="text-left">
                                {labelnameNivel}
                            </Label>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-5">
                            <Input id="namecategory" className="col-span-3" />
                        </div>
                        <div className="grid items-center">
                            <Label htmlFor="name" className="text-left">
                                {labelmodalidadNivel}
                            </Label>
                        </div>

                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="justify-between">
                                    {value
                                        ? frameworks.find((framework) => framework.value === value)?.label
                                        : "Seleccionar una modalidad..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[200px] p-0">
                                <Command>
                                    <CommandInput placeholder="Seleccionar una modalidad..." />
                                    <CommandList>
                                        <CommandEmpty>Modalidad no encontrada.</CommandEmpty>
                                        <CommandGroup>
                                            {frameworks.map((framework) => (
                                                <CommandItem
                                                    key={framework.value}
                                                    value={framework.value}
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                    }}
                                                >
                                                    <Check
                                                        className={cn(
                                                            "mr-2 h-4 w-4",
                                                            value === framework.value ? "opacity-100" : "opacity-0"
                                                        )} />
                                                    {framework.label}
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="px-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {labelCheckboxNivel}
                            </label>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button onClick={onCloseNivel}
                            type="button" 
                            variant="secondary"
                                className="border-2 border-red-500 text-red-500 hover:bg-red-50">
                                {cancelLabelNivel}
                            </Button>
                        </DialogClose>
                        <Button type="submit" onClick={onSubmitNivel}>
                            {aceppLabelNivel}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
