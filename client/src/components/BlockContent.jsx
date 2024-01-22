import React from 'react'

export const BlockContent = ({block}) => {
  return (
    <div className='w-11/12 mx-auto text-white m-8 border-t-4' >
        <h1 className='text-3xl mt-5 mb-5' >Block <span className='font-bold text-blue-400 text-3xl ' >{block.BlockNumber}</span></h1>
        <div className='flex justify-evenly  w-full ' >

            <div className=' w-1/2 ' >
                <div className='flex  gap-52 bg-sapphire mx-auto p-2 w-[90%]  ' >
                    <div>Hash</div>
                    <div className=' font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text ' >{block.Hash}</div>
                </div>
                <div className='flex gap-[165px] w-[90%] mx-auto  p-2' >
                    <div>TimeStamp</div>
                    <div className='' >{block.Timestamp}</div>
                </div>
                <div className='flex gap-[218px] w-[90%] mx-auto bg-sapphire p-2' >
                    <div>Size</div>
                    <div className='' >{block.Size}</div>
                </div>
                <div className='flex gap-[194px] w-[90%] mx-auto p-2' >
                    <div>Weight</div>
                    <div className='' >{block.Weight}</div>
                </div>
            </div>

            <div className='w-1/2' >
                <div className='flex gap-52  w-[90%] mx-auto bg-sapphire p-2' >
                    <div>Total Fees </div>
                    <div className='' >{block.TotalFees}</div>
                </div>
                <div className='flex gap-40  w-[90%] mx-auto p-2' >
                    <div>Subsidy + Fees :</div>
                    <div className='' >{block.SubsidyAndFees}</div>
                </div>
                <div className='flex gap-56  w-[90%] mx-auto bg-sapphire p-2' >
                    <div>Weight</div>
                    <div className='' >{block.Weight}</div>
                </div>
            </div>
        </div>
    </div>
  )
}
