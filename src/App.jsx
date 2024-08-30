import Card1 from "./Card1"
import Card2 from "./Card2"
import Home from "./Home"
import vector from "./assets/download5.jpeg";
import image1 from "./assets/imag1.jpeg";
import image2 from "./assets/download7.jpeg";
import image3 from "./assets/download8.jpeg";
import { useState } from "react";
import Child1 from "./Child1";


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

function App(){

  // let count = 0;
  const [count ,setCount ] =useState(0);
  console.log(count);
  return (
    <div className=" text-center">
      {/* props */}
      {/* {
        data.map((item,i)=>{
          return (
            <Card1 heading={item.heading} classname={item.classname} description={item.description} image={item.image} />
          )
        })
      } */}
      <p className="text-4xl text-center font-semibold text-white">The value of count is : {count}</p>
       <Child1 count={count} setCount={setCount}/>
      {/* <button className="bg-slate-200 p-2 my-4 active:bg-slate-400 active:shadow-inner" onClick={()=> {
        setCount(count-1);
        // count =- 1;p
        // console.log(count);
      }}>Dec count</button>
      <button className="bg-slate-200 p-2 my-4 active:bg-slate-400 active:shadow-inner" onClick={()=>{
        // count += 1;
        // console.log(count);
        setCount(count+1);
      // }}>Inc count</button> */}
      

     {/* <div className="flex gap-4">
     <Card1 heading="Card 1 heading" description="This is card 
      1 desc" classname = "bg-slate-300"/>
      <Card1 heading="Card 2 heading" description="This is card 
      2 desc" classname = "bg-sky-300"/>
      <Card1 heading="Card 3 heading" description="This is card 
      3 desc" classname = "bg-green-300"/>
      <Card1 heading="Card 4 heading" description="This is card 
      4 desc" classname = "bg-red-300"/>
     </div> */}
      {/* <Card1 heading="Card 1 heading" description="This is card 
      1 desc" classname = "bg-slate-300"/>
      <Card1 heading="Card 2 heading" description="This is card 
      2 desc" classname = "bg-sky-300"/>
      <Card1 heading="Card 3 heading" description="This is card 
      3 desc" classname = "bg-green-300"/>
      <Card1 heading="Card 4 heading" description="This is card 
      4 desc" classname = "bg-red-300"/> */}

<p className="text-4xl text-center font-semibold text-white">The value of count is : {count}</p>

      </div>

      

  
      
  )
}


export default App