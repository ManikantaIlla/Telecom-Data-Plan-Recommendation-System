import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [server, setServer] = useState("http://localhost:8080");

  const submit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`${server}/auth/login`, { email, password });
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    window.location.href = `/${data.role}`;
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form className="flex flex-col gap-3" onSubmit={submit}>
        <input className="border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="border p-2 rounded" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <input className="border p-2 rounded" placeholder="API URL" value={server} onChange={e=>setServer(e.target.value)} />
        <button className="btn btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  );
}
