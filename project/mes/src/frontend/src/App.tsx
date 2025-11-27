import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Admin from "./sub/Admin";

const App = () => {
return (
<>
<BrowserRouter>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/admin" element={<Admin/>}/>
</Routes>
</BrowserRouter>
</>
  );
};

export default App;