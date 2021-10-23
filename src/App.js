import './App.css'
import { Button } from 'react-bootstrap'

const LINKS = [
  { url: "https://www.qtranfilms.com", text: "qtranfilms.com", title: "Cinematographer" },
  { url: "http://quyentran.com", text: "quyentran.com", title: "Software developer" },
  { url: "https://twitter.com/quyentran", text: "twitter.com/quyentran", title: "Prolific tweeter" },
  { url: "https://www.simplyeyes.com", text: "simplyeyes.com", title: "Eye doctor" },
  { url: "https://quyentranacupuncture.co.uk", text: "quyentranacupuncture.co.uk", title: "Professional acupuncturist" },
  { url: "https://www.quyen-tran.com", text: "quyen-tran.com", title: "Writer" }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Web Links </h1>
        <ul>
          {
            LINKS.map( link => {
              return (
              <li key={link.text}><a href={link.url}>{link.text}</a> - {link.title}<br/></li>
              )
            })
          }
        </ul>
        <Button variant="secondary" href="https://github.com/qtrandev/react-web-links">Source Code</Button>
      </header>
    </div>
  )
}

export default App
