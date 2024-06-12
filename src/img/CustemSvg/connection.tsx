
import React from 'react';
interface Props{
    isActive:boolean
    className:string
}
function connectionIcon(props:Props) {
    const{isActive,className}=props
    return (
        <div className={className}>


            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 17H19C20.105 17 21 16.105 21 15V12C21 10.895 20.105 10 19 10H18C17.448 10 17 10.448 17 11V16C17 16.552 17.448 17 18 17ZM18 17V18C18 19.105 17.105 20 16 20H13.875M18.5 10V9.5C18.5 5.91 15.59 3 12 3C8.41 3 5.5 5.91 5.5 9.5V10M13.875 20C13.875 19.31 13.315 18.75 12.625 18.75H11.375C10.685 18.75 10.125 19.31 10.125 20C10.125 20.69 10.685 21.25 11.375 21.25H12.625C13.315 21.25 13.875 20.69 13.875 20ZM6 17H5C3.895 17 3 16.105 3 15V12C3 10.895 3.895 10 5 10H6C6.552 10 7 10.448 7 11V16C7 16.552 6.552 17 6 17Z" stroke={isActive?"white":"#434B74"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
    );
}

export default connectionIcon;