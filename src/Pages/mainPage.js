import React from "react";
import CarouseBanner from "../Components/layout/carousel/carousel";
import FilterButton from "../Components/layout/buttons/filterButton";
import LeftSideButton from "../Components/layout/buttons/leftSidebutton";
import Card from "../Components/layout/cards/cards";
import "../Components/layout/cards/cards.css";
import "../Pages/mainPage.css";



export default function Main(props) {
  const [state, setState] = React.useState({
    checkedA: true,  // Youtube
    checkedB: true,  // Google Books
    checkedC: true,  // Udemy
    checkedD: true,  // W3 Schools
    checkedE: true,  // Stack Overflow
    checkedF: true,  // Unused
  });

  console.log(props);
  return (
      <React.Fragment>
        <CarouseBanner />
      
      {/* row 3 left side buttons, cards, filters */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className='LeftSideButton'>
          <LeftSideButton getQueryTopic={props.getQueryTopic}/>
        </div>
        <container>
        <br />
        {state.checkedA ?<div style={{color: 'white',fontSize: '20px'}}>YouTube <div style={{ display: "flex",justifyContent: "space-between",flexDirection:"row", flexWrap:"wrap"}}>
            {props.videos.length !== 0 && props.videos.map((video, index) =>(
            <Card 
              index={index}
              title= {video.title} 
              link= {video.link} 
              image= {video.image} 
              description= {video.description}
              user={props.user}
              type="videos"
              favPage={props.favPage}
              handleAddOrRemove={props.handleAddOrRemove}>
            </Card>))}
          </div> <br /></div>: <div></div> }
        
        {state.checkedB ? <div style={{color: 'white',fontSize: '20px'}}>Google Books<div style={{ display: "flex", justifyContent: "space-between", flexDirection:"row" }}>
            {props.books.length !== 0 && props.books.map((books, index)=>(
            <Card 
              index={index}
              title= {books.title} 
              link= {books.link} 
              image= {books.image} 
              description= {books.description}
              user={props.user}
              type="books"
              favPage={props.favPage}
              handleAddOrRemove={props.handleAddOrRemove}>
            </Card>))}
          </div><br /> </div>: <div></div> }
        
        {state.checkedC ? <div style={{color: 'white',fontSize: '20px'}}>Udemy<div style={{ display: "flex", justifyContent: "space-between", flexDirection:"row" }}>
            {props.courses.length !== 0 && props.courses.map((courses, index) =>(
            <Card 
              index={index}
              title= {courses.title} 
              link= {courses.link} 
              image= {courses.image} 
              description= {courses.description}
              user={props.user}
              type="courses"
              favPage={props.favPage}
              handleAddOrRemove={props.handleAddOrRemove}>
            </Card>))}
          </div><br /></div> : <div></div> }
        {state.checkedE ?<div>{props.answers.length !== 0 ? <div style={{color: 'white',fontSize: '20px'}}> StackOverflow</div>:<div hidden></div> } 
          <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection:"row" }}>
            
            {props.answers.length !== 0 && props.answers.map((answers, index) =>( 
            <Card 
              index={index}
              title= {answers.title} 
              link= {answers.link} 
              image= {answers.image} 
              description= {answers.description}
              user={props.user}
              type="questions"
              favPage={props.favPage}
              handleAddOrRemove={props.handleAddOrRemove}>
            </Card>))}
            
          </div><br /> </div>: <div hidden></div> }
          <br />
        </container>
        <div className= "filterButton" >
          <FilterButton state={state} setState={setState} />
        </div>
  
    </div>
    </React.Fragment>
  );
}
