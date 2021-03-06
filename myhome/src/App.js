import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomeComponent from './components/HomeComponent';
import MemberDetailsComponent from './components/MemberDetailsComponent';

function App() {
  return (
    <>
      <div className="App">
        <Route path="/" exact component={HomeComponent} />
        <Route path="/MemberDetailsComponent" exact component={MemberDetailsComponent} />
      </div>
    </BrowserRouter>
  );
}

export default App;
