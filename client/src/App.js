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
          <a href="https://poocoin.app/tokens/0x678d86517699ea514952b97ad750c3180fb07977" target="__blank">PooCoin Chart</a>
          <a href="https://twitter.com/search?q=%23kosherkush420&src=typed_query" target="__blank">Twitter</a>
          <a href="https://deeplock.io/lock/0x1c6657cae128C664a563Bc461eE1bd1108Ac2Efa" target="__blank">Liquidity Lock</a>
        </div>
        <div className='contract-container'>
          <h1>0x678d86517699ea514952b97ad750c3180fb07977</h1>
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
