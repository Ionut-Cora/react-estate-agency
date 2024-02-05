import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sale from './pages/Sale';
import SaleProperty from './pages/SaleProperty';
import Rent from './pages/Rent';
import RentProperty from './pages/RentProperty';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/saleproperty/:id' element={<SaleProperty />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/rentproperty/:id' element={<RentProperty />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
