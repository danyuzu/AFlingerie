import React, { useEffect, useRef, useContext } from "react";
import { CartContext } from './pages/ProductPage'



const PayPal =() =>
{

    const paypal = useRef();
    const { cartItem} = useContext(CartContext);

 

    useEffect (() =>{
      const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price,0);
      console.log(newTotalPrice);

window.paypal.Buttons({
  
  async createOrder() {

    try {
      const response = await fetch("https://a-flingerie-server.vercel.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
          cart: [
            {
              id: "2",
              quantity:1,
              value:newTotalPrice
            },
          ],
        }),
      });
      
      const orderData = await response.json();
      
      if (orderData.id) {
        return orderData.id;
      } else {
        const errorDetail = orderData?.details?.[0];
        const errorMessage = errorDetail
          ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
          : JSON.stringify(orderData);
        
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      // resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
    }
  },
    async onApprove(data, actions) {
        try {
          const response = await fetch(`https://a-flingerie-server.vercel.app/api/orders/${data.orderID}/capture`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          
          const orderData = await response.json();
          // Three cases to handle:
          //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
          //   (2) Other non-recoverable errors -> Show a failure message
          //   (3) Successful transaction -> Show confirmation or thank you message
          console.log(orderData)
          const errorDetail = orderData?.details?.[0];
          
          if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
            // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
            return actions.restart();
          } else if (errorDetail) {
            // (2) Other non-recoverable errors -> Show a failure message
            throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
          } else if (!orderData.purchase_units) {
            throw new Error(JSON.stringify(orderData));
          } else {
            // (3) Successful transaction -> Show confirmation or thank you message
            // Or go to another URL:  actions.redirect('thank_you.html');
            const transaction =
              orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
              orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
            // resultMessage(
            //   `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
            // );
            console.log(
              "Capture result",
              orderData,
              JSON.stringify(orderData, null, 2),
            );
          }
        } catch (error) {
          console.error(error);
          // resultMessage(
          //   `Sorry, your transaction could not be processed...<br><br>${error}`,
          // );
        }
      },
}).render(paypal.current)
            
    }, [cartItem])

    return (
        <>

      <div  className='paysection'  ref={paypal}></div>


        </>
    )
}

export default PayPal;