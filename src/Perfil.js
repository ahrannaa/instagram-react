import React from "react"


export default function Perfil() {

  const [nome, setNome] = React.useState("Astrólogo")
  const [foto, setFoto] = React.useState("img/cancer.png") 

function inserirNome() {
  const nomePrompt = prompt("Qual o nome para usuário?")
  setNome(nomePrompt)
}

function inserirFoto(){
    const fotoPrompt = prompt("Qual o link da foto de Perfil?")
    setFoto(fotoPrompt)
}

  return(
    <div class="perfil">
            <div class="foto-do-perfil">
              <img onClick={inserirFoto} src={foto} alt="cancer-sidebar"/>
            </div>

            <div class="user-info">
              <div class="nick">
                <h1>{nome}</h1>
              </div>
              <div class="username">
                <p>{nome === ""||nome === null ? "Usuário" : nome }</p>
                <button onClick={inserirNome}><ion-icon name="pencil"></ion-icon></button>
                
              </div>
            </div>
          </div>
  )
}