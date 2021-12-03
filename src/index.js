import Notification from './Notification';

export default class Notifier {
  constructor(options = {}) {
    this.options = options;
    this.notifications = [];
    this.init();
  }

  init() {
    const notification = new Notification(this.options);
    this.notifications.push(notification);
  }

  add(notification) {
    this.notifications.push(notification);
  }

  remove(notification) {
    this.notifications = this.notifications.filter(n => n !== notification);
  }

  clear() {
    this.notifications = [];
  }

  getNotifications() {
    return this.notifications;
  }
}