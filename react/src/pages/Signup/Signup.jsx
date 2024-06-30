import { useState } from "react";
import "./Signup.css";
import * as AuthApi from "../../utils/auth_api";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function handleSubmit(evt) {
    evt.preventDefault()
    try {
      let res = await AuthApi.signup(formData);
      console.log(res.message);
      alert(res.message)
    } catch (err) {
      console.log(err.status);
      alert("account could not be created");
    }
  }
  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <form className="login-form signup-form" action="" onSubmit={handleSubmit}>
      <p>
        <label htmlFor="">username</label>

        <input onChange={handleChange} type="text" name="username" />
      </p>
      <p>
        <label htmlFor="">email</label>

        <input onChange={handleChange} type="email" name="email" />
      </p>
      <p>
        <label htmlFor="">password</label>
        <input onChange={handleChange} type="password" name="password" />
      </p>
      <button>submit</button>
    </form>
  );
}
