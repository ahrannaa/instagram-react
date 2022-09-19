  function Storie(props){
    return(
      <div class="story">
       <img src={props.imagem} alt={props.nome} />
       <h2>{props.nome}</h2>
      </div>
    )
  }



export default function Stories(){
   
  const listaStories = [
     { nome:"Áries", imagem:"img/aries.jpeg"},
     { nome:"Peixes", imagem:"img/peixes.png"},
     { nome:"Leão", imagem:"img/leao.png"},
     { nome:"Touro", imagem:"img/touro.png"},
     { nome:"Sagitário", imagem:"img/sagitario.png"},
     { nome:"Virgem", imagem:"img/virgem.png"},
     { nome:"Libra", imagem:"img/libra.png"},
     { nome:"Gêmeos", imagem:"img/gemeos.png"},
     { nome:"Gêmeos", imagem:"img/gemeos.png"},
     { nome:"Gêmeos", imagem:"img/gemeos.png"},
     { nome:"Gêmeos", imagem:"img/gemeos.png"},

   ]
   return(
    <div class="stories-box">
    <div class="stories">
      {listaStories.map((s) => <Storie nome={s.nome} imagem={s.imagem}/>)}
    </div>

    <div class="seta">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  </div>
  )
}