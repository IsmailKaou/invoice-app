import React from 'react'
import InvoiceInfo from './InvoiceInfo'

function Header({ invoiceNumber, invoiceDate, dueDate }) {
    return (
        <>
            <header className="flex flex-col items-start space-y-10 justify-start xl:flex-row xl:justify-between xl:items-center xl:space-y-0">
                {/* logo */}
                <div>
                    <img src="" alt="" />
                    <h3 className='font-bold text-5xl text-purple-600'>Koinvoice</h3>
                </div>
                <div className='flex flex-col'>
                    <InvoiceInfo invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
                </div>

            </header>
        </>
    )
}

export default Header