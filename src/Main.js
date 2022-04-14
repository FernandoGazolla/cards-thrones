import Card from './Card';
import axios from 'axios';
import { useState } from 'react';

export default function Main() {

    const [personagem, setPersonagem] = useState([])

   async function carregar (){

        let retorno = await axios.get("https://thronesapi.com/api/v2/Characters");
        console.log("Carregou");
        console.log(retorno.data);
        setPersonagem(retorno.data);

    }

    let cards = personagem.map(function(item, index)
    {
        return <Card valor={item} key={index} />
    })

    function quatrocartas(){

    }
 

    return (
        <main>

            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">

                        <p>
                            <button onClick={ carregar } className="btn btn-primary my-2">Carregar </button>
                            <button onClick={ quatrocartas } className="btn btn-secondary my-2">Carregar 4</button>
                        </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        
                        {cards}
                        
                    </div>
                </div>
            </div>

        </main>
    )
}