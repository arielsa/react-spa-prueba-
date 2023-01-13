import React from "react";
import './Artista.css';


 


export default class Artista extends React.Component{
    constructor(props){
        super(props);
        this.state={
            escondido:false
        }

        this.toggleEsconder=this.toggleEsconder.bind(this);
    }

    toggleEsconder(){
        this.setState( prevState => ( {
            escondido: !prevState.escondido
        } ))
    }





    render(){
        return(
            <div className="row">
                
                <div className="col-12 d-flex align-items-center pt-2">
                    <img  src={this.props.img} alt={this.props.nombre} className={(this.state.escondido? "d-none":"band-thumb")}/>
                    <div className="px-2">
                        <h2 className={ (this.state.escondido? "d-none":"") }>{this.props.nombre}</h2>
                        <p  className={ (this.state.escondido? "d-none":"") }> {this.props.descripcion}</p>
                        <button type="button" onClick={this.toggleEsconder} class="btn btn-primary btn1" >{ (this.state.escondido? "abrir":"cerrar")+" "+(this.state.escondido? this.props.nombre:"") } </button>                            
                    </div>
                </div>
                
                

            </div>

        )
    }
}