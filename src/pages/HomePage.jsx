import HeaderComponent from "../components/HeaderComponent"

function HomePage() {
  const saySomething = ()=> {
    console.log("Di algo");
    alert("Ahora");
  }
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div>HomePage</div>
      <hr />
      <button onClick={saySomething}>Pulsa aqui</button>
    </>
    
  )
}

export default HomePage