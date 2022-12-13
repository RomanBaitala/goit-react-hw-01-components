import { Profile } from "./profile/profile";
import user from "../data/user.json";

import { Stats } from "./stats/statistics";
import data from "../data/data.json";

import { FriendList } from "./friendList/friendList";
import friends from "../data/friends.json";

import { Transactions } from "./transactions/transactions";
import transactions from "../data/transactions.json";

import css from "./App.module.css";

export const App = () => {
  return (
    <div>
      <h2 className={css.title}>Task-1</h2>
      <Profile user={user} />
      <h2 className={css.title}>Task-2</h2>
      <Stats title="Upload stats" stats={data} />
      <h2 className={css.title}>Task-3</h2>
      <FriendList friends={friends} />
      <h2 className={css.title}>Task-4</h2>
      <Transactions transactions={transactions} />
    </div>
  );
};
