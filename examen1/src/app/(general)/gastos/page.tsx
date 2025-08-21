'use client'
import React from 'react'
import FormularioGastos from '@/app/Componentes/FormularioGastos'
import ListaGastos from '@/app/Componentes/ListaGastos'
import { useGastoContext } from '@/app/Providers/ProviderGasto'

export default function page() {
    const { presupuesto } = useGastoContext()
    if(presupuesto===null){
        return(
            <div className='alert alert-info'>'
                POr favor, establece un presupuesto primero
            </div>
        )
    }
  return (
    <div>
        <h4 className='mb-4'>Registro de Gastos</h4>
        <div className='row'>
            <div className='col-md-4'>
                <FormularioGastos/>
            </div>
            <div className='col-md-8'>
                <ListaGastos/>
            </div>

        </div>
    </div>
  )
}
