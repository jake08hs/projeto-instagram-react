import React, { useState } from "react";

// Lista de usuários dos stories
const storyUsers = [
  { img: "/assets/img/9gag.svg", user: "9gag" },
  { img: "/assets/img/meowed.svg", user: "meowed" },
  { img: "/assets/img/barked.svg", user: "barked" },
  { img: "/assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
  { img: "/assets/img/wawawicomics.svg", user: "wawawicomics" },
  { img: "/assets/img/respondeai.svg", user: "respondeai" },
  { img: "/assets/img/filomoderna.svg", user: "filomoderna" },
  { img: "/assets/img/memeriagourmet.svg", user: "memeriagourmet" },
];

const Post = ({ username, userImage, postImage, initialLikes, caption }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [lastLiker, setLastLiker] = useState(null); // armazena quem curtiu

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
      // escolhe um usuário aleatório dos stories
      const randomUser =
        storyUsers[Math.floor(Math.random() * storyUsers.length)];
      setLastLiker(randomUser);
    } else {
      setLikes(likes - 1);
      setLiked(false);
      setLastLiker(null);
    }
  };

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
        <img src={postImage} alt="Post" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={liked ? "heart" : "heart-outline"}
              onClick={handleLike}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          {/* Avatar de quem curtiu */}
          {lastLiker && <img src={lastLiker.img} alt={lastLiker.user} />}
          <span>
            {likes} curtidas {lastLiker ? `(curtido por ${lastLiker.user})` : ""}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
