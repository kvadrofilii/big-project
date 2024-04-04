import { rtkApi } from '@/shared/api';
import type { Notification } from '../model/types/notification.types';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
