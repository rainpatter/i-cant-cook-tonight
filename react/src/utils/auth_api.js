import axios from 'axios'

export async function login(userData) {

    console.log(userData)
    let res = await axios.post(
        '/login',
        userData
        
    )
    
    return res.data

}