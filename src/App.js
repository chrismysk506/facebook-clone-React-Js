
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { Widgets } from '@material-ui/icons';
import Widget from './Widget'
import Login from './Login';
import {useReducer} from 'react'
import { useContext} from 'react'
import React from 'react'
import {useState} from 'react'




export const usercontext=React.createContext();


//export const initialState='';

/*export const reducer=(state,action)=>{
   switch(action.type)
   {
     case'user':
       return state;
     default:
       return state;
   }
}*/

/*handleback=(childdata)=>{
  console.log(childdata);
}*/

function App() {
  const [user, setuser] = useState('')

  //const [userdata, dispatch] = useReducer(reducer, initialState)
  return (
    <usercontext.Provider value={user}>
    <div className="App">
      {!user?<Login parentcallback={(data)=>setuser(data)}/>:
      <>
      {console.log(user)}
     <Header></Header>
     <div className="appbody">
        <Sidebar></Sidebar>
        <Feed className='feed'></Feed>
        <Widget className='wid'></Widget>

     </div>
     </>
}
    </div>
    </usercontext.Provider>
  );
}

export default App;
