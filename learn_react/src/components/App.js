import React from "react"
import SignUp from "./SignUp";
import {Container} from "react-bootstrap";

function App() {
  return (
      //Container permet d'encadrer l'afficage
      // Définir une taille max de 400 pixels pour le Sign up
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{minHeight: "100vh"}}
      >
        <div className={'w-100'} style={{ maxWidth: "400px" }}>
          <SignUp/>
        </div>
      </Container>
  )
}

export default App;
