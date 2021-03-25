import PropTypes from 'prop-types'

function Loose(props) {

    function handleRestart() {

        props.onRestart()
    }

    return (
        <div style={{display: props.loose ? 'block' : 'none'}}>
            <p>Aaaaaw :'( You loose ...</p>
            <button onClick={handleRestart}>Try again</button>
        </div>
    )
}

Loose.propTypes = {

    loose: PropTypes.bool.isRequired,
    onRestart: PropTypes.func.isRequired
}

export default Loose