
import userData from "../src/components/Profile/userData.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/Transaction/TransactionHistory"
import "./index.css"
import friends from './components/FriendList/friends.json'
import transactions from '../src/components/Transaction/transactions.json'


const App = () => {
  return (
    <div>
      <Profile 
name={userData.username}
tag={userData.tag}
location={userData.location}
image={userData.avatar}
stats={userData.stats}
/>
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;