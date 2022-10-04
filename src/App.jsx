// import { ToastContainer } from 'react-toastify';
import { Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { connectWallet } from './providers/Providers';
// import {} from './utils/Utils';
// import {} from './networks/Networks';
// import {} from './callbacks/Callbacks';
import { Home } from './components/';


function App() {
  return (
    <Container>
    <Routes>
      <Route path="/" element={<Home />}></Route>

    </Routes>
    </Container>
  );
}

export default App;
