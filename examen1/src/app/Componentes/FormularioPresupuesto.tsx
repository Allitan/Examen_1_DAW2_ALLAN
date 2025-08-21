'use client'
import React, { useState } from 'react'
import { useGastoContext } from '../Providers/ProviderGasto'

export default function FormularioPresupuesto() {
    const {guardarPresupuesto} = useGastoContext()
    const [monto, setMonto] = useState<number | string> ('')

    const hGuardarPresupuesto = ()=> {
        if(monto=='' || isNaN(Number(monto))){
            alert('ingresa un monto valido')
            return
        }
        guardarPresupuesto(Number(monto));
        alert('presupuesto guardado')
        setMonto('')
    }
  return (
    <div className='input-group mb-3'>
        <input type='number' className='form-control' placeholder='monto de presupuesto mensual' value={monto} onChange={(e) => setMonto(e.target.value)}></input>
        <button onClick={hGuardarPresupuesto} className='btn btn-primary' type='button'>GuardaPresupuesto</button>
    </div>
  )
}
