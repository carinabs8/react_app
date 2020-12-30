import React, { Component } from 'react';

class SignUpForm extends Component {
	constructor(props){
		super(props);
		this.titulo = "";
		this.descricao = "";
	}

	_handleChangeTitle(event){
		this.titulo = event.target.value;
	}

	_handleChangeText(event){
		this.descricao = event.target.value;
	}

	_createNote(event){
		event.preventDefault();
		event.stopPropagation();
		this.props.createNote(this.titulo, this.descricao)
	}

	render(){
		return(
			<form onSubmit={this._createNote.bind(this)}>
        <input type="text" placeholder="Título" onChange={this._handleChangeTitle.bind(this)}/>
        <textarea rows = {15} placeholder="Escreva sua nota" onChange={this._handleChangeText.bind(this)}></textarea>
        <button>Criar nota</button>
      </form>
		);
	}
}
export default SignUpForm;