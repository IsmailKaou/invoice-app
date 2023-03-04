import React from 'react'

function Footer({ BankName, BankNumber, Website, Email, Phone }) {
    return (
        <>
            <footer className=''>
                <section className="flex flex-col my-4">
                    <h1 className='text-gray-900 text-lg font-medium mb-1'>Payment Info</h1>
                    <ul className="flex space-x-3 items-start ml-5 ">
                        <div>
                            <li><span className="text-gray-700 font-medium text-base">Bank Name</span></li>
                            <li><span className="text-gray-700 font-medium text-base">Account #</span></li>

                        </div>
                        <div>
                            <li><span className="text-gray-70 font-normal text-base">: {BankName}</span></li>
                            <li><span className="text-gray-70 font-normal text-base">: {BankNumber}</span></li>
                        </div>
                    </ul>
                </section>
                <ul className="flex flex-row space-x-2 items-start justify-center ">
                    <li className="text-gray-800  font-medium text-sm">Website : <span className='font-normal'><a href="www.amazon.com">{Website}</a> </span> -</li>
                    <li className="text-gray-800 font-medium text-sm">Email :<span className='font-normal'>{Email}</span> -</li>
                    <li className="text-gray-800 font-medium text-sm">Phone :<span className='font-normal'>{Phone}</span> </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer