import './App.css'
import { Input } from './component/Input'
import { useSelector } from 'react-redux'
import { Header } from './component/Header'
import { HomePage } from './component/HomePage'
import { Spinner } from './component/Spinner'
import { User } from './component/User'

function App(){
  let {spa, home, spinner, user, getdata}=useSelector(store=>store.ui)
  console.log(getdata);
  return (
    <div className="App">
      <Header/>
      { spa && <Input/>}
      { home && <HomePage/>}
      { spinner && <Spinner/>}
      { user && <User/>}
    </div>
  )
}
export default App