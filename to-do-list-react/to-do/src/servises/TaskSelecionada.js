function taskSelecionada(event) {
  if (event.target.className === 'tasks') {
    if (document.querySelector('#corSelecionada') !== null) {
      document.querySelector('#corSelecionada').removeAttribute('id');
    }
    event.target.id = 'corSelecionada';
  }
}

export default taskSelecionada;
