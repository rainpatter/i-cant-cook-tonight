import axios from "axios";

export async function login(userData) {
  let res = await axios.post("/login", userData);
  return res.data;
}

export async function signup(userData) {
  let res = await axios.post("/signup", userData);
  return res.data;
}
