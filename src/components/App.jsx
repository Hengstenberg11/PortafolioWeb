import React from 'react';
import Proyecto from  'components/ProyectoWeb/proyecto';
import Nombre from  'components/ProyectoWeb/Nombre'; 
import Grid from 'components/ProyectoWeb/Grid';

export default function App() {
  
  return (
    <div>
      <div>
        <Nombre/>
      </div>

      <div>
        <Grid/>
      </div>
      <div>
        <Proyecto/>
      </div>
    
    </div>
  );
}


