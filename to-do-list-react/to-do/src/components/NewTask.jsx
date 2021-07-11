import React from 'react';

class NewTask extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [], 
    }
  }

  adicionarTarefa() {
    const caixaTexto = document.querySelector('#texto-tarefa');
    const lista = document.getElementById('lista-tarefas');
    const criarLi = document.createElement('li');
    criarLi.textContent = caixaTexto.value;
    criarLi.className = 'tasks';
    lista.appendChild(criarLi);
  
    // this.setState((preState) => ({ tasks: [...preState.tasks, caixaTexto.value] }));
  
    caixaTexto.value = '';
  }

  render() {
    return (
      <div id='newTask'>
        <input
          id='texto-tarefa'
          type='text'
          placeholder='Digite sua nova tarefa'
        />
        <button id='criar-tarefa' onClick={ this.adicionarTarefa }>
          <b>Adicionar</b>
        </button>
      </div>
    );
  }
}

export default NewTask;
