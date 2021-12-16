import './App.css';
import Home from './home';
import {Route,Switch,Link,BrowserRouter} from 'react-router-dom'
import Atualizar from './telaAtualizar';
import Cadastro from './cadastro';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Link to='/'></Link>
            <Link to='atualizar'></Link>
            <Link to='cadastro'></Link>
            <Switch>
              <Route exact path='/'><Home/></Route>
              <Route path='/atualizar'><Atualizar/></Route>
              <Route path='/cadastro'><Cadastro/></Route>
            </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
