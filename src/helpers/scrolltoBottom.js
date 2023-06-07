import { animateScroll as scroll } from 'react-scroll';



export const scrollToBottom = ( id ) => {
    scroll.scrollToBottom({
        containerId: id,
        duration: 0
    });
}

export const scrollToBottomAnimated = ( id ) => {
    scroll.scrollToBottom( {
        containerId: id,
        duration: 250
    });
}