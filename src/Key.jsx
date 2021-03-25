import './Key.css'
import PropTypes from 'prop-types'

function Key(props) {

    function handleClick() {

        props.onClick(props.keyValue)
    }

    function getClassnameByState(state) {

        switch(state) {
            case 'none' :
                return 'key'
            case 'matched' :
                return 'key matched-key'
            case 'mismatched' :
                return 'key mismatched-key'
            default:
                return 'key'
        }
    }

    return (
            <li 
                key={props.keyValue}
                className={getClassnameByState(props.state)}
                onClick={handleClick}>
                    {props.keyValue}
            </li>
    )
}

Key.propTypes = {

    keyValue: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['none', 'matched', 'mismatched']),
    onClick: PropTypes.func.isRequired
}

export default Key