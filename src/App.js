import './App.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Link from './components/Link'
import ImagePreview from './components/ImagePreview'

const LINKS = [
  {
    url: 'https://www.qtranfilms.com',
    text: 'qtranfilms.com',
    title: 'Cinematographer',
    image: 'https://cdn.hdvideopro.com/2017/01/quyen_tran_cinematographer.jpg',
  },
  {
    url: 'http://quyentran.com',
    text: 'quyentran.com',
    title: 'Software developer',
    image:
      'https://pbs.twimg.com/profile_images/887796072956997633/SijhaCDR_400x400.jpg',
  },
  {
    url: 'https://twitter.com/quyentran',
    text: 'twitter.com/quyentran',
    title: 'Prolific tweeter',
    image:
      'https://pbs.twimg.com/profile_images/1328003101199110145/ggaV-Vla_400x400.jpg',
  },
  {
    url: 'https://www.simplyeyes.com',
    text: 'simplyeyes.com',
    title: 'Eye doctor',
    image:
      'https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/2073/2017/11/drtran.jpg',
  },
  {
    url: 'https://quyentranacupuncture.co.uk',
    text: 'quyentranacupuncture.co.uk',
    title: 'Professional acupuncturist',
    image:
      'https://quyentranacupuncture.co.uk/wp-content/uploads/2021/03/quyen-tran-portrait.jpg',
  },
  {
    url: 'https://www.quyen-tran.com',
    text: 'quyen-tran.com',
    title: 'Writer',
    image:
      'https://s3.amazonaws.com/external_clips/users/199126/medium/be84f021ce0cf53346bd261058aa0d90.jpeg',
  },
]

function App() {
  const [selected, setSelected] = useState()

  return (
    <div className="App">
      <header className="App-header">
        {selected && <ImagePreview link={selected} />}
        <h1> Web Links </h1>
        <ul>
          {LINKS.map((link) => {
            return (
              <Link
                onClick={() => setSelected(link)}
                onHover={() => setSelected(link)}
                onMouseOut={() => setSelected()}
                key={link.text}
                link={link}
              />
            )
          })}
        </ul>
        <Button
          variant="secondary"
          href="https://github.com/qtrandev/react-web-links"
        >
          Source Code
        </Button>
      </header>
    </div>
  )
}

export default App
