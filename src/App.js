import { FaCaretRight } from 'react-icons/fa';
import { FaCaretDown } from 'react-icons/fa';

import Header from "./components/Header";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Date from "./components/InvoiceInfo"
import MainInfo from "./components/MainInfo";
import ClientInfo from "./components/ClientInfo";
import Footer from "./components/Footer";
import { useState } from "react";
import Buttons from './components/Buttons';
import TableForm from './components/TableForm';

function App() {

  const hideInvoiceSection = () => {
    const sec = document.getElementById('invoice');
    sec.classList.toggle('hidden');
    const icon1 = document.getElementById('icon1');
    icon1.classList.toggle('hidden');
    const icon2 = document.getElementById('icon2');
    icon2.classList.toggle('hidden');
  }
  const hideYourSection = () => {
    const sec = document.getElementById('your');
    sec.classList.toggle('hidden');
    const icon1 = document.getElementById('yicon1');
    icon1.classList.toggle('hidden');
    const icon2 = document.getElementById('yicon2');
    icon2.classList.toggle('hidden');
  }
  const hideClientSection = () => {
    const sec = document.getElementById('client');
    sec.classList.toggle('hidden');
    const icon1 = document.getElementById('cicon1');
    icon1.classList.toggle('hidden');
    const icon2 = document.getElementById('cicon2');
    icon2.classList.toggle('hidden');
  }

  const [showInvoice, setshowInvoice] = useState(false);

  const [invoiceNumber, setinvoiceNumber] = useState("");
  const [invoiceDate, setinvoiceDate] = useState("");
  const [dueDate, setdueDate] = useState("");
  // const [Statut, setStatut] = useState("");
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [BankName, setBankName] = useState("");
  const [BankNumber, setBankNumber] = useState("");
  const [Website, setWebsite] = useState("");

  const [ClientName, setClientName] = useState("");
  const [ClientAddress, setClientAddress] = useState("");
  const [ClientEmail, setClientEmail] = useState("");
  const [ClientPhone, setClientPhone] = useState("");

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  // const [Notes, setNotes] = useState("");

  const printfun = () => {
    window.print();
  };
  const onClick = () => {
    setshowInvoice(false);
  }
  return (
    <>


      <main className="bg-white m-5  sm:mt-10 p-5 mb-10 rounded shadow lg:max-w-3xl lg:mx-auto static">
        {showInvoice ? (<div>
          <Buttons printfun={printfun} onClick={onClick} />

          {/* Header */}
          <Header printfun={printfun} invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

          {/* employe info */}
          <MainInfo Name={Name} Email={Email} Address={Address} Phone={Phone} />

          {/* clients info */}
          <ClientInfo ClientName={ClientName} ClientEmail={ClientEmail} ClientAddress={ClientAddress} ClientPhone={ClientPhone} />


          {/* Table */}
          <Table />

          {/* Notes */}
          <Notes />

          {/* Footer */}
          <Footer BankName={BankName} BankNumber={BankNumber} Website={Website} Email={Email} Phone={Phone} />

        </div>) : (

          <div className="flex flex-col">

            <button onClick={hideInvoiceSection} className='flex items-center justify-start my-4' >
              <div id='icon1' className='hidden' ><FaCaretRight /></div>
              <div id='icon2'  ><FaCaretDown /></div>
              <h1 className=' text-gray-800 font-semibold text-xl '>Invoice Info</h1>
            </button>

            <section className="pl-4 pr-4 mb-10 " id='invoice'>
              <div className="flex space-x-10">
                <div className="flex flex-col  my-2 w-full">
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Invoice number</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="text" name="invoiceNumber"
                    placeholder="Ex : 0001"
                    value={invoiceNumber}
                    onChange={(e) => setinvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col my-2  w-full" >
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Invoice date</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 text-"
                    type="date" name="invoiceDate"
                    placeholder=""
                    value={invoiceDate}
                    onChange={(e) => setinvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col my-2  w-full" >
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Due date</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="date" name="dueDate"
                    placeholder="Enter Your dueDate"
                    value={dueDate}
                    onChange={(e) => setdueDate(e.target.value)}
                  />
                </div>
                {/* <div>
                  <label htmlFor="Additional Notes">
                    Additional Notes
                  </label>
                  <textarea name="notes" id="notes" cols="30" rows="10" placeholder='Additional Notes'></textarea>
                </div> */}
              </div>

            </section>
            {/* Your Info */}
            <button onClick={hideYourSection} className='flex items-center justify-start my-4' >
              <div id='yicon1' className='hidden' ><FaCaretRight /></div>
              <div id='yicon2' ><FaCaretDown /></div>
              <h1 className=' text-gray-800 font-semibold text-xl '>Enter Your Info</h1>
            </button>
            <section className="pl-4 pr-4 mb-10" id='your'>
              {/* <h1></h1> */}
              <div className="flex space-x-10">
                <div className="flex flex-col  my-2 w-full">
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Your full name</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="text" name="Name"
                    placeholder="Enter you full name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col my-2  w-full" >
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Your Address :</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="text" name="Address"
                    placeholder="Enter your Address"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex space-x-10">
                <div className="flex flex-col  my-2 w-full">
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Your Email</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="email" name="Email"
                    placeholder="Enter your Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col my-2  w-full" >
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Your website</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="website" name="Website"
                    placeholder="Enter your website"
                    value={Website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col my-2  w-full" >
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Your Phone :</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="phone" name="Phone"
                    placeholder="Enter Your phone"
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex space-x-10">
                <div className="flex flex-col  my-2 w-full">
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Your Bank name</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="text" name="BankName"
                    placeholder="Ex : Payonner, CIH, BMCE..."
                    value={BankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col my-2  w-full" >
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Account Number</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="text" name="BankNumber"
                    placeholder="Invoice Number"
                    value={BankNumber}
                    onChange={(e) => setBankNumber(e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Clients Info */}
            <button onClick={hideClientSection} className='flex items-center justify-start my-4' >
              <div id='cicon1' className='hidden' ><FaCaretRight /></div>
              <div id='cicon2'  ><FaCaretDown /></div>
              <h1 className=' text-gray-800 font-semibold text-xl '>Enter Client Info</h1>
            </button>
            <section className="pl-4 pr-4 mb-10 " id='client'>
              <div className="flex space-x-10">
                <div className="flex flex-col  my-2 w-full">
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Client's name</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="text" name="ClientName"
                    placeholder=""
                    value={ClientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col my-2  w-full" >
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Client Address :</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="text" name="ClientAddress"
                    placeholder=""
                    value={ClientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex space-x-10">
                <div className="flex flex-col  my-2 w-full">
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Client Email</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="email" name="ClientEmail"
                    placeholder=""
                    value={ClientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col my-2  w-full" >
                  <label htmlFor="name" className="text-md text-gray-700 font-medium my-1">Client's Phone :</label>
                  <input
                    className="outline-none px-2 py-2 rounded border-2 focus:border-blue-300 transition-all duration-500 "
                    type="phone" name="ClientPhone"
                    placeholder=""
                    value={ClientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                  />
                </div>
              </div>

            </section>
            {/* This is table form  */}
            <article>
              <TableForm />
            </article>
            <button className=" bg-purple-600 py-2 px-8 rounded shadow border-2 border-purple-600 hover:bg-transparent hover:text-purple-600 font-bold text-white transition-all duration-500" onClick={() => setshowInvoice(true)}>Preview Invoice</button>
          </div>
        )
        }

      </main >
    </>
  );
}

export default App;
