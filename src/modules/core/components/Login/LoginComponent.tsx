import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginIProps {
    goTo: string;
    resetPassword: string;
}

export const LoginComponent = ({goTo = '/', resetPassword = '/'} : LoginIProps) => {
    return (
        <div className="flex h-screen w-full">
            <div className="flex w-[65%] relative bg-muted">
                <Image
                    src="/images/img-Login.webp"
                    alt="Image"
                    layout="fill"
                    objectFit="cover"
                    className="dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <div className="flex flex-col w-[35%] items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="flex w-full items-center justify-center">
                        <Image
                            src="/images/logoGrel.webp"
                            alt="logo"
                            width={220}
                            height={300}
                        />
                    </div>
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-3xl font-bold">Iniciar sesión</h1>
                        <p className="text-balance text-muted-foreground">
                            Ingrese sus credenciales por favor
                        </p>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 px-16">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Usuario</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Ingrese su usuario"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Ingrese su contraseña"
                            required
                        />
                        <br />
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm">¿Olvidaste tu contraseña?</p>
                        <Link
                            href={resetPassword}
                            className="ml-auto inline-block text-sm underline text-green-800"
                        >
                            Recuperar Contraseña
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <Link href={goTo} className="underline text-green-800">
                        Volver a inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};
