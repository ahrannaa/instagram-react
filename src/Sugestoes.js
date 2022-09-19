 function Seguir(props){
  return(
    <div class="sugestao">
               <div class="sugestao-img">
                 <img src={props.imagem} alt={props.nome} />
               </div>
 
               <div class="sugestao-info">
                 <div class="sugestao-nick">{props.nome}</div>
                 <div class="sugestao-username">segue você</div>
               </div>
 
               <div class="seguir-link">Seguir</div>
             </div>
 
  )
 }

export default function Sugestoes(){

  const Sugestao = [
    {nome: "astrolouco", imagem:"img/leao.png"},
    {nome: "bigastral", imagem:"img/libra.png"},
    {nome: "goodsignos", imagem:"img/sagitario.png"},
    {nome: "signos2022", imagem:"img/peixes.png"},
    {nome: "curtesignos", imagem:"img/touro.png"},
  ]

  return (
    <div class="sugestoes">
            <div class="sugestoes-header">
              <div class="sugestao-titulo">
                <p>Sugestões para você</p>
              </div>
              <div class="ver-tudo">
                <p>Ver tudo</p>
              </div>
            </div>
              {Sugestao.map((s) => <Seguir nome={s.nome} imagem={s.imagem}/>)}
            </div>
  )
}