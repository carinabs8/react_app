import React, { Component } from 'react';
import "./style.css"

class NoteCard extends Component {
	render(){
		return(
			<section className="note-card">
        <header>
          <h3>{this.props.nota.titulo}</h3>
        </header>
        <p>{this.props.nota.descricao}</p>
      </section>
		);
	}
}

export default NoteCard;