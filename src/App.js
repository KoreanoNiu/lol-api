import './App.scss';
import './uikit';

import Search from './components/Search/Search';

function App() {
  return (
    <div className="uk-section">
      <div className="uk-container uk-margin-remove-top uk-container-large">
        <h1>League Of Stats!</h1>
        <hr/>
        <Search></Search>
      </div>
    </div>
  );
}

export default App;
