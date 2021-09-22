import './ordersList.css';

export const OrdersList = () => {

    const estadoPedido = "";
    const numeroPedido = 1234;

    function actualizarEstadoPedido() {
        alert("Cambio estado")
    }

    return (
        <>            
            <div id="header">
                <span className="logo"></span> 
            </div>
            <div id="body">
                <form>
                    <div className="pedido-card">
                        <h2> PEDIDO Nº {numeroPedido} </h2> 
                        <ul>
                            <li>Realizado por:</li>
                            <li>Fecha pedido:</li>
                            <li>Fecha entrega:</li>
                            <li>Estado pedido: <span> {estadoPedido} </span></li>  
                        </ul>
                        <input type="radio" name="estadoPedido" value="0" onChange={() => actualizarEstadoPedido()} /> 
                        <span className="textPending-info">En curso </span>
                        <input type="radio"  name="estadoPedido" value="2"  onChange={() => actualizarEstadoPedido()}/> 
                        <span className="textPending-info">Listo </span> 
                        <input type="radio"  name="estadoPedido" value="3"  onChange={() => actualizarEstadoPedido()}/> 
                        <span className="textComplete-info">Entregado </span>
                        <input type="radio"  name="estadoPedido" value="1"  onChange={() => actualizarEstadoPedido()}/> 
                        <span className="textCancelled-info">Cancelado </span>
                    </div>
                </form>
            </div>
        </> 
    )
}