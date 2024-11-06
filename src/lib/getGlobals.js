import backend from './backend'
import { readItems, withToken } from '@directus/sdk'

export default async function getGlobals() {
    const request = backend.request(withToken(process.env.BACKEND_TOKEN, readItems('Globals', {
        fields: ['status']
    })));
    
    const globals = await request;

    return globals;
}