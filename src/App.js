import Counter from './Counter';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
