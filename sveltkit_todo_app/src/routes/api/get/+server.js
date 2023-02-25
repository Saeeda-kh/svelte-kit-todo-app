export const GET = ()=>{
    return new Response(JSON.stringify({myData: "My data"}),{status: 202})
}