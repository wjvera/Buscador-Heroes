
//importamos el nombre de la Data
import {Arrayheroes} from '../Heroes/DataHeroes'

export const getHeroesPublisher = (Recibirpublisher) => {
    
    const publisherValido = ['DC Comics', 'Marvel Comics']

    if(!publisherValido.includes(Recibirpublisher)){
        throw new Error(`El publisher -> ${Recibirpublisher} <- no es valido`)
    }

    return Arrayheroes.filter(devolver => devolver.publisher === Recibirpublisher)
}
