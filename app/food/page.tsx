import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Card from '../components/Card'
import axios from '../components/conn';
const inter = Inter({ subsets: ['latin'] })

async function getData() {
  const res = await axios.get("/meals?populate=*");
  
  
    if (res.status !== 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

  return res.data.data;
}

async function Home() {
  const data = await getData()
  console.log("over here", data)
  
  return (
    <div>
      <div className='bg-teal-400 h-10 w-full'></div>

<div className="grid grid-cols-4">
{data.map((dat : any) => (  

        
        <Card dish={dat.attributes.Dish} stars={dat.attributes.Stars} name={dat.attributes.RestaurantName} description={dat.attributes.MealDescription} price={dat.attributes.Price} url={dat.attributes.Picture.data[0].attributes.formats.large.url}/>
      ))}



</div>


    </div>
    
  )
}

export default Home
