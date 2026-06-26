import React from 'react'
import {useState} from 'react'
import './index.css'
import { X } from 'lucide-react'
const App = () => {

      const [Title, setTitle] = useState('')
      const [Note, setNote] = useState('')

      const [Task, setTask] = useState([])

    function submitHandler(e){
          e.preventDefault()

          const copyTask = [...Task];
          
          copyTask.push({Title,Note})
          
          setTask(copyTask)
          console.log(Task)
          setTitle('')
          setNote('')
    }

    const deleteNote = (idx) => {
        const copyTask=[...Task]
        copyTask.splice(idx,1)
        setTask(copyTask)
    } 

  return (
    <div className='bg-black  text-white  lg:flex  '>
      <form action=""
            onSubmit={(e)=>{
              submitHandler(e)
              setTitle('')
              setNote('')
            }}
            className='flex gap-4 lg:w-1/2 items-start  p-10 flex-col'>
           <h1 className='text-4xl font-bold'>Add notes</h1>
           {/* FIRST TITLE  */}
        <input type="text"  
               placeholder='Enter title'
               className='border-2 px-5 py-2 w-full outline rounded ' 
               value={Title}
               onChange={(e)=>{
                  setTitle(e.target.value)
               }}
               
               />

            {/* DETAILED INPUT  */}

        <textarea
               placeholder='Enter details'
               className='px-5 w-full h-32 py-2 border-2 rounded ' 
               value={Note}
               onChange={(e) =>{
                setNote(e.target.value)
               }}
               /> 

        <button className='bg-white w-full text-black px-5 py-2 rounded'
                >Add Note</button>
    
       </form>
       <div className='  lg:w-1/2  lg:border-l-2  p-10 '>
       <h1 className='text-4xl font-bold'>Your Note</h1>
       <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-scroll '>

        {Task.map(function (elem,idx){
          return <div className='h-52 relative w-40 rounded-2xl bg-cover bg-[url("https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg")] text-black p-4'
                      key={idx}>
                        <h2 className='absolute top-5 right-5 bg-red-500 p-1 rounded-full text-xs cursor-pointer'>
                          <X size={16}
                              onClick={()=>{
                                deleteNote(idx)
                              }}
                         /></h2>
                <h3 className=' font-bold text-xl leading-tight '>{elem.Title}</h3>
                <p>{elem.Note}</p>
          </div>
        }) }
        
       
       </div>
       </div>
    </div>

  )
}

export default App
