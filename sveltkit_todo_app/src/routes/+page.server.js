
export async function load({fetch, locals}) {

    console.log(locals)
    return {
        data:locals
    }
} 