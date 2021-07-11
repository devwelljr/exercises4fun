import React from 'react';

function Adicao() {
  return(
    <div id="adiçao">
      <button class="bot" id="apaga-tudo"><b>Limpar Lista</b></button>
      <button id="remover-finalizados" class="bot">
        <b>Limpar Completos</b>
      </button>
      <button class="bot" id="salvar-tarefas"><b>Salvar Lista</b></button>
    </div>
  );
}

export default Adicao;
