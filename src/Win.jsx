import PropTypes from 'prop-types'

function Win(props) {

    function handleRestart() {

        props.onRestart()
    }

    return (
        <div style={{display: props.won ? 'block' : 'none'}}>
            <p>Congrats ! You win :)</p>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}

Win.propTypes = {

    won: PropTypes.bool.isRequired,
    onRestart: PropTypes.func.isRequired
}

export default Win