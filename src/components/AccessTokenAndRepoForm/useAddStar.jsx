import { useMutation } from '@apollo/client';
import { STAR_REPOSITORY } from '../../operations/mutations';


export default function useAddStar() {
  const [mutate, { data, error }] = useMutation(STAR_REPOSITORY, {
    update: (cache) => {
      cache.modify('ROOT_QUERY', {
        repository: (
          existingData, { toReference },
        ) => ({
          ...existingData,
          viewerHasStarred: toReference(data.viewerHasStarred),
          edges: [...existingData.edges],
        }),
      });
    },
  });
  return { mutate, data, error };
}
