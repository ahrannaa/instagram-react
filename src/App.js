import Topo from "./Topo"
import Stories from "./Stories"
import Feed from "./Feed"
import Perfil from "./Perfil"
import Sugestoes from "./Sugestoes"
import Info from "./Info"


export default function App() {
  return (
    <div>
       
       <Topo/>
      
      <div class="container">
        <div class="box-right">
          <Stories/>
          <Feed/>
       </div>
        
        <div class="sidebar">
          <Perfil/>
          <Sugestoes/>
          <Info/>
        </div>
      
      </div>
    
    </div>
  );
}
