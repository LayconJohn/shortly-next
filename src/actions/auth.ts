'use server'

import { shortlyService } from "@/services/shortly";
import { redirect } from "next/navigation";

export async function registerAction(prevState: any, formData: FormData){
    const body = JSON.stringify({
        name: formData.get('name'),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        email: formData.get("email")
    })

    const response = await shortlyService.register(body);

    if(response.ok) {
        const data = await response.json()
        //TO-DO: Setar um avatar padrão (Somente se tiver cadastrado)
        redirect('/')
    } else {
        const data = await response.json();
        return { error: data.error }
    }
}