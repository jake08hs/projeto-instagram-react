import React, { useState } from "react";

export default function Post({ username, userImage, postImage, initialLikes, caption }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const toggleSave = () => setSaved(!saved);

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={userImage} alt={username} />
          <strong>{username}</strong>
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={postImage} alt="post" onClick={toggleLike} style={{ cursor: "pointer" }} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={liked ? "heart" : "heart-outline"}
              onClick={toggleLike}
              style={{ color: liked ? "red" : "black", cursor: "pointer" }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={saved ? "bookmark" : "bookmark-outline"}
              onClick={toggleSave}
              style={{ cursor: "pointer" }}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={userImage} alt={username} />
          <span>
            Curtido por <strong>{username}</strong> e <strong>{likes} pessoas</strong>
          </span>
        </div>

        <div className="caption">
          <strong>{username}</strong> {caption}
        </div>
      </div>
    </div>
  );
}
