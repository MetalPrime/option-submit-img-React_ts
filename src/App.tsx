import React, { useRef } from 'react';
import './App.css';

 function App() { 
  //ete ref es deldiv de la imagen del perfil
   const ref  = useRef<HTMLImageElement>(null);
  
  //cuando se hace el submit pasa esto
  // esto deberia pasar dentro del visualizador
  const handleSubmit = (event: any) => {
    console.log(event.target.files[0]);
    const reader = new FileReader();
    console.log(reader);
    reader.onload = (((e: ProgressEvent<FileReader>)=>{
      //referencia al objeto img 
      
      if(ref.current?.src){
        if(typeof e.target?.result! === 'string'){
          //aqui es donde sucede la asignación del src
          ref.current.src = e.target?.result!;
          console.log(e.target?.result);
        } else {
          console.log("Porfavor adjunte una imagen válida")
        }

      }else {
        console.log("La referencia es nula");
      }
     
      
    }) as any)
    reader.readAsDataURL(event.target.files[0]);
    
  }

  return (
    <div>
      
      <input multiple accept=".jpg,.png,.webp,.jfif" type="file" name="img" id="img-profile" onChange={handleSubmit} />
      <button>Submit</button>
      
      <img src="" alt="" ref={ref}/>
    
    </div>
  ); 


  // initiazalite el dato : let, (var) or const -- tipo de dato -- valor inicial

  

 } 


export default App;
