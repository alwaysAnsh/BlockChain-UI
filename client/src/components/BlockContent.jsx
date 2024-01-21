import React from 'react'

export const BlockContent = ({block}) => {
  return (
    <div>
        <h1>Block <span className='font-bold ' >{block.BlockNumber}</span></h1>
        <div className='flex justify-between' >

            <div>
                <div className='flex justify-between gap-4' >
                    <div>Hash</div>
                    <div>{block.Hash}</div>
                </div>
                <div className='flex justify-between gap-4' >
                    <div>TimeStamp</div>
                    <div>{block.TimeStamp}</div>
                </div>
                <div className='flex justify-between gap-4' >
                    <div>Size</div>
                    <div>{block.Size}</div>
                </div>
                <div className='flex justify-between gap-4' >
                    <div>Weight</div>
                    <div>{block.Weight}</div>
                </div>
            </div>

            <div>
                <div className='flex justify-between gap-4' >
                    <div>Total Fees </div>
                    <div>{block.TotalFees}</div>
                </div>
                <div className='flex justify-between gap-4' >
                    <div>Subsidy + Fees :</div>
                    <div>{block.SubsidyAndFees}</div>
                </div>
                <div className='flex justify-between gap-4' >
                    <div>Weight</div>
                    <div>{block.Weight}</div>
                </div>
            </div>
        </div>
    </div>
  )
}
