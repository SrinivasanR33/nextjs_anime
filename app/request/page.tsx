import React from 'react'

type Props = {}

const RequestPage = (props: Props) => {
    return (
        <div className="min-w-full max-h-screen overflow-auto">
            <div className="flex justify-center p-3">
                <textarea className="textarea" placeholder="Request Message" cols={50} rows={4}></textarea>
            </div>
        </div>
    )
}

export default RequestPage