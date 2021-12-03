import Element from './Element';

export default (align = 'bottom-right') => {
  if (Element.get(`#notifier-wrapper${ align ? '.' + align : '' }`)) return
  const NotifierWrapper = new Element('div', { id: 'notifier-wrapper', class: `${align}` });
  document.body.insertAdjacentElement('afterend', NotifierWrapper.render());
}