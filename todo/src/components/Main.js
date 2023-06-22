import React, { Component } from 'react';

//form
import {FaPlus} from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
    state = {
        novaTarefa: '',
    };

    inputMudou = (e) => {
        this.setState({
            novaTarefa: e.target.value,
        });
    }

    render () {
        const{ novaTarefa } = this.state;

        return(
            <div className='main'>
                <h1>Lista de tarefas</h1>
                
                <form action='#' className='form' >
                    <input onChange={this.handleChange} type="text" />
                    <button type='submit'>
                        <FaPlus />
                    </button>
                </form>
            </div>
        ) 
    } 
}