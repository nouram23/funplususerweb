import request from "utils/request";

export const detail = (id) => request.get(`/api/v1/public/service/${id}`);
