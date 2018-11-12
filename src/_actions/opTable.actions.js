import { opTableConstants } from '../_constants';
import { opTableService } from '../_services';

export const opTableActions = {
    getopTable
};

function getopTable() {
    return dispatch => {
        dispatch(request());

        opTableService.getOpTable()
            .then(
                opTable => { 
                    dispatch(success(opTable));
                    console.log(opTable);
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: opTableConstants.GET_OPTABLE_REQUEST } }
    function success(opTable) { return { type: opTableConstants.GET_OPTABLE_SUCCESS, opTable } }
    function failure(error) { return { type: opTableConstants.GET_OPTABLE_FAILURE, error } }
}