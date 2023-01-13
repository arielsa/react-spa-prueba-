import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{

    render(){
        return(
            <div calssName="row" >
                <div className="col-12 d-flex align-items-center bg-light fixed-top">
                    
                    <h1>Artio</h1>
                    <Link to='/' className="mx-3" >inicio</Link>
                    <Link to='/artista' className="mx-3" >artista</Link>
                    <Link to='/contacto' className="mx-3" >contacto</Link>
                </div>
            </div>
        )
    }
} 