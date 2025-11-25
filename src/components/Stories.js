export default function Stories() {
    const stories = [
        { img: "assets/img/9gag.svg", user: "9gag" },
        { img: "assets/img/meowed.svg", user: "meowed" },
        { img: "assets/img/barked.svg", user: "barked" },
        { img: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
        { img: "assets/img/wawawicomics.svg", user: "wawawicomics" },
        { img: "assets/img/respondeai.svg", user: "respondeai" },
        { img: "assets/img/filomoderna.svg", user: "filomoderna" },
        { img: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }
    ];

    return (
        <div className="stories-container">
            <div className="stories-scroll">
                {stories.map((s) => (
                    <div className="story" key={s.user}>
                        <div className="story-border">
                            <img src={s.img} alt={s.user} />
                        </div>
                        <div className="story-user">{s.user}</div>
                    </div>
                ))}
            </div>

            <div className="stories-arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
