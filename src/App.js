import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import BookNowPage from './pages/book-now/book-now.components.jsx'
import CardList from './components/service-cardlist/service-cardlist.componet';


const Furnishing = () =>(
  <div><h1>Furnishing</h1></div>
);

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/services' component={HomePage} />
      <Route path='/furnishing' component={Furnishing} />
      <Route path='/booknow' component={BookNowPage} />
      <Route path='/' component={CardList} />
    </Switch>
    </div>
  );
}

export default App;
