import './Button.css';

const Button = ({ onclick, ...allyProps }) => (
    <div className="buttonPosition">
        <button type='button' className='Button' onClick={onclick} {...allyProps}>Load more</button>
    </div>
)

export default Button