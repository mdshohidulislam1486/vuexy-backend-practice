import logo from './logo.svg';
import './App.css';
import { Row } from 'reactstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarMain from './views/main-layout/navbar-main';
import Ecommarce from './views/dashboard/Ecommarce';
import Layout from './views/Layout/Layout';
import Input from './views/form-uploader/input';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Layout />} />
        {/* <Route path="/" element={<NavBarMain />}>
          <Route path="/ecommarce" element={<Ecommarce />} />
          <Route index element={<NavBarMain />} />
        </Route> */}
        <Route path="/" element={<Layout />}>
          <Route path="/ecommarce" element={<Ecommarce />} />
          <Route path="/input" element={<Input />} />
          <Route index element={<NavBarMain />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
