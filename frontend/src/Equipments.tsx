import { useEffect, useState } from "react";
type Equipment = { id:number; name:string; available:boolean };
export default function Equipments(){
  const [equipments,setEquipments]=useState<Equipment[]>([]);
  const [newEquip,setNewEquip]=useState("");
  const load=()=>fetch("http://localhost:5000/equipments").then(r=>r.json()).then(setEquipments);
  useEffect(()=>{ load(); },[]);
  const add=async()=>{ if(!newEquip.trim()) return;
    const res=await fetch("http://localhost:5000/equipments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:newEquip,available:true})});
    await res.json(); setNewEquip(""); load();
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">🛠️ Equipments</h2>
      <div className="flex gap-2 mb-4">
        <input className="flex-1 border rounded px-3 py-2" value={newEquip} onChange={e=>setNewEquip(e.target.value)} placeholder="Enter equipment name" />
        <button onClick={add} className="bg-green-600 text-white px-4 py-2 rounded-lg">Add</button>
      </div>
      <ul className="space-y-2">{equipments.map(eq=>(
        <li key={eq.id} className="p-2 border rounded flex justify-between items-center">
          <span>{eq.name}</span><span>{eq.available ? "✅" : "❌"}</span>
        </li>))}</ul>
    </div>
  );
}
