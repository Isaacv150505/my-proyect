import HeaderComponent from "../components/HeaderComponent"
import "./styles/blogpage.css"

function BlogPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const comentario = formData.get('comentario');
    
    if (!username.trim() || !comentario.trim()) {
      alert("Por favor, completa todos los campos");
      return;
    }
    
    console.log("Formulario enviado:", { username, comentario });
    alert(`¡Gracias por tu comentario, ${username}!`);
    
    e.target.reset();
  }

  return (
    <>
      <HeaderComponent />
      <div className="blog-container">
        <h1 className="blog-title">Tu Opinión Importa</h1>
        <p className="blog-intro">
          Comparte tus pensamientos con nuestra comunidad. Valoramos cada 
          comentario y nos esforzamos por crear un espacio de diálogo respetuoso.
        </p>
        
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="input-group">
              <label htmlFor="username">Nombre:</label>
              <input 
                type="text"
                id="username"
                name="username"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="comentario">Comentario:</label>
              <textarea
                id="comentario"
                name="comentario"
                placeholder="Comparte tu opinión..."
                rows="4"
                required
              ></textarea>
            </div>
            
            <button type="submit">
              Enviar Comentario
            </button>
          </fieldset>
        </form>

        <div className="comments-section">
          <h2 className="comments-title">Comentarios Recientes</h2>
          
          <div className="comment">
            <p className="comment-author">Ana Martínez</p>
            <p className="comment-text">
              Me encanta esta plataforma. Es muy fácil de usar y la comunidad 
              es muy acogedora. ¡Gracias por crear este espacio!
            </p>
          </div>
          
          <div className="comment">
            <p className="comment-author">Carlos Rodríguez</p>
            <p className="comment-text">
              Excelente iniciativa. Sería genial si pudieran añadir más categorías 
              para organizar mejor las discusiones.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage