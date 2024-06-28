import { useState } from "react";
import * as AuthApi from "../../utils/auth_api";
import './Login.css'

export default function Login({ onLogin, setUserId }) {
  const [formData, setFormData] = useState({ userInfo: "", password: "" });

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      let [token, user] = await AuthApi.login(formData);
      localStorage.setItem("token", token);
      setUserId(user.id);

      onLogin(formData);
    } catch (err) {
      console.log(err.status);
      alert("invalid email or password");
    }
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit} action="">
          <label htmlFor="">username</label>
          <input type="text" name="userInfo" onChange={handleChange} />
        <label htmlFor="">password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button>submit</button>
      </form>
    </>
  );
}
