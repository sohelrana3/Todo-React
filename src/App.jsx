import { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { Collapse } from 'react-collapse'
import {data} from './Data'
import { getDatabase, ref, set, push, onValue, remove,update  } from "firebase/database";
import { useEffect } from 'react';


function App() {
  const db = getDatabase();
  let [text, settext] = useState()
  let [todoarr, settodoarr] = useState([])
  let [edit, setedit] = useState(true)
  let [editid, seteditid] = useState("")
 
// data create ---
 let handlesubmit =()=>{
  set(push(ref(db, 'todo/')), {
    task: text
  });
  console.log(text);
 }

 // data  come
 useEffect(()=>{
    const todoref = ref(db, 'todo/');
    onValue(todoref, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        console.log(item.key, "=",item.val());
        arr.push({...item.val(),id:item.key});
        
      })
      settodoarr(arr)
     
    });
 }, [])
 // data delet
 let handledel = (id)=>{
  console.log(id);
  remove(ref(db, 'todo/'+id))
 }
 // data edit
  let handleedit = (item)=>{
    console.log("edit");
    setedit(false)
    settext(item.task)
    seteditid(item.id)
  }
  //data update
  let handleUpdate = ()=>{
    console.log(editid);
    update(ref(db, 'todo/'+editid),{
      task: text
    })
    setedit(true)
    settext("")
  }
  //data Cansel
  let handleCansel = ()=>{
    console.log("cansel");
    setedit(true)
    settext("")
  }
  return (
    <div className='container mx-auto'>
      <input onChange={(e)=>settext(e.target.value)} value={text} className='py-2 px-1 border border-black' placeholder='please task'/>
      {edit 
        ?
        <button onClick={handlesubmit} className='py-2 px-4 bg-emerald-900 text-white'>Submit</button>
        :
         <>
          <button onClick={handleUpdate} className='py-2 px-4 bg-emerald-900 text-white'>Update</button>
          <button onClick={handleCansel} className='py-2 px-4 bg-emerald-900 text-white'>Cansel</button>
         </>
      }
  
      {todoarr.map((item, index)=>(
        <li key={index}>{item.task} - <button onClick={()=>handledel(item.id)} className='border border-blue-900'>Del</button> - <button onClick={()=>handleedit(item)} className='border border-blue-900'>Edit</button></li>
      ))}
    </div>
  
  )
}

export default App
