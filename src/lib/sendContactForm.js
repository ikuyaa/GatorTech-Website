import backend from "./backend";
import { createItems, withToken } from "@directus/sdk";

export default async function sendContactForm(data) {
    backend.request(
        withToken(process.env.BACKEND_TOKEN,
            createItems('ContactMessages', {
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                subject: data.subject,
                message: data.message
            })
        )
    )
}