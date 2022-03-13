import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import { MarkList } from './components/MarksList/index';
// import { NameForm } from './components/NameForm/NameForm';
// import { SupportForm } from './components/SupportForm/SupportForm';
// import { Menu } from './components/Menu';

import {renderRoutes} from 'react-router-config';
import {routes} from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {renderRoutes(routes)}
      {/* <Menu/>
        <Routes>
          <Route exact path='/' element={<MarkList />}/>
          <Route exact path='/name' element={<NameForm />}/>
          <Route exact path='/support' element={<SupportForm />}/>
        </Routes> */}
      </header>
    </div>
  );
}

export default App;
