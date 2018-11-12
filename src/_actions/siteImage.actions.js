import { siteImageConstants } from '../_constants';
import { siteImageService } from '../_services';

export const siteImageActions = {
    getsiteImage
};

function getsiteImage() {
    return dispatch => {
        dispatch(request());

        siteImageService.getSiteImage()
            .then(
                siteImage => { 
                    dispatch(success(siteImage));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: siteImageConstants.GET_SITEIMAGE_REQUEST } }
    function success(siteImage) { return { type: siteImageConstants.GET_SITEIMAGE_SUCCESS, siteImage } }
    function failure(error) { return { type: siteImageConstants.GET_SITEIMAGE_FAILURE, error } }
}