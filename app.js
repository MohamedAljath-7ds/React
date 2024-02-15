import React, { useState } from "react";
import ReactDOM from "react-dom/client";




const Header = () => {
    return (
        <div className="head">
            <h1>Fiery Foods</h1>
        </div>
    );
}


const Card = ({filters}) => {
    // console.log(filter.data.data)
    return (
      
            <div className="cards">
              <img className="logo" src={filters.img}/>
              <img className="star" src="https://th.bing.com/th/id/OIP.mwnZJFazxV47evELY1FphgHaFw?rs=1&pid=ImgDetMain"/>
              <h2 className="name-center">{filters.name}</h2>
              <h3>{filters.Rating}</h3>
            </div>
       
      
    )
}

const Body = () => {
    const[filterData, setfilterData] = useState(
        [{
            name:"pizza",
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/terdirvzcbmbwok1bwsu",
            Rating:"4.5",
        },
        {
            name:"noodels",
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
            Rating:"4.5",
        },
        {  
           name:"burger", 
           img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aa77cb6fce4d94f3ad4b4e7fb42782db", 
           Rating:"2.5",
        },
        { 
            name:"maxco",
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aa77cb6fce4d94f3ad4b4e7fb42782db", 
            Rating:"2.2",
         },
         {  
            name:"biriyani",
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aa77cb6fce4d94f3ad4b4e7fb42782db", 
            Rating:"2.4",
         },
         { 
            name:"rasam",
            img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aa77cb6fce4d94f3ad4b4e7fb42782db", 
            Rating:"2.6",
         },
        
        ]
        
    );
    const[searchs, setsearchs] = useState("");
    return (
        <div className="container">
        <button className="btn" onClick={() => {
            let a = filterData.filter((single) => single.Rating > 3);
            setfilterData(a);
        } }>Top Rating
        </button>
        <div className="input-search">
        <input type="text" placeholder="search" value={searchs} onChange={
            (e) => {
                setsearchs(e.target.value);
            }
        }></input>
        <button onClick={() => {
            const fD = filterData.filter((single) => single.name.toLowerCase().includes(searchs.toLowerCase()));
            setfilterData(fD);
        }}>search</button>
        </div>
        <div className="body-wrapper">
                
                {filterData.map((single) => <Card filters={single} />)}

        </div>
        </div>
    )
}






const App = () => {
    
   
    return (
        <div className="app">
            <Header />  
            <Body />         
           
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)