import Counter from './Counter';
import Tracker from './Tracker';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Tracker />
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
