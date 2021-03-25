import './PenduPic.css'
import PropTypes from 'prop-types'

function PenduPic(props) {

    return (
        <div className="pendu-pic-container">
            <img 
                src="pendu-img.png"
                alt="pendu"
                className={`pendu-${props.guesses}`}
            />
        </div>   
    )
}

PenduPic.propTypes = {

    guesses: PropTypes.number.isRequired
}

export default PenduPic