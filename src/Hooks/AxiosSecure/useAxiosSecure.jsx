
import axios from "axios";
import { Navigate } from "react-router-dom";
import useAuth from "./../useAuth"

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000/'
})
const useAxiosSecure = () => {
    const { logout } = useAuth()

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token') 
        config.headers.authorization = token;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });


    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status; 

        if (status === 401 || status === 403) {
            await logout();
            return <Navigate to='/login' replace></Navigate>
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;