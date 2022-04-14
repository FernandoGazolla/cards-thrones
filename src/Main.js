import axios from 'axios'
import { useState } from 'react';

import Card from './Card';

export default function Main() {

    const [personagem, setPersonagem] = useState([])

    async function carregar()
    {

        let retorno = await axios.get("https://thronesapi.com/api/v2/Characters");

        setPersonagem(retorno.data)
    }
    
    let cards = personagem.map(function(item, index)
    {
        return <Card valor={item} key={index} />
    })

    async function quatroCartas()
    {

        let numeros = [];

        for (var index = 0; index < 4; index++)
        {
            let num = Math.round( Math.random() * 53 );
            let retorno = await axios.get("https://thronesapi.com/api/v2/Characters/" + num);
            numeros.push(retorno.data);
        }

        setPersonagem(numeros)
    }

    return (
        <main>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <p>
                            <button onClick={ carregar } className="btn btn-primary my-2">Carregar Totdos</button>
                            <button onClick={ quatroCartas } className="btn btn-secondary my-2">Carregar 4</button>
                        </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        
                        { cards }
                        
                    </div>
                </div>
            </div>

        </main>
    )
}