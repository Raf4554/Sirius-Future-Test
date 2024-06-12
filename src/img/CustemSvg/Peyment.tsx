
import React from 'react';
interface Props{
    isActive:boolean
    className:string
}
function PeymentIcon(props:Props) {
    const{isActive,className}=props
    return (
        <div className={className}>

<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.039 6.91473H17C18.105 6.91473 19 7.80973 19 8.91473V17.9997C19 19.0997 18.1 19.9997 17 19.9997H3C1.895 19.9997 1 19.1047 1 17.9997V7.29074C1 6.45874 1.515 5.71373 2.294 5.41973L12.647 1.51074C13.301 1.26374 14 1.74673 14 2.44573V6.91373" stroke={isActive?"white":"#434B74"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </div>
    );
}

export default PeymentIcon;