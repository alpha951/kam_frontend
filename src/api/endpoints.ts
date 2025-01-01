export const API_ENDPOINTS = {
    AUTH: {
      LOGIN: '/auth/login',
    },
    KAM_USERS: {
      CREATE: '/kam-user/create-user',
      UPDATE_USER_ROLE: '/kam-user/update-user-role',
    },
    RESTAURANTS: {
        CREATE: '/restaurant/create',
        UPDATE: '/restaurant/update',
        GET_BY_CREATOR: '/restaurant/get',
        GET_BY_ID: '/restaurant/get-by-id',
        GET_ALL: '/restaurant/all',
    },
    POC: {
        CREATE: '/poc/create',
        UPDATE: '/poc/update',
        GET_BY_RESTAURANT: '/poc/get/restaurant',
        GET_BY_ID: '/poc/get',
    },
    LEADS: {
        CREATE: '/leads/create',
        UPDATE_STATUS: '/leads/update-status',
        GET_BY_CREATOR: '/leads/get-by-creator',
        GET_ALL: '/leads/get-all',
        GET_BY_ID: '/leads/get-by-id',
    },
    INTERACTIONS: {
        CREATE: '/interaction/create',
        GET_BY_LEAD: '/interaction/get-by-lead',
        GET_BY_RESTAURANT: '/interaction/get-by-restaurant',
        GET_BY_CALL_SCHEDULE: '/interaction/get-by-call-schedule',
        GET_BY_POC: 'interaction/get-by-poc',
        GET_BY_KAM: 'interaction/get-by-kam',
    },
    ORDERS: {
        CREATE: '/orders/create',
        UPDATE_ORDER_STATUS: '/orders/update-status',
        GET_BY_RESTAURANT: '/orders/get-by-restaurant',
        GET_BY_ID: '/orders/',
    },
    CALL_SCHEDULE: {
        CREATE: '/call-schedule/create',
        GET_BY_DAY: '/call-schedule/get-by-day',
        GET_BY_ID: '/call-schedule/get',
        GET_BY_LEAD: '/call-schedule/get-by-lead',
    },
    ANALYTICS: {
        GET: '/analytics/get-metric',
    },
  } as const;