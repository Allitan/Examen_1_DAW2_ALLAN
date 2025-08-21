'use client'
import React from 'react'
import FormularioPresupuesto from '@/app/Componentes/FormularioPresupuesto'
import MensajeAlerta from '@/app/Componentes/MensajeAlerta'
import { useGastoContext } from '@/app/Providers/ProviderGasto'

export default function page() {
    const { presupuesto } = useGastoContext()
    const presupuestoTexto = presupuesto !== null? `LPS.${presupuesto}`: 'No establecido'
  return (
    <div>
        <div className='card p-3 mb-3 text-center'>
            <h5>Presupuesto Establecido: {presupuestoTexto}</h5>
        </div>
        <MensajeAlerta>
        </MensajeAlerta>
        <h4>Establecer Presupuesto Mensual</h4>
        <FormularioPresupuesto/>
    </div>
  )
}
