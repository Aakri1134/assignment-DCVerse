import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import AvatarCard from './components/AvatarCard';
import axios from 'axios';
import CreateButton from './components/CreateButton';
import { useGlobalContext } from './context/GlobalContext';
import SuccessBanner from './components/SuccessBanner';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ data: [] }); // Initialize data with an object

  const context = useGlobalContext()


  useEffect(() => {
    cardData();
  }, []);

  const cardData = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users?page=2", {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='theme2 h-full lg:h-screen bg-backgroundColor pb-10'>
      <Header />
      {(context.successSubmit)? <SuccessBanner/>:null}
      <div className='h-[150dvh] lg:h-[50dvh] mt-10 flex flex-col lg:flex-row justify-center items-center gap-[3vw] w-screen'>
        {data.data.length > 0 ? ( // Check if data is available
          <>
            <AvatarCard imageURL={data.data[0].avatar} firstName={data.data[0].first_name} lastName={data.data[0].last_name}/>
            <AvatarCard imageURL={data.data[1].avatar} firstName={data.data[1].first_name} lastName={data.data[1].last_name}/>
            <AvatarCard imageURL={data.data[2].avatar} firstName={data.data[2].first_name} lastName={data.data[2].last_name}/>
          </>
        ) : (
          <p className=' absolute top-48 font-mono text-5xl'>Loading...</p> // Show a loading message or spinner
        )}
      </div>
      <CreateButton/>
    </div>
  );
}

export default App;
