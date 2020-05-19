enum MEDIA_TYPE {
  IMAGE,
  VIDEO,
  AUDIO,
  STICKER,
};

const USER_STATUS: Record<string, string> = {
  NONE: '',
  WAITING: 'waiting',
  PAIRED: 'paired',
};

const COMMAND: Record<string, string> = {
  GET_STARTED: 'GET_STARTED',
  START_CHAT: 'start',
  END_CHAT: 'end',
};

export {
  MEDIA_TYPE,
  USER_STATUS,
  COMMAND,
} 