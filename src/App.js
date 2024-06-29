import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from 'store';
import { Provider } from 'react-redux';
import Error404 from 'containers/errors/Error404'
import Home from 'containers/pages/Home';
import Plots from 'containers/pages/Plots';
import Questions from 'containers/pages/Questions';
import Stations from 'containers/pages/Stations';
import Students from 'containers/pages/Students';

function App() {
  return (
    <Provider store={store} >
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
