'use client'
import React from 'react'
import { useGastoContext } from '../Providers/ProviderGasto'


export default function CardResumen() {
    const { gastos, presupuesto} = useGastoContext();

    const totalGastos = gastos.reduce((total, gasto) => total +gasto.monto, 0)
    const restante = presupuesto !== null? presupuesto - totalGastos: null
  return (
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-title'>Resumen de gastos</h5>
            <p className='card-text'>Presupuesto establecido: LPS.{presupuesto !== null ? presupuesto.toFixed(2): 'N/A'}</p>
            <p className='card-text'>Total gastado: Lps.{totalGastos.toFixed(2)}</p>
            <p className='card-text'>Monto Restante: LPS.{restante !== null ? restante.toFixed(2): 'N/A'}</p>
        </div>
    </div>
  )
}
