import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Web Links </h1>
        <p>
          <a href="https://www.qtranfilms.com" target="_blank">qtranfilms.com</a> - Cinematographer<br/>
          <a href="http://quyentran.com" target="_blank">quyentran.com</a> - Software developer<br/>
          <a href="https://twitter.com/quyentran" target="_blank">twitter.com/quyentran</a> - Prolific tweeter<br/>
          <a href="https://www.simplyeyes.com" target="_blank">simplyeyes.com</a> - Eye doctor<br/>
        </p>
        <Button variant="secondary" href="https://github.com/qtrandev/react-web-links">Source Code</Button>
      </header>
    </div>
  );
}

export default App;
