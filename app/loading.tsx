import React from 'react'

function loading() {
    return (
        <div className='flex justify-center content-center min-h-screen overflow-hidden'>
            <span className="loading loading-ring loading-xs text-primary"></span>
            <span className="loading loading-ring loading-sm text-secondary"></span>
            <span className="loading loading-ring loading-md text-success"></span>
            <span className="loading loading-ring loading-lg text-error"></span>
        </div>
    )
}

export default loading