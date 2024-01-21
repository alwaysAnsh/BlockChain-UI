import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Box from './components/Box'
import { data } from './data/data.js'
import { useDispatch, useSelector } from 'react-redux'
import { updateDataArray, updateId } from './redux/slices/blockchainSlice.js'
import { BlockContent } from './components/BlockContent.jsx'

function App() {
    const id = useSelector((state) => state.blockchainSlice.id)
    const blockData = useSelector((state) => state.blockchainSlice.dataArray)
    const[block, setBlock ] = useState({})
    const [click, setClick] = useState(false)
    const dispatch = useDispatch();
    
    const handleOnClick = (e)=>{
      setClick(true);
      console.log(e);
      console.log(e.target.innerText);
      const val = e.target.innerText

      const dataObject = data.find((item) => item.BlockNumber == val )
      
      
      
      if(dataObject){
        setBlock(dataObject)
        console.log('blcok of data is: ', block)
        const value = e.target.innerText;
        dispatch(updateId(value))
        dispatch(updateDataArray(dataObject))
      }

    }

    const serialNumbers = [
      657310,65720,657350,69720,658710,634520,650980,78920
    ]

  return (
    

    <>
      <div className='flex justify-evenly mt-6 mb-2 gap-6 text-center ' >
        {
          serialNumbers.map((num, index ) => (
            <span onClick={handleOnClick} className='cursor-pointer' >{num}</span>
          ))
        }
      </div>
      <div className='flex gap-6 justify-evenly' >
        
        {
          data.map((item, index ) => (
            <Box key={index} blockNumber={item.BlockNumber} speed = {item.speed} size={item.Size} transactions={item.Transactions} weight = {item.Weight} />
          ))
        }
        </div>
        
        {
          click && <BlockContent block = {block} />
        }

        {/* <div onClick={handleOnClick} className='flex flex-col gap-2 text-red-500 p-4 border-2 border-blue-400 cursor-pointer'  >
        657310
        </div>
        <div onClick={handleOnClick} className='flex flex-col gap-2 text-red-500 p-4 border-2 border-blue-80000 cursor-pointer'>
        65720
        </div>
        <div>
          3
        </div>
        {
          <div>{block.Hash}</div>
        } */}
      
    </>
  )
      }

export default App
