'use client'
import React from 'react'
import CardResumen from '@/app/Componentes/CardResumen'
import MensajeAlerta from '@/app/Componentes/MensajeAlerta'

export default function page() {
  return (
    <div>
        <h4 className='mb-4'>Reumen de gastos personales</h4>
        <MensajeAlerta/>
        <CardResumen/>
    </div>
  )
}
