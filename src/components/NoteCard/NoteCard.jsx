import React, { Component } from 'react';
import "./style.css";
//import deleteSVG from "../../assets/img/delete.svg";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";

class NoteCard extends Component {
	apagar(){
		const index = this.props.index;
		this.props.deleteNote(index);
	}
	render(){
		return(
			<section className="note-card">
        <header>
          <h3>{this.props.nota.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
        </header>
        <p>{this.props.nota.descricao}</p>
      </section>
		);
	}
}

export default NoteCard;