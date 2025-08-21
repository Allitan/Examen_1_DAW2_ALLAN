'use client'
import React from 'react'
import Link from 'next/link';
import { useGastoContext } from '../Providers/ProviderGasto';

export default function BarraNavegacion() {
    const {isLogged, logout} = useGastoContext()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Mis Gastos</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {isLogged && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/presupuesto">Presupuesto</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/gastos">Gastos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/resumen">Resumen</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    {isLogged && (
                        <button onClick={logout} className="btn btn-sm btn-outline-danger">Cerrar Sesión</button>
                    )}
                </div>
            </div>
        </nav>
    )
}
