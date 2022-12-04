import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import FileUploads from './fileUploads';
import PaymentModal from './PaymentModal';

const PackageDetail = ({packages, 
    address, 
    balance, 
    connectWallet, 
    signedIn, 
    setUploadedDocsURI, 
    isEnrolled,
    approve,
    doPayment,
    approvalDone
}) => {

    const {packageType} = useParams();
    const [paymentSet, setPaymentSet] = useState(false);

    console.log(packageType);

    const k = {
        id: 4,
        name: 'Embrace Education',
        description: 'It\'s hard in every continent. Do your own on us.',
        img: ""
    }

    const [pkg, setPkg] = useState({
        id: 4,
        name: 'Embrace Education',
        description: 'It\'s hard in every continent. Do your own on us.',
        img: ""
    });

    const makePayment = () => {
        setPaymentSet(true);
    }


    useEffect(() => {
        // console.log(packageType);
        // console.log(pkg);
        // console.log(packages);
        // console.log(packages.filter(pkg => pkg.id == packageType))
        setPkg(packages.filter(pkg => pkg.id === packageType)[0]);
    }, [packages, packageType])
    

    return (
        <>
        {paymentSet && <PaymentModal amount={pkg.valuationAmount} approveAmount={approve} makePayment={doPayment} isApproved={approvalDone} closeModal={()=> setPaymentSet(false)} />}
        <Layout children =
        {<div id="package-detail">
        
        {isEnrolled && <div id="notify-tag">
            <p>You have registered for this package</p>
        </div>}
        <section id="detail-area">
            {!pkg ? <div>
                <img src={k.img} alt={`${k.name} pic`}/>
                <div>
                    <h1>
                        {k.name}
                    </h1>

                    <p>
                        {k.description}
                    </p>
                </div>
            </div>: <div>
                <img src={pkg.img} alt={`${pkg.name} pic`}/>
                <div class="pkg-description">
                    <h1>
                        {pkg.name}
                    </h1>

                    <p>
                        {pkg.description}
                    </p>

                    {isEnrolled && <button onClick={makePayment}>
                        Pay Monthly Premium
                    </button>}
                </div>
            </div>}
        </section>
        
        <FileUploads setUploadedDocsURI = {setUploadedDocsURI} address={address} packageType={packageType} page={isEnrolled ? 'claim': 'detail'}/>
    </div>} address={address} balance={balance} connectWallet={connectWallet} signedIn={signedIn} />
        
    </>)

}

PackageDetail.defaultProps = {
    isEnrolled: true
}


export default PackageDetail;