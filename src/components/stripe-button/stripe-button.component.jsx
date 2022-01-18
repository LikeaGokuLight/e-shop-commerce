import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51KJLgjEKQoAuQWZHvyYVEBoEQhgTGtBhqbpVANgyU7FVqkYvn9HNkhbApgAjWadlgc4vAcLRRZYXX2FZmeVyjqRS00jPFfIFsn"
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return(
        <StripeCheckout
            label={"Pay Now"}
            name={"E-Shop"}
            billingAddress
            shippingAddress
            image="https://stripe.com/img/documentation/checkout/marketplace.png"
            description={`Your total is €${price} `}
            amount={priceForStripe}
            panelLabel={"Pay Now"}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;