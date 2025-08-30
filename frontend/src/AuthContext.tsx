import { createContext, useContext, useEffect, useState } from "react";
import { User, login as doLogin, logout as doLogout, getCurrentUser } from "./auth";
type Ctx = { user: User|null; login: (u:string,p:string)=>Promise<boolean>; logout: ()=>void; };
const AuthContext = createContext<Ctx>({ user: null, login: async()=>false, logout: ()=>{} });
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(()=>{ setUser(getCurrentUser()); },[]);
  const login = async (u:string,p:string)=>{ const res = doLogin(u,p); setUser(res); return !!res; };
  const logout = ()=>{ doLogout(); setUser(null); };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
export function useAuth(){ return useContext(AuthContext); }
