export interface TipoDocument {
    id: number;
    nombre: string;
}

export interface Country {
    id: number;
    nombre: string;
}

export interface Provincia {
    id: number;
    nombre: string;
    countryId: number;
    country: Country;
}

export interface DireccionPersona {
    id: number;
    calle: string;
    numero: number;
    localidad: string;
    cp?: any;
    provinciaId: number;
    provincia: Provincia;
}

export interface Persona {
    id: number;
    nombre: string;
    apellido: string;
    documento: string;
    sexo: string;
    avatar?: any;
    correo: string;
    telefono: string;
    fechaNacimiento: string;
    direccionPersonaId: number;
    tipoDocumentId: number;
    tipoDocument: TipoDocument;
    direccionPersona: DireccionPersona;
}

export interface Country2 {
    id: number;
    nombre: string;
}

export interface Provincia2 {
    id: number;
    nombre: string;
    countryId: number;
    country: Country2;
}

export interface Direccion {
    id: number;
    calle: string;
    numero: number;
    localidad: string;
    cp?: any;
    provinciaId: number;
    provincia: Provincia2;
}

export interface ClubInfo {
    id: number;
    nombre: string;
    descripcion: string;
    logo?: any;
    colorPrimario: string;
    colorTextoPrimario: string;
    colorSecundario: string;
    colorTextoSecundario: string;
    nombre_visible?: any;
    activo: number;
    email?: any;
    telefono?: any;
    cuit?: any;
    instagram?: any;
    facebook?: any;
    twitter?: any;
    cp?: any;
    direccionId: number;
    personaId: number;
    persona: Persona;
    direccion: Direccion;
}