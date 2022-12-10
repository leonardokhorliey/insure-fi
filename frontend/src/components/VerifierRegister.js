import FileUploads from './fileUploads';
import PaymentModal from './PaymentModal';
import Layout from './Layout';
import { useState } from 'react';

const VerifierRegister = ({setUploadedDocsURI, address, packageType, approve, doPayment, approvalDone}) => {

    const [paymentSet, setPaymentSet] = useState(false);
    const [amount, setAmount] = useState(0);

    const startReg = (uri, packageType, value) => {
        setAmount(value);
        setPaymentSet(true);
        setUploadedDocsURI(uri, packageType, value, 'verifier-register');
    }

    return (<>
        {paymentSet && !approvalDone && <PaymentModal amount={amount} approveAmount={approve} makePayment={doPayment} isApproved={approvalDone} closeModal={()=> setPaymentSet(false)} />}
        <FileUploads setUploadedDocsURI = {startReg} address={address} packageType={packageType} page={'verifier'}/>
    </>)
}

export default VerifierRegister;