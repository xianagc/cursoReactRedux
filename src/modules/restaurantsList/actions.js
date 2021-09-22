import { Config } from "../../config/Config";

export const MENUS_REQUEST = 'MENUS_REQUEST';
export const MENUS_RESPONSE = 'MENUS_RESPONSE';

export const getMenus = (start, count) => {
    return dispatch => {
        dispatch({
          type: MENUS_REQUEST
        });

        /** Enviaremos dos parámetros en la función fetch, url y request.
         * Indicar a Redux que estamos cargando */ 
        return fetch(Config.backendBaseUrl + '/menus')
            .then(response  => response.json()).then(menus => {
            dispatch({
                type: MENUS_RESPONSE,
                menus
            });
        });
    }
};