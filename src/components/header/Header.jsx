/**
 * Conecta un componente React con la "store" de redux
 */
import { connect } from "react-redux";
import "./header.css";

const Header = (props) => {

    const {
        userInfo    
    } = props;

    return (
        <div className="header">
            <span className="logo"></span>
            <div className="user">{`${userInfo.name}`} </div>
            <div className="menu">
                <div className="menu-item">
                    <span className="icon"></span>
                    <span className="title">Inicio</span>
                </div>
                <div className="menu-item">
                    <span className="icon"></span>
                    <span className="title">Gestión</span>
                </div>
            </div>
        </div>
    )
}

/**
 * Enlaza con el store. Se exporta por defecto y no el 
 * componente Header, por lo tanto,
 * donde se utilice se debe importar como "import Header from"
 * y como como "import {Header} from".
 * Se recupera del store la variable userInfo.
 */
 export default connect(
    store => ({
        userInfo: store.login.userInfo,
    }),
    null
)(Header);
