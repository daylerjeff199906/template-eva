import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Users } from "lucide-react"


export function CardGroup() {
    return (
        <Card className="max-w-[350px]">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="border-2 rounded-md p-3 shadow-lg">
                            <Users />
                        </div>
                        <div className="flex items-center justify-center border-2 rounded-md px-2 py-1 ">
                            <h1 className="text-sm">Estado</h1>
                        </div>
                    </div>
                    <div className="flex">
                        <h1>10%</h1>
                        <div className="rounded-full bg-green-500 h-2 w-full">g</div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle><p className="line-clamp-1">Matematica - 5to A </p></CardTitle>
                <CardDescription>Turno: Mañana</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    )
}
