import './App.css';
import Header from './components/header';
import SearchCar from './components/search/searchCar';
import SearchResult from './components/search/searchResult';

function App() {
  return (
    <div className="">
      <Header/>
      <SearchCar/>
      <SearchResult/>
    </div>
  );
}

export default App;
