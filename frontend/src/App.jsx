import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminSignup from './pages/AdminSignup';
import StudentSignup from './pages/StudentSignup';
import StudentLogin from './pages/StudentLogin';
import AdminLogin from './pages/AdminLogin';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/studentsignup' element={<StudentSignup />} />
      <Route path='/adminsignup' element={<AdminSignup />} />
      <Route path='/studentlogin' element={<StudentLogin />} />
      <Route path='/adminlogin' element={<AdminLogin />} />
    </Routes>
  )
}

export default App
