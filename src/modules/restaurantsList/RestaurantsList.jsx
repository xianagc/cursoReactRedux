import React, { useEffect, useMemo, useState } from 'react';
/** Se importa el elemento que se exporta */
import { getMenus } from "./actions";
import { RestaurantCard } from './components/restaurantsCard/RestaurantCard';
/** Se importa el elemento por defecto */
import  Header  from '../../components/header/Header';
import { connect } from "react-redux";
import './restaurantsList.css';

const RestaurantsList = (props) => {

    const {
        loadMenus
    } = props;
    
    /** useState declara una variable de estado. 
     * El único argumento para el Hook useState() es el estado inicial. 
     * Devuelve una pareja de valores: el estado actual y una función que lo actualiza,
     * por eso escribimos const [count, setCount] = useState()
    */
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    const [menus, setMenus] = useState([]); 
    const [count, setCount] = useState([]);

    /** REACT
     * Efecto que se utilizará cada vez 
     * que se renderice nuestro componente. */
     useEffect(() => {
        loadMenus(0, 5).then();
    });

    /** REACT
     * Efecto que se utilizará cada vez 
     * que se renderice nuestro componente reload.
     * Cambiará cuando se le pase el valor "reload".
     * Al iniciar se indica "reload" false para que no se 
     * ejecute el evento */
     useEffect(() => {
        if(reload){
            setMenus([]);
            getMenus(0, 5);
        }   
    }, [reload]); 

    /** 
     * Items "memo"
     */
    const Items = React.memo(() => <>
        {menus.map(menuItem => 
            <RestaurantCard restaurant = {menuItem} key={menuItem.id} />
        )}
    </>, [menus]);

    return (
        <> 
            <Header />
            <div>
                {count}
                <button onClick={() => setCount(count + 1)}> Añadir </button>
            </div>
            <div className="restaurante"> 
                {loading && <div className="loading"> Cargando </div>}
                {!loading && <Items />}
            </div>
        </>      
    );
};

/**
 * Se enlaza el componente con redux  
 */
export default connect(
    store => ({
        menus: store.restaurantsList.menus, //Indiciar de donde se muestra
        loading: store.restaurantsList.loading
        
    }),
    dispatch => ({
        loadMenus: (start, count) => dispatch(getMenus(start, count)),
    })
)(RestaurantsList);
