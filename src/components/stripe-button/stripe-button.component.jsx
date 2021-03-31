import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H9vhbAkZ1kK6rBvmDS0W2iZGZyw0UFrbJrPp266FIv4h9fY6x2BK4W6gu1J8nF2ENxc34FH2UWSZusZGbC3jcFZ00Nvkgtgj3'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful!');
  }
  
  return (
    <StripeCheckout 
      label='Pay Now'
      name="CRWN CLXTHING Ltd."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
