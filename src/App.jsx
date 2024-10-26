
import userData from "../src/components/Profile/userData.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList"
import Transaction from "./components/Transaction/Transactions"
import "./index.css"
import friends from './components/FriendList/friends.json'


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
      
      <Transaction />
    </div>
  );
};

export default App;