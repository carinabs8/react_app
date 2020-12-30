import React, { Component } from 'react';
import NotesList  from "./components/NotesList";
import SignUpForm from "./components/SignUpForm";

class App extends Component {
	constructor() {
		super();
		this.state = {
			notas: []
		}
	}

	createNote(titulo, descricao){
		const novaNota = {titulo, descricao};
		const novoArrayDeNotas = [...this.state.notas, novaNota];
		const novoEstado = {
			notas: novoArrayDeNotas
		}
		
		this.setState(novoEstado);
	}

  render(){
    return (
      <section>
        <SignUpForm createNote={this.createNote.bind(this)}/>
        <NotesList notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
