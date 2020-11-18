export interface authInterface {
  name: string;
  email: string;
  cargando: boolean;
}

export interface providerInterface {
  name: string;
  email: string;
  saveCredentials: Function;
  cargando: boolean;
}

export interface actionInterface {
  payload: {
    name: string;
    email: string;
  };
  type: string;
}
