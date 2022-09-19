  function Posts(props){
    return(
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
               <ion-icon name="heart-outline"></ion-icon>
               <ion-icon name="chatbubble-outline"></ion-icon>
               <ion-icon name="paper-plane-outline"></ion-icon>
             </div>
             <div class="pic-icons-left">
               <ion-icon name="bookmark-outline"></ion-icon>
             </div>
           </div>
           <div class="likes">
             <img src={props.imagemLike}alt="respondeai" />
             <p>
               Curtido por <span class="keyword">{props.likes}</span> e{" "}
               <span class="keyword">{props.numLikes}</span>
             </p>
           </div>
         </div>
       </div>
    )
  } 



export default function Feed(){

  const Perfil =[
    {nome:"Áries", 
    imagemPerfil:"img/aries.jpeg", 
    imagemFeed:"img/aries feed novo.webp", 
    imagemLike:"img/respondeai 2.png",
    likes:"respondeai",
    numLikes:"101.523 pessoas" },

    {nome:"Peixes", 
    imagemPerfil:"img/peixes.png", 
    imagemFeed:"img/peixes feed.jpg", 
    imagemLike:"img/adorableanimals 2.png",
    likes:"adorables_animals",
    numLikes:"99.159 pessoas" },

    {nome:"Leão", 
    imagemPerfil:"img/leao.png", 
    imagemFeed:"img/feed leao.jpg", 
    imagemLike:"img/respondeai 2.png",
    likes:"respondeai",
    numLikes:"101.523 pessoas" },
 ]



  return (
    <div class="feed">
      {Perfil.map((p) => <Posts nome={p.nome} imagemPerfil={p.imagemPerfil} 
      imagemFeed={p.imagemFeed} imagemLike={p.imagemLike} likes={p.likes} numLikes={p.numLikes}/> )}
          
      </div>
  )
}