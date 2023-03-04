import React from 'react'

function ClientInfo({ ClientName, ClientAddress, ClientEmail, ClientPhone }) {
    return (
        <>
            <section className="flex flex-col my-4">
                <h1 className='text-gray-900 uppercase text-lg font-medium mb-0'>Invoice to</h1>

                <div className="uppercase text-gray-700 font-normal text-md">{ClientName}</div>
                <div className="text-gray-700 font-normal text-md">{ClientAddress}</div>
                <div className="text-gray-700 font-normal text-md">{ClientEmail}</div>
                <div className="text-gray-700 font-normal text-md">{ClientPhone}</div>
            </section>
        </>
    )
}

export default ClientInfo