import React from 'react'
import { ModeToggle } from './mode-toggle-btn'

const EditorComponent = () => {
  return (
    <div className='min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8'>
         <div className="flex item-center justify-between">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Editor Vcode </h2>
            <div className="flex">
                <ModeToggle />
            </div>
         </div>
    </div>
  )
}

export default EditorComponent
