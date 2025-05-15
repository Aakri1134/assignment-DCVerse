import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AvatarCard from './components/AvatarCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' theme1 h-full lg:h-screen bg-backgroundColor'>
      <Header/>
      <div className=' h-[150dvh] lg:h-[50dvh] mt-10 flex flex-col lg:flex-row justify-center items-center gap-[3vw] overflow-x-visible'>
        <AvatarCard imageURL='https://www.boredpanda.com/blog/wp-content/uploads/2022/12/639878794ed2d_25qhghsr9j3a1__700.jpg'/>
        <AvatarCard/>
        <AvatarCard/>
      </div>
    </div>
  )
}

export default App
