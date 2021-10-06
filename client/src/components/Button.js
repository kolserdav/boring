export default function Button(props) {
    const { title = 'button', leftImg, rightImg, ...restProps } = props;
    return (
        <button {...restProps}>
            {leftImg && <img alt={title} src={leftImg} />}
            {title}
            {rightImg && <img alt={title} src={rightImg} />}
        </button>
    )
}