import React from 'react'

function Table() {
    return (
        <>
            Table Of Content
            <section className="my-4">
                <table width="100%">
                    <thead className='font-bold'>
                        <tr className='bg-gray-200 p-2'>
                            <td >Description</td>
                            <td >Quantity</td>
                            <td >Price</td>
                            <td >Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>20</td>
                            <td>500</td>
                            <td>10000</td>
                        </tr>

                    </tbody>

                </table>
            </section>
        </>
    )
}

export default Table