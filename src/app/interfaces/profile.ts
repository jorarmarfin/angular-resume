export interface Profile {
    nombre_completo?: string;
    resena?: string;
    category?: Category[];
    social?: Social[];
  }
  
export interface Social {
    url?: string;
    icon?: string;
  }
  
export interface Category {
    nombre?: string;
  }

export interface Me {
  descripcion?: string;
  edad?: number;
  residencia?: string;
  direccion?: string;
}