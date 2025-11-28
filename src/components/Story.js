export default function Story({ img, user }) {
    return (
        <div className="story">
            <div className="story-border">
                <img src={img} alt={user} />
            </div>
            <div className="story-user">{user}</div>
        </div>
    );
}
