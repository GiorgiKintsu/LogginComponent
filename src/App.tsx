import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Authorization from './comonents/authorization/Authorization'
import Header from './comonents/header/Header'
import ProtectedPages from './pages/ProtectedPages'
import HomePage from './pages/HomePage'



function App() {
  

  return (
    <div className='authorizationWrapper'>
      <Header />
      <Routes>
        <Route element={<ProtectedPages />}>
          <Route path='/homepage' element={<HomePage />}/> 
          <Route path='/*' element={<Navigate replace to='/404' />} />
        </Route>
        <Route path='/autorization' element={<Authorization />} />
      </Routes>
    </div>
  )
}

export default App
