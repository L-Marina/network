import { USERS } from '../actionTypes/users';

export const followAC = (userId) => ({
  type: USERS.FOLLOW,
  payload: userId,
});

export const unfollowAC = (userId) => ({
  type: USERS.UNFOLLOW,
  payload: userId,
});

export const setUsersAC = (users) => ({
  type: USERS.SET_USERS,
  payload: users,
});

export const setCurrentPageAC = (currentPage) => ({
  type: USERS.SET_CURRENT_PAGE,
  payload: currentPage,
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: USERS.SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount,
});

export const toggleIsLoadingAC = (isLoading) => ({
  type: USERS.TOGGLE_IS_LOADING,
  payload: isLoading,
});
