import { useState } from 'react'
import * as AuthApi from '../../utils/auth_api'

export default function Login({onLogin, setUserId}) {

    const [ formData, setFormData ] = useState( { userInfo: '', password: ''})

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            let [ token, user ] = await AuthApi.login(formData)
            localStorage.setItem('token', token)
            setUserId(user.id)
        


        onLogin(formData)    
        } catch(err) {
            console.log(err.status)
            alert('invalid email or password')
        }
    }

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    return(
        <>
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="">Email or username</label>
            <input type="text" name="userInfo" onChange={handleChange}/>
            <label htmlFor="">Password</label>
            <input type="password" name="password" onChange={handleChange}/>
            <button>submit</button>
        </form></>
    )
}