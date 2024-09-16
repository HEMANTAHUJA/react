import Card1 from "./Card1"
import Card2 from "./Card2"
import Home from "./Home"
import vector from "./assets/download5.jpeg";
import image1 from "./assets/imag1.jpeg";
import image2 from "./assets/download7.jpeg";
import image3 from "./assets/download8.jpeg";
import { useContext, useEffect, useState } from "react";
import Child1 from "./Child1";
import Login from "./Login"
import { CountContext } from "./CountProvider"
import Reducer from "./Reducer"
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import Signup from "./Signup"
import Navbar from "./Navbar"
// import ContactUs from "./ContactUs";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Router from "./router/Router";
import Dashboard from "./Dashboard";


const data = [
// {
//   heading : "Card2",
//   description  : "Card 2 description",
//   classname : "bg-blue-300",
//   image : vector
// },
// {
//   heading : "Card3",
//   description  : "Card 3 description",
//   classname : "bg-purple-300",
//   image : image1
// },
// {
//   heading : "Card4",
//   description  : "Card 4 description",
//   classname : "bg-green-300",
//   image : image2
// },
// {
//   heading : "Card5",
//   description  : "Card 5 description",
//   classname : "bg-red-300",
//   image :image3
// },
// {
//   heading : "Card2",
//   description  : "Card 2 description",
//   classname : "bg-blue-300",
//   image : vector
// },
// {
//   heading : "Card3",
//   description  : "Card 3 description",
//   classname : "bg-purple-300",
//   image : image1
// },
// {
//   heading : "Card4",
//   description  : "Card 4 description",
//   classname : "bg-green-300",
//   image : image2
// },
// {
//   heading : "Card5",
//   description  : "Card 5 description",
//   classname : "bg-red-300",
//   image : image3
// },
// {
//   heading : "Card2",
//   description  : "Card 2 description",
//   classname : "bg-blue-300",
//   image : vector
// },
// {
//   heading : "Card3",
//   description  : "Card 3 description",
//   classname : "bg-purple-300",
//   image : image1
// },
// {
//   heading : "Card4",
//   description  : "Card 4 description",
//   classname : "bg-green-300",
//   image : image2
// },
// {
//   heading : "Card5",
//   description  : "Card 5 description",
//   classname : "bg-red-300",
//   image : image3
// },

]
function App() {

  // useState
  const [count , setCount ] = useState(0);
  const [productId , setProductId] = useState(1);
  const { setCountValue } = useContext(CountContext);
  const [apiData , setApiData] = useState([]);
  const [loading , setLoading] = useState(false);

  const fetchData = async ()=>{
    setLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      console.log(data);
      setApiData(data);
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }

  // useEffect

  useEffect(()=>{
    // fetchData();
    // console.log(count)
    // setCount(prev=>prev+1)
  },[]);

  // if(loading){
  //   return (
  //     <div className="text-3xl text-gray-200 flex justify-center items-center w-full h-screen">Loading...</div>
  //   )
  // }


return (
    <div className="w-full">
      {/* <Navbar /> */}

      <RouterProvider router={Router} />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
      {/* <p className="text-3xl text-white">App</p>
      <button className="p-2 border-2 text-gray-200 active:bg-gray-200 active:text-gray-700" onClick={()=>{setCountValue((prev)=>prev+1)}}>Update Count Value</button> */}
      {/* <Child count={count} setCount={setCount} /> */}
      {/* <Reducer /> */}
      {/* <button className="border-2 p-2 px-4 border-gray-200 active:bg-gray-700 active:text-gray-200" onClick={()=>{setCount(count+1)}}>+ Count</button>
      <p className="text-2xl">The Value of Count is : {count}</p>
      <p className="text-2xl">The Value of product id is : {productId}</p>
      <button className="border-2 p-2 px-4 border-gray-200 active:bg-gray-700 active:text-gray-200" onClick={()=>{setProductId(productId+1)}}>+ Product Id</button> */}
     {/* <Login /> */}
      {/* Props */}
      {/* {
        apiData.map((item ,i)=>{
          return (
            <Card1 heading={item.title} description={item.price} image={item.image} />
          )
        })
      } */}
      {/* <p className="text-4xl font-medium text-white">The Value of count is : {count}</p> */}
      {/* <Child count={count} setCount={setCount} /> */}

{/* <div className="flex gap-4">
<Card1 heading="Card 1" description="This is card 1 desc" classname = "bg-slate-300" image={ProductImage1} />
      <Card1 heading="Card 2" description="This is card 2 desc" classname = "bg-green-300"  image={ProductImage2} />
      <Card1 heading="Card 3" description="This is card 3 desc" classname = "bg-red-300" image={ProductImage3}  />
      <Card1 heading="Card 4" description="This is card 4 desc" classname = "bg-blue-300" image={ProductImage4} />
</div> */}
{/* <p className="text-4xl font-medium text-white">The Value of count is : {count}</p> */}
      </div>
  )
}

export default App