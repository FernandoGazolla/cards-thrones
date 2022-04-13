export default function Card(props) {

    return (
        <div className="col">
            <div className="card shadow-sm">
                <img src="https://thronesapi.com/assets/images/daenerys.jpg" className="bd-placeholder-img card-img-top" width="100%" />
                <div className="card-body">
                    <div className="card-text">
                        <p>Nome:	Daenerys</p>
                        <p>Sobrenome:	Targaryen</p>
                        <p>Nome Completo:	Daenerys Targaryen</p>
                        <p>Titulo:	Mother of Dragons </p>
                        <p>Familia:	House Targaryen</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}