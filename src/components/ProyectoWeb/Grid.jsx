import React from 'react';
import "./grid.css";


export default class Grid extends React.Component{
    render(){
      return(
        <div class="Contenedor">
          
          <a class = "box" href="http://www.msdeus.site/17699/memoria-con-react/index.html">
            <div>
              <div class = "imagen">
              <img class="imagen2" src="https://i.ibb.co/5FQCyR0/memoria.png" alt="memoria" border="0" width="31%" height="31%"/>
              </div>

              <h2 class="texto">Memoria</h2>
              <h5 class="subtitulo">-CSS</h5>
              <h5 class="subtitulo">-HTML</h5>            
              <h5 class="subtitulo">-React</h5>

            </div>
          </a>

          <a class="box" href="http://www.msdeus.site/17699/onlyCSS/AWP-with-CSS/AWP.html">
          <div>
              <div class ="imagen">
              <img class="imagen2" src="https://i.ibb.co/dcdB717/AWP.png" alt="AWP" border="0" width="50%" height="50%"/>
              </div>
            <h2 class="texto">AWP</h2>
            <h5 class="subtitulo">-CSS</h5>
            <h5 class="subtitulo">-HTML</h5>
          </div>
          </a>


          <a href="http://www.msdeus.site/17699/proyecto1/index.html" class="box" >
          <div >
            <div class="imagen">
            <img class="imagen2" src="https://i.ibb.co/gzMwdZy/clash.png" alt="clash" border="0" width="53%" height="53%"/>
            </div>
            <h2 class="texto">ClashR</h2>
            <h5 class="subtitulo">-CSS</h5>
            <h5 class="subtitulo">-HTML</h5> 
          </div>
          </a>


          <a class="box" href="http://thereciclator.herokuapp.com/">
          <div>
            <div class="imagen">
              <img class="imagen2" src="https://i.ibb.co/2tsN46R/reciclaje.png" alt="reciclaje" border="0" width="27%" height="27%"/>
            </div>
            <h2 class="texto">Reciclar</h2>
            <h5 class="subtitulo">-VUE</h5>
            <h5 class="subtitulo">-QUASAR</h5>
            <h5 class="subtitulo">-EXPRESS</h5>
          </div>
          </a>

        </div>


      )
  
    }
  }