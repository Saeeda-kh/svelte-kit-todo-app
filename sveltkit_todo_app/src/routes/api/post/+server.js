export const POST = async({request})=>{

    const myData = await request.json() 
    return new Response(JSON.stringify({myData: myData}),{status: 200})
}