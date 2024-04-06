import { AxiosError } from 'axios';
import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

type ResponseError = AxiosError<{
  statusCode: string;
  message: string;
  error: string;
}>;

type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ResponseError, TVariables, unknown>,
  'mutationFn'
>;

type UseQueryCustomOptions<TQueyFnData = unknown, TData = TQueyFnData> = Omit<
  UseQueryOptions<TQueyFnData, ResponseError, TData, QueryKey>,
  'queryKey'
>;

export type { ResponseError, UseMutationCustomOptions, UseQueryCustomOptions };
