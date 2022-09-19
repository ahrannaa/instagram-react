import React from "react";

function Posts(props) {
  const [curtidas, setCurtidas] = React.useState(props.numLikes);
  const [curtiu, setCurtiu] = React.useState(false);
  const [iconeCoracao, setIconeCoracao] =  React.useState("heart-outline");

  function inserirCurtidas() {
    let novasCurtidas = curtidas
    let classeCoracao = iconeCoracao
    
    if (curtiu) {
      setCurtiu(false);
      novasCurtidas = novasCurtidas - 1;
      classeCoracao = "heart-outline"
    } else {
      setCurtiu(true);
      novasCurtidas = novasCurtidas + 1;
      classeCoracao = "heart"
    }

    setCurtidas(novasCurtidas);
    setIconeCoracao(classeCoracao);
  }

  const[salvar, setSalvar] = React.useState("bookmark-outline");
  const[favoritou, setFavoritou] = React.useState(false)
  
  let classBookmark = salvar
  
  function salvarPost(){
     if(favoritou){
      setFavoritou(false)
       classBookmark = "bookmark-outline"
     } else{
      setFavoritou(true);
      classBookmark ="bookmark"
     }
    
     setSalvar(classBookmark)
  }

  return (
    <div class="pic-box">
      <div class="pic-header">
        <div class="pic-header-profile">
          <div class="pic-header-profile-img">
            <img src={props.imagemPerfil} alt="aries-feed" />
          </div>
          <h1>{props.nome}</h1>
        </div>
        <div class="pic-header-menu">
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
      </div>
      <div class="pic">
        <img src={props.imagemFeed} alt={props.nome} />
      </div>
      <div class="pic-footer">
        <div class="pic-icons-box">
          <div class="pic-icons-right">
            <button onClick={inserirCurtidas} class={iconeCoracao}>
              <ion-icon name={iconeCoracao}></ion-icon>
            </button>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="pic-icons-left">
           <button onClick={salvarPost}><ion-icon name={salvar}></ion-icon></button>
          </div>
        </div>
        <div class="likes">
          <img src={props.imagemLike} alt="respondeai" />
          <p>
            Curtido por <span class="keyword">{props.likes}</span> e{" "}
            <span class="keyword">{curtidas} pessoas</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Feed() {
  const Perfil = [
    {
      nome: "Áries",
      imagemPerfil: "img/aries.jpeg",
      imagemFeed: "img/aries feed novo.webp",
      imagemLike: "img/respondeai 2.png",
      likes: "respondeai",
      numLikes: 101523,
    },

    {
      nome: "Peixes",
      imagemPerfil: "img/peixes.png",
      imagemFeed: "img/peixes feed.jpg",
      imagemLike: "img/adorableanimals 2.png",
      likes: "adorables_animals",
      numLikes: 99159,
    },

    {
      nome: "Leão",
      imagemPerfil: "img/leao.png",
      imagemFeed: "img/feed leao.jpg",
      imagemLike: "img/respondeai 2.png",
      likes: "respondeai",
      numLikes: 101523,
    },
  ];

  return (
    <div class="feed">
      {Perfil.map((p) => (
        <Posts
          nome={p.nome}
          imagemPerfil={p.imagemPerfil}
          imagemFeed={p.imagemFeed}
          imagemLike={p.imagemLike}
          likes={p.likes}
          numLikes={p.numLikes}
        />
      ))}
    </div>
  );
}
