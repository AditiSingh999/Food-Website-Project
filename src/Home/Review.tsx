import React from "react";
import { Stack, Text } from '@fluentui/react';
import pic1 from '../images/pic-1.png';
import pic2 from '../images/pic-2.png';
import pic3 from '../images/pic-3.png';
import { ReviewCard } from "../Components/ReviewCard";

export const Review: React.FC = () => {
    return(
        <React.Fragment>
            <Stack className="main-container" id="review">
                <Text className='sub-heading'>Customer's Review</Text>
                <Text className='heading'>WHAT THEY SAY</Text>
                <Stack horizontal horizontalAlign='space-around' style={{paddingTop: '35px'}}>
                    <ReviewCard 
                        img={pic1} 
                        name='Sam Michel' 
                        content='This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.'
                    />
                    <ReviewCard 
                        img={pic2} 
                        name='Audrey Alice' 
                        content=' Do yourself a favor and visit this lovely restaurant in (YM). The service is unmatched. The staff truly cares about your experience. The food is absolutely amazing – everything we tasted melted in other mouths. Absolutely the best meal we had while in (YM). Highly recommend!.'
                    />
                    <ReviewCard 
                        img={pic3} 
                        name='Miller Jonas' 
                        content=' Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.'
                    />
                </Stack>
            </Stack>
        </React.Fragment>
    )
} 