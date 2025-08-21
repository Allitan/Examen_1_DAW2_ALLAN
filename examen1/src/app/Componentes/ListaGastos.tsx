'use client'
import React from 'react'
import { useGastoContext } from '../Providers/ProviderGasto'

export default function ListaGastos() {
    const {gastos, eliminarGasto} = useGastoContext()
    
  return (
    <div className='table-responsive'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Monto</th>
                    <th>Categoria</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {gastos.map((gasto,index) => (
                    <tr key={gasto.idgasto || index}>
                        <td>{gasto.monto}</td>

                        <td>{gasto.categoria}</td>
                        <td>{gasto.fecha}</td>
                        <td><button className='btn btn-sm btn-danger' onClick={() => eliminarGasto(gasto.idgasto!)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
