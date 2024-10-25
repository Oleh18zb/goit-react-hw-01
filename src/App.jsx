import userData from "../src/userData.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList"
import Transaction from "./components/Transaction/Transactions"


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
      <FriendList />
      <Transaction />
    </div>
  );
};

export default App;