import React from 'react'

const InvoiceInfo = ({ invoiceNumber, invoiceDate, dueDate }) => {
    return (
        <>
            <article className="flex flex-col items-end">
                <h1 className=' text-gray-700 uppercase font-normal text-3xl mb-2 mr-8'>Invoice</h1>
                <ul className="flex space-x-3 items-start justify-center ">
                    <div>
                        <li><span className="text-gray-700 font-medium text-base">Number </span></li>
                        <li><span className="text-gray-700 font-medium text-base">Date</span></li>
                        <li><span className="text-gray-700 font-medium text-base">Due Date</span></li>
                        <li><span className="text-gray-700 font-medium text-base">Status</span></li>
                    </div>
                    <div>
                        <li><span className="text-gray-70 font-normal text-base">{invoiceNumber}</span></li>
                        <li><span className="text-gray-70 font-normal text-base"> {invoiceDate} </span></li>
                        <li><span className="text-gray-70 font-normal text-base"> {dueDate} </span></li>
                        <li><span className="text-gray-70 font-normal text-base">Paid</span></li>
                    </div>
                </ul>
            </article>
        </>
    )
}

export default InvoiceInfo