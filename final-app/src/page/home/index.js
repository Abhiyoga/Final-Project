import Navbar from "../../component/Navbar"
import Tracks from "../../component/Tracks"
import UserPlaylist from "../../component/Playlist/index"

const Home = () => {
  return (
    <div className="App flex flex-col min-h-screen">
        <Navbar />
        <UserPlaylist />
        <Tracks />
    </div>
  );
}

export default Home; 