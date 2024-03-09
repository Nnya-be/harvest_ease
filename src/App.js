import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import ChooseUs from "./components/ChooseUs";
function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
         <AboutUs></AboutUs>
         <Mission></Mission>
         <ChooseUs></ChooseUs>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;