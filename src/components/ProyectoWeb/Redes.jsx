import React from 'react';
import "./grid.css";


export default class Redes extends React.Component{
    render(){
      return(
        <div class="Contenedor">

          <a class="box" href="https://www.facebook.com/fernando.hengstenberg">
          <div>
              <div class="imagen">
              <img class="imagen2" src="https://i.ibb.co/x1DsBn3/facebook.png" alt="facebook" border="0" width="80%" height="80%"/>
              </div>
            <h2 class="texto">Facebook </h2>
          </div>
          </a>

          <a class="box" href="https://www.instagram.com/hengstenberg11/">
          <div>
              <div class="imagen">
             <img class="imagen2" src="https://i.ibb.co/q5Kfw8d/instagram.png" alt="instagram" border="0" width="103%" height="103%"/>
              </div>
            <h2 class="texto">Instagram</h2>
          </div>
          </a>

        </div>


      )
  
    }
  }