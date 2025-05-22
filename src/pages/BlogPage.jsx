import HeaderComponent from "../components/HeaderComponent"

function BlogPage() {
  const handlesubimt = (e) =>{
    console.log("El formulario se ha enviado");
    alert("Gracios por tu comentario");
    e.preventDefault();

  }
  return (
     <><HeaderComponent></HeaderComponent>
     <div>BlogPage</div>
     <h1>Formulario- Tu opinion</h1>
     <form>
       <fieldset>
       <label htmlFor="username" >Nombre:</label>
      <input type="text" id="username" />
       <br /> <br />
       <label htmlFor="comentario">Comentario:</label>
      <input type="text" id="comentario" />
      <button onClick={handlesubimt}>enviar</button>
       </fieldset>
       




     </form>
    
     
     
     
     </>
    
  )
}

export default BlogPage