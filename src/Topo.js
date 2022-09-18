export default function Topo(){
  return(
    <div class="topo">
        <div class="topo-container">
          <div class="icone">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div class="instagram">
            <img src="img/logo.png" alt="logo" />
          </div>
          <div>
            <input
              type="search"
              class="pesquisar"
              placeholder="Pesquisar"
            ></input>
          </div>

          <div class="simbolos">
            <div class="paper-plane">
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>

            <div class="compass">
              <ion-icon name="compass-outline"></ion-icon>
            </div>

            <div class="coracao">
              <ion-icon name="heart-outline"></ion-icon>
            </div>

            <div class="person">
              <ion-icon name="person-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
  )
}