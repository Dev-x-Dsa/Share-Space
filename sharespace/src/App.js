import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div className=' text-red-700 bg-green-500'>
      <Header/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
