import "./App.css";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h1>Hey</h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
