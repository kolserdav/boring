const Button = (props) => {
    return (
        <button
            className={props.button_className}
            onClick={props.onClick}
            type={props.button_type}
        >
            {props.button_leftImg && <img alt={props.button_title} src={props.button_rightImg} />}
            {props.button_title}
            {props.button_rightImg && <img alt={props.button_title} src={props.button_rightImg} />}
        </button>
    )
}

export default Button