import PropTypes from 'prop-types'

function Word(props) {

    let result = ''

    for(const letter of [...props.currentWord]) {

        if(props.lettersFound.includes(letter)) {

            result += letter + ' '
        }
        else {

            result += '_ '
        }
    }

    return <div>{result}</div>
}

Word.propTypes = {

    currentWord: PropTypes.string.isRequired,
    lettersFound: PropTypes.array.isRequired
}

export default Word