import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import Characters from './components/characters/Characters'
import CharacterDetails from './components/characters/CharacterDetails'
import HomeScreen from './components/screens/HomeScreen';
import Episodes from './components/episodes/Episodes'
import ScrollTop from './components/ui/ScrollTop'
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Toolbar from '@material-ui/core/Toolbar';


function App(props) {
  return (
    <Router>

      <Header  />
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <div className="main">
          <Route path='/' component={HomeScreen} exact />
          <Route path='/characters' component={Characters} />
          <Route path='/character/:id' component={CharacterDetails} />
          <Route path='/episodes' component={Episodes} />
        </div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </Container>
      <Footer />
    </Router>
  );
}



export default App;
