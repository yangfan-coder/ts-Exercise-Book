type EventNames = 'click' | 'scroll' | 'mousemove';

function handleEvent(ele: Element, event: EventNames) {}

/* 正确 */
handleEvent(document.querySelector('div'), 'click');

/* 报错 */
// handleEvent(document.querySelector('div'), 'dblclick');
