function PromisesItem(props) {
    return (
        <div className="promises_item">
            <div className="item_img">
                <img src={props.img} alt="img" />
            </div>
            <div className="item__content">
                <div className="item__title">
                    Quality service. Everytime.
                </div>
                <div className="item_text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    corrupti quos dolores et quas.
                </div>
            </div>
        </div>
    );
}

export default PromisesItem;