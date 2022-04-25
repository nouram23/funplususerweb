import request from "utils/request";

export const detail = (id) => request.get(`/api/v1/public/service/${id}`);
export const list = (data) => request.get(`/api/v1/public/service`, data);
