import { Provider } from 'react-redux';
import './App.css';
import appstore from './utils/appstore';
import Maincomponent from './component/Maincomponent';

function App() {

  return (
    <div className="App">
      <Provider store={appstore}>
        <Maincomponent />
      </Provider>

    </div>
  );
}

export default App;
