'use client'
import React from 'react'
import { useGastoContext } from '../Providers/ProviderGasto'


export default function MensajeAlerta() {
    const { alertaPresupuesto } = useGastoContext()

    if(alertaPresupuesto === 'ninguna'){
        return null;
    }

    const mensaje = alertaPresupuesto === 'amarilla' ? 'has alcanzado el 80% del presupuesto': 'has superado el limite del presupuesto, debes ajustar gastos'

    const claseAlerta = alertaPresupuesto === 'amarilla' ? 'alert alert-warning' : 'alert alert-danger'

  return (
    <div className={claseAlerta} role='alert'>
        {mensaje}
    </div>
  )
}
