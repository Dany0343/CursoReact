import PropTypes from 'prop-types'

export function Button({text = 'bruh', name = 'Joe Biden'}) {
    return <button onClick={() => alert("Hola mundo!")}>
        {text} - {name}
    </button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Joe Biden'
}