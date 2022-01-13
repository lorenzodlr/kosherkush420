import './App.css'
import rabbi from './IMG_5304.PNG'
import fullRabbi from './IMG_3078.PNG'

function App() {
  return (
    <div className="App">
      <div className='view-split-1'>
        <div className='header'>
          <img src={fullRabbi} alt='kosher kush 420 full logo' className='header-logo' />
          <h3>Kosher Kush 420</h3>
        </div>
        <div className='links-container'>
          <a>PooCoin Chart</a>
          <a>Twitter</a>
          <a>Reddit</a>
          <a>Liquidity Lock</a>
        </div>
        <div className='contract-container'>
          <h1>contract address</h1>
          <h5>Getting rich like the Jews</h5>
        </div>
        <div className='extras'>
          <p>We are providing a moonshot play to the land of the Jews. Become a Jew not a jeet.</p>
          <p>Heavy marketing push. Calls coming throughout.</p>
        </div>
      </div>
      <div className='view-split-2'>
        <img src={rabbi} alt='kosher kush 420 face logo' className='main-img' />
      </div>
    </div>
  )
}

export default App;
