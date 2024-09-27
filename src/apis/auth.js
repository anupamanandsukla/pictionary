import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import TokenService from "../utils/TokenService";
import axiosInstance from "./axios";
import apiRoutes from "./apiroutes";
import uiRoutes from "../config/routeNames";


export const LoginUserFn = (onSuccess = () => { }, onError = () => { }) => {
  return useMutation({
    mutationFn: async (user) => {
      const response = await axiosInstance.post(apiRoutes('LOGIN'), user);
      // Need to store token into localStorage and validate
      if (response?.data?.data?.user?.token)
        TokenService.updateLocalAccessToken(response.data.data.user.token);
      return response.data;
    },
    onSuccess: (response, variable, context) => {
      toast(response?.message, { type: response.isError ? 'error' : 'success' });
      onSuccess(response);
    },
    select: (data) => data,
    onError: (error) => {
      onError(error?.response?.data);
    },
  });
};

export const ChangePassword = (onSuccess = () => { }, onError = () => { }) => {
  return useMutation({
    mutationFn: async (user) => {
      const response = await axiosInstance.post(apiRoutes('RESET'), user);
      return response.data;
    },
    onSuccess: (response, variable, context) => {
      toast(response?.message, { type: response.isError ? 'error' : 'success' });
      onSuccess(response);
    },
    select: (data) => data,
    onError: (error) => {
      toast.error('Something went wrong in our side, Please try again later');
      onError(error?.response?.data);
    },
  });
};

export const SetPassword = (onSuccess = () => { }, onError = () => { }) => {
  return useMutation({
    mutationFn: async (user) => {
      const response = await axiosInstance.post(apiRoutes('PASSWORD_SET'), user);
      return response.data;
    },
    onSuccess: (response, variable, context) => {
      toast(response?.message, { type: response.isError ? 'error' : 'success' });
      onSuccess(response);
    },
    select: (data) => data,
    onError: (error) => {
      toast.error(error?.data?.message)
      onError(error?.response?.data);
    },
  });
};

export const CheckLinkValid = (onSuccess = () => { }, onError = () => { }) => {
  return useMutation({
    mutationFn: async (token) => {
      const response = await axiosInstance.post(apiRoutes('PASSWORD_RESET_VALID'), {
        token: token
      });
      return response.data;
    },
    onSuccess: (response, variable, context) => {
      toast(response?.message, { type: response.isError ? 'error' : 'success' });
      onSuccess(response);
    },
    select: (data) => data,
    onError: (error) => {
      toast.error(error?.data?.message)
      onError(error?.response?.data);
    },
  });
};

export const RecoverPassword = (onSuccess = () => { }, onError = () => { }) => {
  return useMutation({
    mutationFn: async (user) => {
      const response = await axiosInstance.post(apiRoutes('PASSWORD_RECOVERY'), user);
      return response.data;
    },
    onSuccess: (response, variable, context) => {
      toast(response?.message, { type: response.isError ? 'error' : 'success' });
      onSuccess(response);
    },
    select: (data) => data,
    onError: (error) => {
      toast.error(error?.response?.data);
      onError(error?.response?.data);
    },
  });
};

export const Logout = (
  onSuccess = () => { },
  onError = () => { }
) => {

  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();

  return useQuery({
    queryKey: ["logout"],
    queryFn: async (user) => {
      try {
        const response = await axiosInstance.get(apiRoutes('LOGOUT'));
        return response;
      } catch (e) { }
    },
    onSuccess: async (response, variable, context) => {
      toast.success("Successfully logged out")
      navigate(uiRoutes('LOGIN'));
      dispatch({
        type: "TOGGLE_IS_LOGGEDIN",
      });
      dispatch({
        type: "SET_CURRENT_USER",
        payload: null,
      });
      window.localStorage.clear();
      onSuccess(response);
    },
    retry: false,
    enabled: false,
    select: (response) => response.data,
    onError: (error) => {
      onError(error?.response?.data);
    },
  });
};