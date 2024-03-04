import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#000000]'>
      <Header />
      <div className="w-11/12 mx-auto">
        <MainComponent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
