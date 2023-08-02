
import coverImage from "../src/assets/cover/cover-image.jpg"
import About from "./components/About"
import Nav from "./components/Nav";
function App() {

  return (
    <div >
      <Nav />
      <About />
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </div>
  );
}

export default App;
