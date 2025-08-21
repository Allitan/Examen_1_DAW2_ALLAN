'use client'
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGastoContext } from "./Providers/ProviderGasto";

export default function Home() {
  const [usuario, setUsuario]=useState('')
  const [clave, setClave] = useState('')
  const {login} = useGastoContext()
  const router = useRouter()

  const hLogin = () =>{
    if(usuario==='admin' && clave==='admin123'){
      login()
      router.push('/presupuesto')
    }else{
      alert('usuario o la clave incorrecta')
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-4 shadow-sm">
        <h5 className="text-center mb-4">Mis Gastos / Inicio de Sesion</h5>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Usuario" value={usuario} onChange={(e) =>setUsuario(e.target.value)}/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Clave" value={clave} onChange={(e) =>setClave(e.target.value)}/>
          </div>
          <button onClick={hLogin} className="btn btn-primary w-100">Iniciar Sesion</button>
      </div>

    </div>
  );
}
