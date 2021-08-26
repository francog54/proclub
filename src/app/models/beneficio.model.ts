export interface Rubro {
    id: number;
    nombre: string;
}

export interface Beneficio {
    id: number;
    nombre: string;
    descripcion: string;
    telefono: string;
    web: string;
    instagram: string;
    correo: string;
    pathImage?: any;
    activo: number;
    rubroId: number;
    rubro: Rubro;
}