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
  direccionPersonaId?: any;
  tipoDocumentId: number;
}

export interface Usuario {
  id: number;
  idFirebase: string;
  ultimoIngreso: string;
  activo: number;
  personaId: number;
  persona: Persona;
}

export interface Espacio {
  id: number;
  nombre: string;
  descripcion: string;
  maxReservasDia: number;
  maxReservasSem: number;
  maxReservasAno: number;
  horasPrevia: string;
  image: string;
  tiempoDeAnticipacion: string;
  tiempoDeCancelacion: string;
  activo: number;
  clubId: number;
  estadoespacioId: number;
}

export interface Turno {
  id: number;
  fecha: string;
  horaDesde: string;
  horaHasta: string;
  precio: number;
  cupo: number;
  activo: number;
  estadoturnoId: number;
  espacioId: number;
  espacio: Espacio;
}

export interface Reserva {
  id: number;
  fecha: string;
  activo: number;
  qr?: any;
  turnoId: number;
  usuarioId: number;
  estadoreservaId: number;
  turno: Turno;
}

export interface Ingresos {
  id: number;
  fecha: string;
  reservaId: number;
  usuarioId: number;
  usuario: Usuario;
  reserva: Reserva;
}

export interface PostIngreso {
  id: number;
  fecha: string;
  reservaId: number;
  usuarioId: number;
}
