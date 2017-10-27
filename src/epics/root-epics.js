
import {combineEpics} from 'redux-observable';

import fetchMessagesEpic from './fetchMessagesEpic';

// combine all epics into one
export const rootEpic = combineEpics(
   fetchMessagesEpic
);