import './home.css';

const ElementoLista = (props) => {
    const {
        numero : number
    } = props;

    return (
        <li>{`Componente #${number}`}</li>
    )
}

export const Home = () => {

    const nombre = "Prueba";
    const value = true;
    const numeros = [1, 2, 3, 4, 5];
    
    return (
        <div className="home">
            {`Hola ${nombre}`}
            {value &&
                <div>Estas logeado</div>
            }
            {!value &&
                <div>NO Estas logeado</div>
            }
            <ul>
                {numeros.map((numero, i) =>
                    <ElementoLista numero={numero} key={i}/>
                )}
            </ul>
        </div>
    );
}
