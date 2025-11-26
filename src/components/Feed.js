import React from "react";
import Post from "./Post";

const postsData = [
  {
    username: "doglover",
    userImage: "/assets/img/dog.svg",
    postImage: "/assets/img/dog.svg",
    initialLikes: 120,
    caption: "Olha meu dog! 🐶",
  },
  {
    username: "gato_telefone",
    userImage: "/assets/img/gato-telefone.svg",
    postImage: "/assets/img/gato-telefone.svg",
    initialLikes: 95,
    caption: "Gato atendendo o telefone 😹",
  },
  {
    username: "internet_user",
    userImage: "https://i.pravatar.cc/150?img=5",
    postImage: "https://picsum.photos/600/400?random=5",
    initialLikes: 80,
    caption: "Imagem da internet para o post",
  },
];

const Feed = () => {
  return (
    <div className="feed">
      {postsData.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          userImage={post.userImage}
          postImage={post.postImage}
          initialLikes={post.initialLikes}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Feed;
