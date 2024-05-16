import { useEffect } from 'react';

// assets
import MyButton from './components/MyButton'
import { initializeAmplitude } from './services/amplitudeService';

function App() {

  useEffect(() => {
    initializeAmplitude();
  }, []);

  return (
    <div className="App">
      <MyButton />
    </div>
  );
}

export default App;