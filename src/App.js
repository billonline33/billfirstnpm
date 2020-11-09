import logo from './logo.svg';
import { TextInput } from 'simple-component-library-bill';
import { XPOHeader } from 'xpo-header';
// import { XPOHeader } from 'gokul-react-package';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* TextInput
      <TextInput label="Email Address" placeholder="name@example.com" /> */}
      <XPOHeader label="Email Address 2" placeholder="name@example2.com" />
    </div>
  );
}

export default App;
