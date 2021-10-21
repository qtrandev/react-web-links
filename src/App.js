import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Web Links </h1>
        <p>
          <a href="https://www.qtranfilms.com">qtranfilms.com</a> - Cinematographer<br/>
          <a href="http://quyentran.com">quyentran.com</a> - Software developer<br/>
          <a href="https://twitter.com/quyentran">twitter.com/quyentran</a> - Prolific tweeter<br/>
          <a href="https://www.simplyeyes.com">simplyeyes.com</a> - Eye doctor<br/>
          <a href="https://quyentranacupuncture.co.uk">quyentranacupuncture.co.uk</a> - Professional acupuncturist<br/>
        </p>
        <Button variant="secondary" href="https://github.com/qtrandev/react-web-links">Source Code</Button>
      </header>
    </div>
  );
}

export default App;
