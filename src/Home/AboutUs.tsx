import { Stack, Text } from '@fluentui/react';
import React from 'react';
import aboutImg from '../images/about-img.png';

export const AboutUs: React.FC = () => {
    return(
        <React.Fragment>
            <Stack className="main-container" id ='about'>
                <Text className='sub-heading'>About Us</Text>
                <Text className='heading'>WHY CHOOSE US?</Text>
                <Stack horizontal horizontalAlign='space-between' tokens={{childrenGap: 15}}>
                    <img width="50%" alt='' src={aboutImg}/>
                    <Stack>
                       <Text className='heading' style={{paddingTop:'50px'}}>Best Food In The Country</Text> 
                       <Text style={{paddingTop:'20px', fontSize:'20px', color:'#27ae60', fontWeight:500}}>Yummie Wheels helps you find and order food from wherever you are. How it works: you type in an address, we tell you the restaurants that deliver to that locale. Want to be more specific? Search by cuisine menu item. We'll filter your results accordingly. When you find what you're looking for, you can place your order online or by phone, free of charge.</Text>
                        <br/>
                        <br/>
                       <Text style={{ fontSize:'20px' , color:'#27ae60',fontWeight:500}}> Oh, and we also give you access to reviews, coupons, special deals and a 24/7 customer care team that tracks each order and makes sure you get exactly what you want.</Text>

                    </Stack>
                </Stack>
            </Stack>
        </React.Fragment>
    )
}