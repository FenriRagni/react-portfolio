import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import '../src/App.css'

function App() {

  return (
    <div className='container-fluid vh-100'>
      <Header />
      <main className='row'>
        <Outlet />
      </main>
    </div>
  )
}

export default App;
