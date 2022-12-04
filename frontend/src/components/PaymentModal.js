import { useEffect, useState } from "react";

const PaymentModal = ({amount, approveAmount, makePayment, isApproved, closeModal}) => {

    const [amountToPay, setAmountToPay] = useState(amount);
    const [approvalDone, setApprovalDone] = useState(false);

    useEffect(() => {
        setApprovalDone(isApproved)
    }, [isApproved])

    return (
        <div id="modal-background">
            <div id="modal">
            <div className="cancel"><p onClick={closeModal}>x</p></div>
            <div className="register-form">
                <div className="form-area">
                    {!approvalDone && <label>
                        Set amount to Pay
                    </label>}
                    {!approvalDone && <input type="number" value={amountToPay}  onChange={(e) => {
                            setAmountToPay(e.target.value);
                        }}/>}
                </div>
                {!approvalDone && <button onClick={() => approveAmount(amountToPay)}>
                    Approve {amountToPay} StableCoins
                </button>}
                {approvalDone && <button onClick={() => makePayment(amountToPay)}>
                    Pay {amountToPay} StableCoins
                </button>}
            </div>

            </div>
        </div>
        
    )
}

export default PaymentModal