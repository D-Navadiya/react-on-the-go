import { Routes, Route } from 'react-router-dom';

import MarkettingForm from '../routes/marketting-form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MarkettingForm />} />
    </Routes>
  );
}

export default App;
