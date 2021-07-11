function CleanComplet() {
  const riscados = document.getElementsByClassName('completed');
  while (riscados.length > 0) riscados[0].remove();
}

export default CleanComplet;
