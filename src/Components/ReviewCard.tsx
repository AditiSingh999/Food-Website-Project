import { Stack, Text } from '@fluentui/react';
import React from 'react';
interface IReviewCard {
    img: any,
    content: string,
    name: string
}

export const ReviewCard: React.FC<IReviewCard> = ({img, content, name} : IReviewCard) => {
    return(
        <React.Fragment>
            <Stack className='review-box'>
                <Stack horizontal horizontalAlign='space-between' className='image-box'>
                    <img src={img} alt="" />
                    <Text className='review-name'>{name}</Text>
                </Stack>
                <Text className='review-content'>{content}</Text>
            </Stack>
        </React.Fragment>
    )
}