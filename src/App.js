import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Characters from './components/characters/Characters'
import CharacterDetails from './components/characters/CharacterDetails'
import HomeScreen from './components/screens/HomeScreen';
import Episodes from './components/episodes/Episodes'

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <div className="main">
          <Route path='/' component={HomeScreen} exact />
          <Route path='/characters' component={Characters} />
          <Route path='/character/:id' component={CharacterDetails} />
          <Route path='/episodes' component={Episodes} />
        </div>
      </Container>
      <Footer />
    </Router>
  );
}



export default App;
