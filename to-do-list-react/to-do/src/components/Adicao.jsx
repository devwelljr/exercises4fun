import React from 'react';
import CleanAll from '../servises/CleanAll';
import CleanComplet from '../servises/CleanComplet'

function Adicao() {
  return(
    <div id="adiçao">
      <button className="bot" id="apaga-tudo" onClick={ CleanAll }><b>Limpar Lista</b></button>
      <button id="remover-finalizados" className="bot" onClick={ CleanComplet }>
        <b>Limpar Completos</b>
      </button>
      <button className="bot" id="salvar-tarefas"><b>Salvar Lista</b></button>
    </div>
  );
}

export default Adicao;
