import './btn.css';

const Button = ({ label, showLabel, children }) => {
    return (
                <button className='btn' onClick={ () => showLabel(label) }>
                    {children}
                </button>
            )
}

Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button