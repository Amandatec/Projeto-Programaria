document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if (document.getElemntById("nome").value && o campo de email != "" && document.getElementById("email").value != ""){
    alert("Prontinho! Você receberá as mensagens por email.")
  }else{
    alert("Por favor, preencha os campos nome e email.")
  }
}



