import { TextField, Stack, Text, PrimaryButton, values } from '@fluentui/react';
import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { CartContext, ICartContext } from "../Context/CartContext";

export const OrderNow: React.FC = () => {
    let localCart: any = localStorage.getItem("cart");
  const { cart, setCart } = React.useContext(CartContext) as ICartContext;


  useEffect(() => {
    localCart = JSON.parse(localCart);
    
    if (localCart) {
        setCart(localCart)
    }
    else setCart([]);
    
  }, []);
  
    return(
        <React.Fragment>
            <Stack className='main-container' style={{background: '#eee'}} id='order'>
                <Text className='sub-heading'>Order Now</Text>
                <Text className='heading'>FREE AND FAST</Text>  
                <Formik
                    initialValues={{
                        name: "",
                        orders: [],
                        phone: "",
                        address: "",
                        email: ""
                        
                    }}
                    onSubmit={(values)=> axios.post('https://localhost:7084/api/Users', {...values, orders: cart}).then((result) => {
                        alert('Order submitted successfully')
                    })}
                    > 
                    {(props) => {
                        {console.log(props.values)}
                        return(
                            <React.Fragment>
                                <form className='orderForm' onSubmit={props.handleSubmit} style={{padding: "30px"}}>
                                    <Stack  tokens={{childrenGap: 25}}>
                                        <TextField 
                                            name='name'
                                            value={props.values.name}
                                            onChange={props.handleChange}
                                            styles={{root: {width: "100%"},    
                                            fieldGroup: {border: 'none', background: '#eee', borderRadius: '5px'}}} 
                                            label='Your Name'/>
                                        <TextField 
                                            name='phone'
                                            value={props.values.phone}
                                            onChange={props.handleChange}
                                            styles={{root: {width: "100%"}, 
                                            fieldGroup: {border: 'none', background: '#eee', borderRadius: '5px'}}} 
                                            label='Your Number'/>
                                        <TextField 
                                            name='email'
                                            value={props.values.email}
                                            onChange={props.handleChange}
                                            styles={{root: {width: "100%"}, 
                                            fieldGroup: {border: 'none', background: '#eee', borderRadius: '5px'}}} 
                                            label='Your Email'/>
                                    {/* </Stack> */}
                                    {/* <Stack horizontal tokens={{childrenGap: 25}}> */}
                                      
                                    {/* </Stack> */}
                                    {/* <Stack horizontal tokens={{childrenGap: 25}}>
                                         */}
                                    
                                    {/* </Stack> */}
                                    {/* <Stack horizontal tokens={{childrenGap: 25}}> */}
                                        <TextField 
                                            name='address'
                                            value={props.values.address}
                                            onChange={props.handleChange}
                                            styles={{root: {width: "100%"}, 
                                            fieldGroup: {border: 'none', background: '#eee', borderRadius: '5px'}}} 
                                            multiline
                                            rows={6}
                                            label='Your Address'/>
                                      
                                         {/* <Text style={{fontWeight: 600}}>Order</Text>
                                         {cart.map((itm:any) => {
                                             <Text>{itm.item}</Text>
                                         })} */}
                                    </Stack>
                                    <Stack horizontal horizontalAlign='center' style={{paddingTop: '15px'}}>
                                        <PrimaryButton 
                                            styles={{root: {background: '#192a56', borderRadius: '5px', border: 'none'}}}
                                            type='submit'>Order Now</PrimaryButton>
                                    </Stack>    
                                </form>
                            </React.Fragment>
                        )
                    }}
                </Formik>
            </Stack>
        </React.Fragment>
    )
}