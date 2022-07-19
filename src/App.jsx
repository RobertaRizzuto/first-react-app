import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />

      {/*   --------------------------------------PROVVISORIO INIZIO------------------------------------------------  */}
      <main className="main-content">
        <p>corpo centrale, spazio da completare</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus optio
          suscipit enim ullam officiis, culpa unde, fuga, autem distinctio
          aliquam dolorum voluptatibus iste rem cupiditate libero? Placeat
          commodi blanditiis possimus sequi quam nisi maxime dolores mollitia
          porro, corporis sit fugit debitis at modi quidem harum delectus eaque
          laudantium explicabo quis?
        </p>
      </main>
      {/*   --------------------------------------PROVVISORIO FINE-------------------------------------------------- */}

      <Footer />
    </div>
  );
};

export default App;
