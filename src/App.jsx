import userData from "./components/data/userData.json";
import Profile from "./components/Profile/Profile";

import FriendList from "./components/FriendList/FriendList";
import friends from "./components/data/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/data/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
