import Element from "./Element";
import Loader from './Loader';

export default class Notification {
  constructor({ title, message, type = 'dark', align, duration = 3000 }) {
    this.element = new Element('div', {
      id: `notifier-${Date.now()}`,
      class: `notifier ${type}`
    });
    this.title = title;
    this.message = message;
    this.duration = duration;
    this.align = align;
    this.init();
  }

  init() {
    Loader(this.align);
    this.create();
    this.show();
    this.timer();
  }

  show() {
    this.render()
    Element.get(`#notifier-wrapper${ this.align ? '.' + this.align : '' }`).appendChild(this.rendered);
  }

  render() {
    this.rendered = this.element.render();
    this.rendered.onclick = () => {
      this.remove();
    };
    this.rendered.classList.add('fade-in');
    setTimeout(() => {
      this.rendered.classList.remove('fade-in');
    }, 1000);
  }

  create() {
    const title = new Element('p', {
      class: 'title'
    }, this.title);
    const message = new Element('p', {
      class: 'message'
    }, this.message);
    
    this.element.appendChild(title);
    this.element.appendChild(message);
  }

  remove() {
    this.rendered.classList.add('hide');
    setTimeout(() => {
      this.rendered.remove();
    }, 600);
  }

  timer() {
    setTimeout(() => {
      this.remove();
    }, this.duration);
  }
}