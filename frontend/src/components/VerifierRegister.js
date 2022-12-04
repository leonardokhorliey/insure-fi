import FileUploads from './fileUploads';
import PaymentModal from './PaymentModal';
import Layout from './Layout';

const VerifierRegister = ({setUploadedDocsURI, address, packageType, approve, doPayment}) => {




    return (<>
        {paymentSet && <PaymentModal amount={pkg.valuationAmount} approveAmount={approve} makePayment={doPayment} isApproved={approvalDone} closeModal={()=> setPaymentSet(false)} />}
        <FileUploads setUploadedDocsURI = {setUploadedDocsURI} address={address} packageType={packageType} page={'verifier'}/>
    </>)
}

export default VerifierRegister;