
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
        <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind test</h1>
        <Card username="Max"  btnText='click me'/>
        <Card username="Sam"/>
        {/* btnText takes default value from props in above card*/}
    </>
  )
}

export default App
