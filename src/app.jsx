import ItemListContainer from "./components/itemListContainer/itemListContainer";

import "./app.css";
// Componente
function App() {
  let misEstilos = { backgroundColor: "lightblue" };

  return (
    <div className="main" style={misEstilos}>
      <ItemListContainer greeting="Bienvenidos a nuestra plataforma de cursos" />
    </div>
  );
}

export default App;