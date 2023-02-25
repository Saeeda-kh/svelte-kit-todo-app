import { redirect } from "@sveltejs/kit"


export async function handle({event, resolve}) {

    event.locals.myData = "my data"

    console.log(event)
    if(event.url.origin !== 'http://localhost:5173') throw redirect(303, 'https://google.com')
    const response = await resolve(event)
    return response
} 