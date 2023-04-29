import { useCreateContext } from '../create-context';
import { reducer, initialState } from './app.reducer';


function Dewey() {
    const [state, useDispatch, provider] = useCreateContext(initialState, reducer);

}

export const useStickyState = Dewey.state;
export const useStickyDispatch  = Dewey.useDispatch;
export const StickyProvider = Dewey.provider;