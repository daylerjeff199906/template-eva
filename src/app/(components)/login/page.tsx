import { LoginComponent } from "@/modules/core/components"

export default function Page() {
    return (
        <div>
            <LoginComponent 
            goTo="/dashboard"
            resetPassword="/reset-password"
            />
        </div>
    )
}