import { USERS } from '../actionTypes/users';

export const followAC = (userId) => ({ type: USERS.FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: USERS.UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: USERS.SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({
  type: USERS.SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: USERS.SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

export const toggleIsFetchingAC = (isFetching) => ({
  type: USERS.TOGGLE_IS_FETCHING,
  isFetching,
});
