import { createContext } from "react";
import { Gasto } from "../Modelos/Gastos";

export interface GastoContextType{
    gastos: Gasto[]
    presupuesto: number | null;
    alertaPresupuesto: 'ninguna' | 'amarilla' | 'roja';
    isLogged: boolean
    login: () => void
    logout: () => void
    guardarPresupuesto: (monto:number) => void;
    guardarGastos: (gasto: Gasto) => Promise<void>
    cargarGastos: () => Promise<void>;
    calcularAlerta: () => void;
    eliminarGasto: (idgasto: number) => Promise<void>;
}
export const GastoContext = createContext<GastoContextType>({
    gastos:[],
    presupuesto: null,
    alertaPresupuesto: 'ninguna',
    isLogged: false,
    login: () =>{},
    logout: ()=>{},
    guardarPresupuesto: () => {},
    guardarGastos: async () =>{},
    cargarGastos: async ()=> {},
    calcularAlerta: () => {},
    eliminarGasto: async () => {}


})