import "./App.css";
// The remote component provided by federation_provider
import Header from "mfeAtelierMehdiJabbour/header";

const App = () => {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="content">content</div>
    </div>
  );
};

export default App;
