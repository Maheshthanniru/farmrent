import { useEffect, useState } from "react";
type Worker = { id:number; name:string; skill:string; available:boolean };
export default function Workers(){
  const [workers,setWorkers]=useState<Worker[]>([]);
  const [name,setName]=useState(""); const [skill,setSkill]=useState("");
  const load=()=>fetch("http://localhost:5000/workers").then(r=>r.json()).then(setWorkers);
  useEffect(()=>{ load(); },[]);
  const add=async()=>{ if(!name.trim()||!skill.trim()) return;
    const res=await fetch("http://localhost:5000/workers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,skill,available:true})});
    await res.json(); setName(""); setSkill(""); load();
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">👷 Labor Hiring</h2>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 border rounded px-3 py-2" value={name} onChange={e=>setName(e.target.value)} placeholder="Worker name" />
        <input className="flex-1 border rounded px-3 py-2" value={skill} onChange={e=>setSkill(e.target.value)} placeholder="Skill" />
        <button onClick={add} className="bg-green-600 text-white px-4 py-2 rounded-lg">Add Worker</button>
      </div>
      <ul className="space-y-2">{workers.map(w=>(
        <li key={w.id} className="p-2 border rounded flex justify-between items-center">
          <span>{w.name} – {w.skill}</span><span>{w.available ? "✅" : "❌"}</span>
        </li>))}</ul>
    </div>
  );
}
