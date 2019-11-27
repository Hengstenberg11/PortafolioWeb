import React from 'react';
import "./grid.css";


export default class Grid extends React.Component{
    render(){
      return(
        <div class="Contenedor">

          <a class = "box" href="http://www.msdeus.site/17699/memoria-con-react/index.html">
          <div>
            <h2 class="texto">Memoria</h2>
          </div>
          </a>

          <a class="box" href="http://www.msdeus.site/17699/onlyCSS/AWP-with-CSS/AWP.html">
          <div>
            <h2 class="texto">AWP</h2>
          </div>
          </a>

          <a href="http://www.msdeus.site/17699/proyecto1/index.html" class="box" >
          <div >
            <h2 class="texto">ClashR</h2>
          </div>
          </a>

          <a class="box" href="http://thereciclator.herokuapp.com/">
          <div>
            <h2 class="texto">Reciclar</h2>
          </div>
          </a>

          <a class="box" href="https://www.facebook.com/fernando.hengstenberg">
          <div>
            <h2 class="texto">Facebook </h2>
          </div>
          </a>

          <a class="box" href="https://www.instagram.com/hengstenberg11/">
          <div>
            <h2 class="texto">Instagram</h2>
          </div>
          </a>

        </div>


      )
  
    }
  }