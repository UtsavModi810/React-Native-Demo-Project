import AsyncStorage from '@react-native-async-storage/async-storage';
import apiMethods from '../utils/contstant';
import { axiosInstance, axiosInstanceChange } from './serviceInstance';
import { notifyMsg } from '../utils/commonFunctions';
import { checkInternetConnection } from 'react-native-offline';

const logout = (props) => {
    AsyncStorage.clear();
}

const errorResponse = (err) => {
    let errorRes = {};
    errorRes.isSucess = false;
    if (err?.response?.data) {
        errorRes.message = err.response.data.message;
    }
    else {
        errorRes.message = err.message;
        errorRes.error = err.response;
    }
    return errorRes;
}

const successResponse = (response) => {
    let successRes = {};
    successRes.isSucess = true;
    successRes.message = response.data.message;
    successRes.Result = response.data;
    return successRes;
}

export const callService = ({ url, method = "", params = {}, props = {}, contentType = null, }) => {
    return checkInternetConnection().then(isConnected => {
        if (isConnected) {
            if (contentType)
                axiosInstanceChange(contentType);
            switch (method) {
                case apiMethods.apiMethods.POST:
                    return axiosInstance.post(url, params)
                        .then(response => {
                            
                            return successResponse(response)
                        })
                        .catch(error => {
                            
                            return errorResponse(error);
                        });
                case apiMethods.apiMethods.PUT:
                    return axiosInstance.put(url, params)
                        .then(response => {
                            return successResponse(response)
                        })
                        .catch(error => {
                            return errorResponse(error);
                        });
                case apiMethods.apiMethods.DELETE:
                    return axiosInstance.delete(url, params)
                        .then(response => {
                            return successResponse(response)
                        })
                        .catch(error => {
                            return errorResponse(error);
                        });
                default:
                    return axiosInstance.get(url)
                        .then(response => {
                            debugger
                            return successResponse(response)
                        })
                        .catch(error => {
                            debugger
                            return errorResponse(error);
                        });
            }
        } else {
            notifyMsg({ message: "No internet connection!", success: false });
            return;
        }
    });
}