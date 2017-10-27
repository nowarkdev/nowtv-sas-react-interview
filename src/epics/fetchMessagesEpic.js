import {Observable} from 'react-redux';
import {getChatLog} from '../service';
export const fetchMessagesEpic = action$ =>
    action$.ofType('Fetch_Messages_NT')
        .mergeMap(action =>
             getChatLog().then((messages) => {
                return Observable.of({type:'Fetch_Messages_SUCCESS_NT', payload:messages})
                 })
                // .map(ev => {
                //     console.log(ev);
                    
                // }) // output success
        );