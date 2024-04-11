import {getMarkers} from '@/api';
import {queryKeys} from '@/constants';
import {Marker, UseQueryCustomOptions} from '@/types';
import {useQuery} from '@tanstack/react-query';

function useGetMarkers(queryOptions?: UseQueryCustomOptions<Marker[]>) {
  return useQuery({
    queryFn: getMarkers,
    queryKey: [queryKeys.MARKER, queryKeys.GET_MERKERS],
    ...queryOptions,
  });
}
export default useGetMarkers;
