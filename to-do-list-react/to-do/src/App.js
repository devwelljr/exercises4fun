import './App.css';
import Header from './components/Header';
import NewTask from './components/NewTask';
import Adicao from './components/Adicao';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NewTask />
      <Adicao />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
