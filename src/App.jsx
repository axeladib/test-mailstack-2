/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthRoute from "./components/AuthRoute";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxwidth: "400px" }}>
          <Routes>
            {/* //TODO : Protected Routes */}
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
            </Route>
            {/* //TODO: Public Route */}
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
