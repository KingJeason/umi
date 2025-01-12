import EventEmitter from 'events';

const event = new EventEmitter();
event.setMaxListeners(20);

export const MESSAGES = {
  SHOW_LOG: Symbol('SHOW_LOG'),
  HIDE_LOG: Symbol('HIDE_LOG'),
  CHANGE_GLOBAL_ACTION: Symbol('CHANGE_GLOBAL_ACTION'),
};

export default event;
