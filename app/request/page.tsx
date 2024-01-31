import React from 'react'

type Props = {}

const RequestPage = (props: Props) => {
    return (
        <div className="min-w-full max-h-screen overflow-auto">
            <div className="flex justify-center h-full">
                <textarea className="textarea" placeholder="Bio"  ></textarea>
            </div>
        </div>
    )
}

export default RequestPage