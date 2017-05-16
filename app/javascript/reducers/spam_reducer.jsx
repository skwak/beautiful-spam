import { GET_SPAM, GET_SPAM_BY_CATEGORY } from '../actions/index';

export default function(state = [], action) {

   switch (action.type) {
      case GET_SPAM:
         return [ action.payload.data, ...state ];
      case GET_SPAM_BY_CATEGORY:
        return [ action.payload.data, action.display, ...state ];
   }
   return state;
}
