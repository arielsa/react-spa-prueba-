import React from "react";
import './Artista.css';

export default class Artista extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col-12 d-flex align-items-center pt-2">
                    <img  src={this.props.img} alt={this.props.nombre} className="band-thumb"/>
                    <div className="px-2">
                        <h2>{this.props.nombre}</h2>
                        <p> {this.props.descripcion}</p>
                    </div>
                    

                </div>

            </div>

        )
    }
}