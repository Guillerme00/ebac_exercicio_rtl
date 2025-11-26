import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWrYzYfOxKbLaWUYh5NjmWlIzv3tJ9VGKza_lT0vqiokD6SYcmLeVphAEhJDshVOwIbytHkEskh3axeUovLfLYsgnTn2U7zWHvuZo4sLQzIV9Fqq17_iJX">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
