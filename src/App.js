import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import AgroProduct from "./components/AgroProduct";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
         <AboutUs></AboutUs>
         <AgroProduct></AgroProduct>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;