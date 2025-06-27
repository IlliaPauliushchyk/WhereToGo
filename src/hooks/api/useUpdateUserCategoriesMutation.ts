import {updateUserCategories} from '@/lib';
import {selectUser} from '@/store';
import {useMutation} from '@tanstack/react-query';
import {useAppDispatch, useAppSelector} from '../redux';

export const useUpdateUserCategoriesMutation = () => {
  const dispatch = useAppDispatch();
  const {uid} = useAppSelector(selectUser);

  return useMutation({
    mutationFn: (categories: string[]) =>
      updateUserCategories(uid!, categories, dispatch),
  });
};
