
const EmojiCard = (props:any)=>{

    const {title,symbol,keywords}:{title:String, symbol: String, keywords:String} = props.emoji;

    return(
        <div className="card">
            <p>{title}</p>
            <p>{symbol}</p>           
            <p>{keywords}</p>

        </div>
    )
};

export default EmojiCard;