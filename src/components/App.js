import { Profile } from "./profile/profile";
import user from "../data/user.json";

import { Stats } from "./stats/statistics";
import data from "../data/data.json";

import { FriendList } from "./friendList/friendList";
import friends from "../data/friends.json";

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Stats title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
