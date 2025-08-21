'use client'
import BarraNavegacion from "../Componentes/BarraNavegacion";
import ProviderGasto from "../Providers/ProviderGasto";
import { useGastoContext } from "../Providers/ProviderGasto";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({
 children
}: {
 children: React.ReactNode;
}) {
  const { isLogged} = useGastoContext()
  const router = useRouter()

  useEffect(() => {
    if(!isLogged){
      router.push('/')
    }
  }, [isLogged, router])
  return (
      <>
        <BarraNavegacion/>
        <main className="container mt-4">
          {isLogged?children:null}
        </main>
      </>  
  );
}    