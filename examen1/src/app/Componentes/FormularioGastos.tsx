'use client'
import React, { useState } from 'react'
import { Gasto } from '../Modelos/Gastos'
import { useGastoContext } from '../Providers/ProviderGasto'


export default function FormularioGastos() {
    const { guardarGastos } = useGastoContext()

    const [categoria, setCategoria] = useState('')
    const [monto, setMonto] = useState<number| string>('')
    const [descripcion, setDescripcio] = useState('')
    const [fecha, setFecha] = useState('');

    const hguardarGasto =(e: React.FormEvent) =>{
        e.preventDefault()

        if(!categoria || !monto || !fecha){
            alert('por favor llena todos los campos')
            return
        }

        const nuevoGasto: Gasto={
            categoria,
            monto: parseFloat(monto as string),
            descripcion,
            fecha
        }

        guardarGastos(nuevoGasto)

        setCategoria('')
        setMonto('');
        setDescripcio('')
        setFecha('')
    }   
  return (
    <form onSubmit={hguardarGasto}>
        <div className='mb-3'>
            <input type='text' className='form-control' placeholder='Categoria' value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <input type='number' className='form-control' placeholder='Monto' value={monto} onChange={(e) => setMonto(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <input type='text' className='form-control' placeholder='Descripcion' value={descripcion} onChange={(e) => setDescripcio(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <input type='date' className='form-control' placeholder='Fecha' value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>
        <button type='submit' className='btn btn-primary'>Guardar Gastos</button>
    </form>
  )
}
