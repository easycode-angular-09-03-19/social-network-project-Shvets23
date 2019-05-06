import { followUser } from './follow.user.interface';

export interface followings {
    count: Number,
    users?: Array<followUser>
}