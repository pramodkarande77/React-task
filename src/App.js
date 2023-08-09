
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './task2A/Main';
import MainForm from './task2B/MainForm';
import MainFile from './task3/MainFile';
import ChartMain from './task4/ChartMain';
import Navbar from './Navbar';



function App() {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          {/* <Route path='task2' element={<MainForm />} /> */}
          <Route path='task3' element={<MainFile />} />
          <Route path='task4' element={<ChartMain />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
