export const STATES = {
  IDLE: 'IDLE',
  LISTENING: 'LISTENING',
  PROCESSING: 'PROCESSING',
  SPEAKING: 'SPEAKING',
  PAUSED: 'PAUSED',
  OFFLINE: 'OFFLINE',
  ERROR: 'ERROR',
};

export const TRANSITIONS = {
  [STATES.IDLE]: [STATES.LISTENING, STATES.OFFLINE],
  [STATES.LISTENING]: [STATES.PROCESSING, STATES.ERROR, STATES.PAUSED],
  [STATES.PROCESSING]: [STATES.SPEAKING, STATES.ERROR, STATES.OFFLINE],
  [STATES.SPEAKING]: [STATES.IDLE, STATES.PAUSED],
  [STATES.PAUSED]: [STATES.IDLE],
  [STATES.OFFLINE]: [STATES.IDLE],
  [STATES.ERROR]: [STATES.IDLE],
};

export const initialState = {
  current: STATES.IDLE,
  error: null,
};

let listeningTimer = null;

const LISTENING_TIMEOUT_MS = 8000;

export function jarvisReducer(state, action) {
  switch (action.type) {
    case 'START_LISTENING':
      if (state.current !== STATES.IDLE) return state;
      return { ...state, current: STATES.LISTENING, error: null };
    case 'AUDIO_CAPTURED':
      if (state.current !== STATES.LISTENING) return state;
      return { ...state, current: STATES.PROCESSING };
    case 'AI_RESPONSE_READY':
      if (state.current !== STATES.PROCESSING) return state;
      return { ...state, current: STATES.SPEAKING };
    case 'SPEAKING_DONE':
      return { ...state, current: STATES.IDLE, error: null };
    case 'PAUSE':
      return { ...state, current: STATES.PAUSED };
    case 'RESUME':
      return { ...state, current: STATES.IDLE };
    case 'OFFLINE':
      return { ...state, current: STATES.OFFLINE };
    case 'ERROR':
      return { ...state, current: STATES.ERROR, error: action.error || 'Unknown error' };
    case 'PANIC_OFF':
      return { ...initialState };
    default:
      return state;
  }
}

export function startListening(dispatch) {
  dispatch({ type: 'START_LISTENING' });
  clearTimeout(listeningTimer);
  listeningTimer = setTimeout(() => {
    dispatch({ type: 'ERROR', error: 'Listening timeout' });
  }, LISTENING_TIMEOUT_MS);
}

export function stopListening() {
  clearTimeout(listeningTimer);
}

export function panicOff(dispatch) {
  stopListening();
  dispatch({ type: 'PANIC_OFF' });
}
