
import React,{useState,useEffect} from "react"
import './paypal.css'
import Paypal from './PayPal'

const Checkout =()=>{

    const [abrirdom, setabrirdom] = useState(false);
    const [abrirvende, setabrirvende] = useState(false);
const [pay, setpay] =useState(false);
    
        const opendom =(e)=>{
            e.preventDefault();
            setabrirdom(!abrirdom)
                }
                const openvende =(e)=>{
            e.preventDefault();
                    setabrirvende(!abrirvende)
                        }

                        const openpay = (e) =>{
                            e.preventDefault();
                            setpay(!pay);

                        }

const Handlesubmit =(e) =>{
   e.preventDefault();

}
  



return (<div className="checkout-container">
    <div className="inner-container">
<h1 className="shippingtype">Elige tu forma de entrega</h1>


<form onSubmit={Handlesubmit}>
<form>

<fieldset>
<input type="radio" id="contactChoice2" name="contact" value="phone" onClick={opendom}/>
      <label for="contactChoice2">Domicilio</label>
<br/>
      <input type="radio" id="contactChoice3" name="contact" value="mail"  onClick={opendom}/>
      <label for="contactChoice3">Acordar con el vendedor</label>
</fieldset>

  </form>
  

    <fieldset className={`dom${abrirdom? "" : "openvende"}`}>

                 <label for="lastName">Telefono de contacto</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">Confirmar Email</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>
    </fieldset>

<fieldset className={`vende${abrirdom ? "opendom" :  ""}`}>
                <label for="firstName">Nombre y apellido</label>
                <input id="firstName" name="firstName" type="text"/>
             
                    <label for="lastName">Email</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">confirm Email</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">ciudad</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">Estado</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>
                    <label for="lastName">colonia</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>
                    <label for="lastName">codigo postal</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">calle</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">numero exterior</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">numero interior/depto (opcional)</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">Entre que calles esta?</label>
                    <input className="lastName" id="lastName" name="lastName" type="text" placeholder="calle 1"/>
                    <input className="lastName" id="lastName" name="lastName" type="text" placeholder="calle 2"/>


                    <label for="lastName">Telefono de contacto</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                    <label for="lastName">Indicaciones adicionales de esta uvicacion</label>
                    <input className="lastName" id="lastName" name="lastName" type="text"/>

                      <button type='submit' onClick={openpay}>SUBMIT</button>

            </fieldset>
            
</form>



<div className={`paypalbtns${pay? "displaypaypal" : ""}`}>

<h1 className="paymentype">Elige tu metodo de pago</h1>
< Paypal />

</div>
</div>

</div>)
}
export default Checkout;