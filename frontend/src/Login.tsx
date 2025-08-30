import { useState } from "react";
import { useAuth } from "./AuthContext";
export default function Login() {
  const { login } = useAuth();
  const [username,setUsername]=useState(""); const [password,setPassword]=useState(""); const [err,setErr]=useState("");
  const onSubmit = async (e:React.FormEvent)=>{ e.preventDefault(); setErr(""); const ok=await login(username.trim(),password); if(!ok) setErr("Invalid username or password"); };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold text-green-700 mb-4">🚜 FarmRent Login</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
          <input className="w-full border rounded px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          {err && <div className="text-red-600 text-sm">{err}</div>}
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg">Sign in</button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          <p className="font-semibold mb-1">Demo users:</p>
          <ul className="list-disc ml-5 space-y-1">
            <li>farmer_mahesh / Mahesh@123</li>
            <li>farmer_ravi / Ravi@123</li>
            <li>farmer_sita / Sita@123</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
