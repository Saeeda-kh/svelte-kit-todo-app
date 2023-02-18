let object = []

/** @type {import('./$types').Actions} */
export const actions = {
default : async({request})=> {
    // login: async ({cookies, request})=>{
        const data = await request.formData();
        const userName = data.get('user');
        const password = data.get('password')
        object = [...object,{name: userName, password: password}]
        console.log(object)     
        return { success: true , object: object };
    }
}
