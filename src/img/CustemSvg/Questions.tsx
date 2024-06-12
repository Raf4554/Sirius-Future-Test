
import React from 'react';
interface Props{
    isActive:boolean
    className:string
}
function QuestionsIcon(props:Props) {
    const{isActive,className}=props
    return (
        <div className={className}>

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.0002" cy="11.9997" r="9.00375" stroke={isActive?"white":"#434B74"}stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12.7114L13.3276 11.9738C13.9901 11.6058 14.401 10.9075 14.401 10.1496C14.3225 8.88929 13.2417 7.92852 11.9808 7.99833C10.8543 7.95156 9.85385 8.71311 9.599 9.81149" stroke={isActive?"white":"#434B74"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.1002 15.9018C12.1001 15.957 12.0553 16.0017 12.0001 16.0017C11.9449 16.0017 11.9001 15.9569 11.9001 15.9017C11.9001 15.8465 11.9448 15.8017 12 15.8016C12.0266 15.8016 12.0521 15.8121 12.0709 15.8309C12.0897 15.8497 12.1002 15.8752 12.1002 15.9018" stroke={isActive?"white":"#434B74"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>
    );
}

export default QuestionsIcon;