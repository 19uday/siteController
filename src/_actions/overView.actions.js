import { overViewConstants } from '../_constants';
import { overViewService } from '../_services';

export const overViewActions = {
    getoverView
};

function getoverView() {
    return dispatch => {
        dispatch(request());

        overViewService.getOverView()
            .then(
                overView => { 
                    dispatch(success(overView));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: overViewConstants.GET_OVERVIEW_REQUEST } }
    function success(overView) { return { type: overViewConstants.GET_OVERVIEW_SUCCESS, overView } }
    function failure(error) { return { type: overViewConstants.GET_OVERVIEW_FAILURE, error } }
}