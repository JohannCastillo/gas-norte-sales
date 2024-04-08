export type Cliente = {
    id: number
    email: string
    phone: string
}

export type ClienteNatural = Cliente & {
    name: string
    dni: string
}

export type ClienteLegal = Cliente & {
    business_name: string
    ruc: string
}