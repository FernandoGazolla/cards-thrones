export default function Card(props) {
const personagem = props.valor;


    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src={personagem.imageUrl} className="bd-placeholder-img card-img-top" width="100%" />
                <div className="card-body">
                    <div className="card-text">
                        <p>Nome:	{ personagem.firstName}</p>
                        <p>Sobrenome:	{ personagem.lestName}</p>
                        <p>Nome Completo:	{ personagem.fullName}</p>
                        <p>Titulo:	{ personagem.title} </p>
                        <p>Familia:	{ personagem.family}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}