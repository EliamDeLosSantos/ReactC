//para interface seria: interface Guitar {}
export type Guitar =  {
  id: number
  name: string
  image: string
  description: string
  price: number
}

//Para hacerlo con interfaces
// export interface CartItem extends Guitar {
//     quantity: number
// }

export type CartItem = Guitar & {
    quantity: number
}

//For utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html
//Pick

// export type CartItem = Pick<Guitar, 'id' | 'description'> & {
//     quantity: number
// }

//Lo contrario de pick
// export type CartItem = Omit<Guitar, 'id' | 'description'> & {
//     quantity: number
// }