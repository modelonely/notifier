export default class Element {
  constructor(tagName, attributes = {}, content = '') {
    this.tagName = tagName;
    this.attributes = attributes;
    this.children = [];
    this.content = content;
    this.el = document.createElement(this.tagName);
    this.init();
  }

  init() {
    if (this.content) this.text(this.content);
  }

  appendChild(child) {
    this.children.push(child);
  }

  html(html) {
    this.el.innerHTML = html;
  }

  text(text) {
    this.el.textContent = text;
  }

  render() {
    Object.keys(this.attributes).forEach(attr => {
      this.el.setAttribute(attr, this.attributes[attr]);
    });
    this.children.forEach(child => {
      this.el.appendChild(child.render());
    });
    return this.el;
  }

  remove() {
    this.el.remove();
  }

  static get(query) {
    return document.querySelector(query);
  }
}