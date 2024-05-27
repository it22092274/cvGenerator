import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import CV from './components/themes/CV';
import CV_theme_one from './components/themes/CV_theme_one';
import CV_theme_two from './components/themes/themeboy2';
import Resume from './components/themes/Resume';
import Theme1 from './components/themes/Theme1';
import FormComponent from './components/Form';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/cv4" element={<Theme1 />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/cv2" element={<CV_theme_one />} />
        <Route path="/cv3" element={<CV_theme_two />} />
        <Route path="/form" element={<FormComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
