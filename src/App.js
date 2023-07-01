import { pizzaData } from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  console.log(pizzaData);
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        imgUrl="pizzas/focaccia.jpg"
        price={10}
      />
     
    </main>
  );
}

function Pizza(props) {
  return (
    <div>
      <img src={props.imgUrl} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  const message = isOpen ? "We're currently open" : "Closed";
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. {message}
    </footer>
  );
}

export default App;
