import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainComponent from './components/MainComponent';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#000000]'>
      <Header />
      <div className="mx-auto">
        <MainComponent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
