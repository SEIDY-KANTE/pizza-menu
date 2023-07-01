function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return <h1 style={style}>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <main>
      <h2>Our menu</h2>
      <Pizza />
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/focaccia.jpg" alt="pizza" />
      <h2>Pizza Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  const message = isOpen ? "We're currently" : "Closed";
  return <footer>{message}</footer>;
}

export default App;
