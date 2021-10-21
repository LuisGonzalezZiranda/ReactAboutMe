import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/compoente1';
import Musica from './components/music';
import CustomizedProgressBars from './components/proximamente';
import RecipeReviewCard from './components/lugares';
import Hobitts from './components/hobbits';

function App() {
  return (
    <div className="App">
      <Title />
      <header className="App-header">
        <RecipeReviewCard />
        <Hobitts />
        <Musica />
        <CustomizedProgressBars />
      </header>
    </div>
  );
}

export default App;
