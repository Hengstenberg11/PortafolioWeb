import React from 'react';
import Proyecto from  'components/ProyectoWeb/proyecto';
import Nombre from  'components/ProyectoWeb/Nombre'; 
import Grid from 'components/ProyectoWeb/Grid';
import Titulo from 'components/ProyectoWeb/Titulo';
import Titulo2 from 'components/ProyectoWeb/Titulo2';
import Redes from 'components/ProyectoWeb/Redes';

export default function App() {
  
  return (
    <div>
      <div>
        <Nombre/>
      </div>

      <div>
        <Titulo/>
      </div>

      <div>
        <Grid/>
      </div>

      <div>
        <Titulo2/>
      </div>

      <div>
        <Redes/>
      </div>

      <div>
        <Proyecto/>
      </div>
    
    </div>
  );
}


