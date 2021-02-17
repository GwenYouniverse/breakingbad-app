import Characters from './components/characters/Characters'
import './App.css'
import Container from '@material-ui/core/Container';
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'


function App() {
  return (
    <div>
      <Header />
      <Container>
        <div className="main">
          <Characters />
        </div>
      </Container>
      <Footer />
    </div>
  );
}



export default App;
