import "./App.css";
import { Container } from "./Container";

function App() {
  return (
    <>
      <Container title={"Click button to Open!!"}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Info</li>
        </ul>
      </Container>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
