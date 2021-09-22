import "./restaurantCard.css";

export const RestaurantCard = (props) => {
    const {
        name,
        phone,
        onlineEnabled,
        id
    } = props.restaurant;

    return (
        <div className="restaurante-card loading">
            <div className="carrusel-card"> Introducir carrusel imágenes </div>
            <form>
                <div className="info-pedido-card">
                    <div className="info-menu-card"> 
                        <p> MENÚ </p> 
                        <label>Primeros</label>
                        <input type="radio" name="menuPrimeros" value="0" checked/> <span> Primero 1</span> 
                        <input type="radio" name="menuPrimeros" value="1"/> Primero 2 
                        <label>Segundos</label>
                        <input type="radio" name="menuSegundos" value="0" checked/> Primero 1 
                        <input type="radio" name="menuSegundos" value="1"/> Primero 2 
                        <span className="info-precio-span">PRECIO</span>
                    </div>
                    <div className="info-restaurante-card">
                        <p> {name} </p> 
                        <span>Teléfono {phone}</span> 
                        {onlineEnabled && <button className="pedido-button">Pedir</button>}
                    </div>
                </div>
            </form>
        </div>
    )
}