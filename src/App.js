import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
