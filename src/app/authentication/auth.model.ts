export interface Login {
  email: string,
  password: string
}

export interface Register {
  name: string,
  email: string,
  password: string,
  role: string
}

export interface User {
  name: string,
  email: string,
  role: Role.Read | Role.ReadWrite 
}

export enum Role {
  Read,
  ReadWrite
}
