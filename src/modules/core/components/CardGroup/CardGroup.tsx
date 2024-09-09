import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Users } from "lucide-react"
import Circleprogress from "./component/circleprogress"
import Link from "next/dist/client/link"
import { Button } from "@/components/ui/button"

interface ICardGroupProps {
    title: string,
    description: string,
    labelRef: string,
    progress: number,
    states: boolean,
    href?: string
}


export function CardGroup({title = 'Title', description = 'Description', labelRef='Default', progress = 0, states=true, href} : ICardGroupProps) {
    return (
        <Card className="max-w-[350px]">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="border-2 rounded-md p-3 shadow-lg">
                            <Users />
                        </div>
                        <div className="flex items-center justify-center border-2 rounded-md px-2 py-1 ">
                            <h1 className="text-sm">{states ? 'En curso' : 'Terminado'}</h1>
                        </div>
                    </div>
                    <div className="flex">
                        <Circleprogress value={progress} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle><p className="line-clamp-1 mb-2">{title}</p></CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button asChild>
                    <Link
                        href={href || '#'}
                    >
                        {labelRef}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
