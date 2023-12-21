import React from 'react'
import { ImageLoading } from '../commen/LoadingComponets'

function loading() {
    return (
        <div>
            <div className="animate-pulse flex space-x-3 space-y-3">
                <div className='flex-1 p-2 h-10  bg-slate-700 rounded'></div>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-8 sm:grid-cols-10 xs:grid-cols-12 gap-3 overflow-y-auto'>
                <ImageLoading num={24} />
            </div>
        </div>
    )
}

export default loading