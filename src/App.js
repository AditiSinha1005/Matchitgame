import logo from './logo.svg';
import './App.css';

let Fun = (props)=>{
let x=props.x;
let y=props.y;
let z=props.z;
let a=props.a;
if(x==y && y==z)
{
  return(
    <>
     <h1>{x} {y} {z}</h1>
     <h1>Matching </h1>
     {/* <h1>{x} {y} {z}</h1> */}
     </>
  );
}
else
{
  return(
    <>
     <h1>{x} {y} {z}</h1>
     <h1> Not Matching</h1>
     </>
  );
}
}
function App() {
  return (
    <div className="App">
       <h1 className="heading"><span>Welcome to Slot Machine Game ( ˘ ³˘)♥︎ </span></h1>
       <div className="divi">
       <Fun x="🧸" y="🧸" z="🧸" a="🙉"/>
       <Fun x="🧸" y="🧸" z="💋" a="🙉"/>
       <Fun x="🧸" y="✨" z="💋" a="🙉"/>


     </div>
    </div>
  );
}

export default App;
