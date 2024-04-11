import {ImageUri, Post} from '@/types';
import axiosInstance from './axios';

type ResponseType = Post & {imges: ImageUri[]};

type RequestCreatPost = Omit<Post, 'id'> & {imageUris: ImageUri[]};

const creatPost = async (body: RequestCreatPost): Promise<ResponseType> => {
  const {data} = await axiosInstance.post('/posts', body);
  return data;
};

export {creatPost};
export type {ResponseType, RequestCreatPost};
