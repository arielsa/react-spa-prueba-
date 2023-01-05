import React from "react";

export default class Menu extends React.Component{

    render(){
        return(
            <div calssName="row" >
                <div className="col-12 d-flex align-items-center">
                    
                    <h1>Artio</h1>
                    <span className="mx-3" >inicio</span>
                    <span className="mx-3" >artista</span>
                    <span className="mx-3" >contacto</span>
                </div>
            </div>
        )
    }
} 