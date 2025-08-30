import { useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";
type Equipment={id:number;name:string;available:boolean};
type Worker={id:number;name:string;skill:string;available:boolean};
type Booking={id:number;kind:"equipment"|"worker";itemId:number;itemName:string;startDate:string;endDate:string;farmerUsername:string;status:"active"|"canceled"};
export default function Bookings(){
  const { user } = useAuth();
  const [equipments,setEquipments]=useState<Equipment[]>([]);
  const [workers,setWorkers]=useState<Worker[]>([]);
  const [bookings,setBookings]=useState<Booking[]>([]);
  const [kind,setKind]=useState<"equipment"|"worker">("equipment");
  const [itemId,setItemId]=useState<number|"" >("");
  const [startDate,setStartDate]=useState(""); const [endDate,setEndDate]=useState("");
  const myBookings = useMemo(()=>bookings.filter(b=>b.farmerUsername===user?.username),[bookings,user]);
  const loadAll=async()=>{
    const [eq,wk,bk]=await Promise.all([
      fetch("http://localhost:5000/equipments").then(r=>r.json()),
      fetch("http://localhost:5000/workers").then(r=>r.json()),
      fetch("http://localhost:5000/bookings").then(r=>r.json())
    ]);
    setEquipments(eq); setWorkers(wk); setBookings(bk);
  };
  useEffect(()=>{ loadAll(); },[]);
  const create=async()=>{
    if(!itemId||!startDate||!endDate||!user) return;
    const res=await fetch("http://localhost:5000/bookings",{method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({kind,itemId,startDate,endDate,farmerUsername:user.username})});
    const data:Booking=await res.json(); setBookings([...bookings,data]); setItemId(""); setStartDate(""); setEndDate(""); loadAll();
  };
  const cancelB=async(id:number)=>{
    const res=await fetch(`http://localhost:5000/bookings/${id}/cancel`,{method:"PATCH"});
    const upd:Booking=await res.json(); setBookings(bookings.map(b=>b.id===id?upd:b)); loadAll();
  };
  const items=(kind==="equipment"?equipments:workers).filter(i=>i.available);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📅 Bookings</h2>
      <div className="flex gap-2 mb-4">
        <select className="border rounded px-3 py-2" value={kind} onChange={e=>setKind(e.target.value as any)}>
          <option value="equipment">Equipment</option>
          <option value="worker">Worker</option>
        </select>
        <select className="border rounded px-3 py-2" value={itemId} onChange={e=>setItemId(Number(e.target.value))}>
          <option value="">Select item</option>
          {items.map((i:any)=>(
            <option key={i.id} value={i.id}>{kind==="equipment"?i.name:`${i.name} (${i.skill})`}</option>
          ))}
        </select>
        <input type="date" className="border rounded px-3 py-2" value={startDate} onChange={e=>setStartDate(e.target.value)} />
        <input type="date" className="border rounded px-3 py-2" value={endDate} onChange={e=>setEndDate(e.target.value)} />
        <button onClick={create} className="bg-green-600 text-white px-4 py-2 rounded-lg">Book</button>
      </div>
      <h3 className="font-semibold mb-2">My Bookings</h3>
      <ul className="space-y-2">
        {myBookings.map(b=>(
          <li key={b.id} className="p-2 border rounded flex justify-between items-center">
            <span>#{b.id} – {b.kind} – {b.itemName} – {b.startDate} → {b.endDate} – {b.status}</span>
            {b.status==="active" && <button onClick={()=>cancelB(b.id)} className="px-3 py-1 rounded bg-red-500 text-white">Cancel</button>}
          </li>
        ))}
      </ul>
    </div>
  );
}
