import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, Error, Register, Dashboard } from './pages';




function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
