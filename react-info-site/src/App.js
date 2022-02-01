import Footer from "./components/Footer";
import Main from "./components/Main";
import './App.scss';

function App() {
  return (
    <div>
      {/* This is how you use a component that you imported */}
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;