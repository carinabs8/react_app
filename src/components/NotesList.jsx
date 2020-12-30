import React, { Component } from 'react';
import NoteCard from "./NoteCard";

class NotesList extends Component {
	render(){
		return (
			<ul>
        { this.props.notas.map((nota, index )=> {
          return(
            <li key={index} >
              <NoteCard nota={nota} deleteNote={this.props.deleteNote} index={index}/>
            </li>
          )
        })}
      </ul>
		);
	}
}

export default NotesList;