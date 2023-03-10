import React from 'react'
import Parent from './Parent';


function App() {
  return (<>
  
    <div className='App'>
      <div className='people'>
      <Parent profession="Моушен-дизайн"  name="Alex Brut" age="35" >
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptatem veritatis voluptas? Tempore laudantium veniam quisquam aut nulla reprehenderit, quis recusandae blanditiis fuga, sapiente exercitationem, fugiat nam. Accusamus.</span>
      
      </Parent>
      </div>
        <div className='people'>
       <Parent profession="Киборспортсмен"  name="Jordon Gan" age="20" >
      <span>Vero voluptatem veritatis voluptas? Tempore laudantium veniam quisquam aut nulla reprehenderit, quis recusandae blanditiis fuga, sapiente exercitationem, fugiat nam. Accusamus, illum ad.</span>
      
      </Parent>
      </div>  
       <div className='people'>
      <Parent profession="Предприниматель"   name="Joh Noe" age="27" >
       <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore laudantium veniam quisquam aut nulla reprehenderit, quis recusandae blanditiis fuga, sapiente exercitationem, fugiat nam. </span>
       
      </Parent>
      </div>  
      
    </div>
    </>
  );
}

export default App;
