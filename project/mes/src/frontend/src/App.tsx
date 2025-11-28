import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Admin from "./sub/Admin";
import Member from './sub/Member';
import Forgot from './sub/Forgot';
import Reset from './sub/Reset';

const App = () => {
return (
<>
<BrowserRouter>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/admin" element={<Admin/>}/>
<Route path="/member" element={<Member/>}/>
<Route path="/forgot" element={<Forgot/>}/>
<Route path="/reset" element={<Reset/>}/>
</Routes>
</BrowserRouter>
</>
  );
};

export default App;