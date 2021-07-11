import React from 'react';
import taskSelecionada from '../servises/TaskSelecionada';
import TaskCompleta from '../servises/TaskCompleta';

function Content() {
  return (
    <section id='content'>
      <h2>Suas Tarefas:</h2>
      <ol onDoubleClick={ TaskCompleta } onClick={ taskSelecionada } id='lista-tarefas'>
      </ol>
    </section>
  );
}

export default Content;
