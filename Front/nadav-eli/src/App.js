
import './App.css';
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Buy from './components/Buy';
import Register from './components/Register';
import HomePlaceholder from './components/HomePlaceholder';
import { Flights } from './components/Flights';
import AdminPage from './components/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
    
    <BrowserRouter >
    
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<HomePlaceholder/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='flights' element={<Flights/>}/>
        <Route path='adminpage' element={<AdminPage/>}/>
        <Route path='buy' element={<Buy/>}/>
        
        
      </Route>
    </Routes>
    </BrowserRouter>
  );
  }
export default App;
