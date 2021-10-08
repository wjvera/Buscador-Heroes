import React from 'react'
import { ListaHeroes } from '../Heroes/ListaHeroes'

export default function DcScreen() {
    return (
        <div>
            <h1>Dc Screen</h1>

            <hr />

            <ListaHeroes  publisher="DC Comics" />
        </div>
    )
}
