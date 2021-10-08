
//importamos el nombre de la Data
import {Arrayheroes} from '../Heroes/DataHeroes'

export const getHeroesId = (idData) => {

    return Arrayheroes.find(devolver => devolver.id === idData)
} 