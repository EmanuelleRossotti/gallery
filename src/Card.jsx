const Card = ({element}) => {
    console.log(element)
    return (
        <div className="cardImgContainer">
            <img className='imagen' src={element.url}></img>
            <div className='textareaHolder'>
                <textarea></textarea>
                <button>Save</button>
            </div>
        </div>
    )
}

export default Card