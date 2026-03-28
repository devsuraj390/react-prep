import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ComponentPage from '../pages/ComponentPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/component/:name" element={<ComponentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
