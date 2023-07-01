import { CLOSE_HOUR, IS_OPEN, OPEN_HOUR } from "./config";
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
  //console.log(pizzaData);
  //const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        //React fragment
        <>
          <p>
            Authentic Italian cuisine. {numPizzas} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza, i) => {
              //console.log(i);
              return <Pizza pizzaObj={pizza} key={i} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        imgUrl="pizzas/focaccia.jpg"
        price={10}
      />
      */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //console.log(pizzaObj);
  //if (pizzaObj.soldOut) return null; //Don't display this pizza if soldOut is true

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.imgUrl} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price + "€"} </span>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {IS_OPEN ? (
        <Order />
      ) : (
        <p>
          We're happy to welcome you between {OPEN_HOUR}:00 and {CLOSE_HOUR}:00.
        </p>
      )}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>
        We're open from {OPEN_HOUR}:00 to {CLOSE_HOUR}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
