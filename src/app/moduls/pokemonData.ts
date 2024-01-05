export type PokemonData ={
  name:string
  id: number
  sprites:{
    front__default: string
  }
  types:{
    slot:number,
    type:{
      name:string,
      url:string
    }
  }[]
}
