import React from 'react';
import "./estilo1.css";

export default class Nombre extends React.Component{
  render(){
    return(
      <div class = "Cuadrado" >

        <div class="grid1">
          <div class="foto">
         <img src="https://i.ibb.co/3d8ZSzv/fh.jpg" alt="fh" border="0" width="100%" height="100%"/>
          </div>

          <div>
            <h1 class = "Centrar">Fernando Hengstenberg</h1>
            <h6 class = "Centrar1">Desarrollador Web</h6>
            <h6 class = "Centrar1">Contacto:hen17699@uvg.edu.gt</h6>
          </div>


        </div>



        
        
      </div>
    )

  }
}