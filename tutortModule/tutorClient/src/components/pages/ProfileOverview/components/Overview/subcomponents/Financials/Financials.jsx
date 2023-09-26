import React, { useState } from "react";
import './styles/Financials.css';
import Invoice from '../../../../../../GlobalComponents/Popups/Invoice/Invoice';

const Financials = () => {

    const [InvoiceOpen, setInvoiceOpen] = useState(false);
    const [invoiceData,setInvoiceData]=useState({});
    const openInvoice = (item) => {
        setInvoiceOpen(!InvoiceOpen)
        setInvoiceData({...item})
    }
    return (
        <div >

            {InvoiceOpen && <Invoice invoiceData={invoiceData} openInvoice={openInvoice} />}

            <div className="">

                <div >
                    <table style={{ width: "100%", borderSpacing: "0px 9px" }}>
                        <thead >
                            <tr>
                                <th style={{ position: "sticky", top: "0", background: "rgb(248 248 248)"}}>Date</th>
                                <th style={{ position: "sticky", top: "0", background: "rgb(248 248 248)"}}>Time</th>
                                <th style={{ position: "sticky", top: "0", background: "rgb(248 248 248)"}}>Transaction ID</th>
                                <th style={{ position: "sticky", top: "0", background: "rgb(248 248 248)"}}>Product/ Service</th>
                                <th style={{ position: "sticky", top: "0", background: "rgb(248 248 248)"}}>Amount</th>
                                <th style={{ position: "sticky", top: "0", background: "rgb(248 248 248)"}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, i) => (
                                    <tr className="tableRow" >

                                        <td>  {item.date}</td>
                                        <td>  {item.time}</td>
                                        <td>  {item.transactionID}</td>
                                        <td>  {item.product}</td>
                                        <td style={{ color: "#6764FF"}}>  {item.Tamount}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 20" fill="none">
                                                <path d="M8.07429 0.292893C7.68377 -0.0976311 7.05061 -0.0976311 6.66008 0.292893L0.296119 6.65685C-0.0944052 7.04738 -0.0944052 7.68054 0.296119 8.07107C0.686643 8.46159 1.31981 8.46159 1.71033 8.07107L7.36719 2.41421L13.024 8.07107C13.4146 8.46159 14.0477 8.46159 14.4383 8.07107C14.8288 7.68054 14.8288 7.04738 14.4383 6.65685L8.07429 0.292893ZM6.36719 1L6.36719 20L8.36719 20L8.36719 1L6.36719 1Z" fill="#EC3737" />
                                            </svg></td>
                                        <td>
                                            <div >
                                                <button className="btnInvoice openInvoiceBtn" onClick={()=>openInvoice(item)}>View Invoice</button>
                                            </div>
                                        </td>
                                        <td style={{background:"rgb(248 248 248)"}}></td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        Tamount: '₹400',
        action: '',
        name:'John P',
        ID:' #556989',
        amount:'₹423.74',
        GST:'₹76.27'

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        Tamount: '₹100',
        action: '',
        name:'Steve',
        ID:' #556989',
        amount:'₹423.74',
        GST:'₹76.27'

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        Tamount: '₹300',
        action: '',
        name:'Yash',
        ID:' #556989',
        amount:'₹423.74',
        GST:'₹76.27'

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹100',
        action: '',
        amount:'₹423.74',
        GST:'₹76.27'

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },
    {
        date: '23/08/23',
        time: '10:00 AM',
        transactionID: '#9904578',
        product: 'Reward coins',
        amount: '₹500',
        action: ''

    },

];

export default Financials;