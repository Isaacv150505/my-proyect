import HeaderComponent from "../components/HeaderComponent"
import "./styles/HomePage.css"

function HomePage() {
  const saySomething = () => {
    console.log("Mensaje enviado");
    alert("¡Gracias por visitarnos!");
  }

  return (
    <>
      <HeaderComponent />
      <div className="home-container">
        <h1 className="home-title">Bienvenido a Nuestra Plataforma</h1>
        <p className="home-description">
          Descubre un espacio diseñado para compartir ideas y opiniones. 
          Nuestra misión es crear una comunidad donde cada voz sea escuchada.
        </p>
        
        <button className="home-button" onClick={saySomething}>
          Haz clic para un mensaje especial
        </button>

        <div className="home-features">
          <div className="feature-card">
            <h3 className="feature-title">Comunidad</h3>
            <p className="feature-description">
              Únete a una comunidad diversa que valora el intercambio 
              de ideas y el respeto mutuo.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Simplicidad</h3>
            <p className="feature-description">
              Interfaz intuitiva y fácil de usar para que puedas 
              concentrarte en lo que realmente importa.
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="feature-title">Participación</h3>
            <p className="feature-description">
              Tu opinión cuenta. Comparte tus pensamientos y 
              lee lo que otros tienen para decir.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage