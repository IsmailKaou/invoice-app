import React from 'react'

function MainInfo({ Name, Address, Email, Phone }) {
    return (
        <>
            <section className="flex flex-col my-4 space-y-0">
                <div className=" text-gray-900 uppercase text-lg font-medium mb-0"> {Name} </div>
                <div className="text-gray-700 font-normal text-md"> {Address} </div>
                <div className="text-gray-700 font-normal text-md"> {Email} </div>
                <div className="text-gray-700 font-normal text-md"> {Phone} </div>
            </section>
        </>
    )
}

export default MainInfo