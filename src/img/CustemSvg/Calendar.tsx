
import React from 'react';
interface Props{
    isActive:boolean
    className:string
}
function ayeIcon(props:Props) {
    const{isActive,className}=props
    return (
        <div className={className}>
         
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2V6" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 2V6" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9H21" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.01316 12.7285C6.87516 12.7285 6.76316 12.8405 6.76416 12.9785C6.76416 13.1165 6.87616 13.2285 7.01416 13.2285C7.15216 13.2285 7.26416 13.1165 7.26416 12.9785C7.26416 12.8405 7.15216 12.7285 7.01316 12.7285" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0132 12.7285C11.8752 12.7285 11.7632 12.8405 11.7642 12.9785C11.7642 13.1165 11.8762 13.2285 12.0142 13.2285C12.1522 13.2285 12.2642 13.1165 12.2642 12.9785C12.2642 12.8405 12.1522 12.7285 12.0132 12.7285" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0132 12.7285C16.8752 12.7285 16.7632 12.8405 16.7642 12.9785C16.7642 13.1165 16.8762 13.2285 17.0142 13.2285C17.1522 13.2285 17.2642 13.1165 17.2642 12.9785C17.2642 12.8405 17.1522 12.7285 17.0132 12.7285" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.01316 16.7285C6.87516 16.7285 6.76316 16.8405 6.76416 16.9785C6.76416 17.1165 6.87616 17.2285 7.01416 17.2285C7.15216 17.2285 7.26416 17.1165 7.26416 16.9785C7.26416 16.8405 7.15216 16.7285 7.01316 16.7285" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0132 16.7285C11.8752 16.7285 11.7632 16.8405 11.7642 16.9785C11.7642 17.1165 11.8762 17.2285 12.0142 17.2285C12.1522 17.2285 12.2642 17.1165 12.2642 16.9785C12.2642 16.8405 12.1522 16.7285 12.0132 16.7285" stroke="#434B74" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
    );
}

export default ayeIcon;