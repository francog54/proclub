export interface Espacios {
    id: number;
    nombre: string;
    descripcion: string;
    maxReservasDia: number;
    maxReservasSem: number;
    maxReservasAno: number;
    horasPrevia: string;
    tiempoDeAnticipacion: string;
    tiempoDeCancelacion: string;
    activo: number;
    clubId: number;
    estadoespacioId: number;
}