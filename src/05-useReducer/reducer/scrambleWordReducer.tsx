export interface ScrambleWordState { 
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number;
}

export type ScrambleWordAction = {
    type: 'TESTING ';
}

const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = (): ScrambleWordState => {

    const suffleWords = shuffleArray([...GAME_WORDS]);

    return {
        currentWord: suffleWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(suffleWords[0]),
        skipCounter: 0,
        words: shuffleArray(GAME_WORDS),
        totalWords: GAME_WORDS.length,
    };
};

export type ScrambleWordsAction = 

| { type: 'SET_GUESS', payload: string }
| { type: 'CHECK_ASWER'}
| { type: 'START_NEW_GAME', payload: ScrambleWordState }
| { type: 'SKIP_WORD' };

export const scrambleWordReducer = ( state: ScrambleWordState, action: ScrambleWordsAction): ScrambleWordState => {

    switch (action.type) {

        case 'SET_GUESS':
            return {
                ...state,
                guess: action.payload.trim().toUpperCase(),
            };
        case 'CHECK_ASWER': {
            if(state.currentWord === state.guess) {
                const newWords = state.words.slice(1);
                return {
                    ...state,
                    words: newWords,
                    points: state.points + 1,
                    guess: '',
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0]),
                };
            }

            return{
                ...state,
                errorCounter: state.errorCounter + 1,
                guess: '',
                isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
            };
        }
        case 'SKIP_WORD': {
            if(state.skipCounter >= state.maxSkips) return state;

            const newWords = state.words.slice(1);
            return {
                ...state,
                words: newWords,
                skipCounter: state.skipCounter + 1,
                guess: '',
                currentWord: newWords[0],
                scrambledWord: scrambleWord(newWords[0]),
            };
        }
        case 'START_NEW_GAME': {
            return action.payload;
        }

        default:
            return state;
    }
}
    