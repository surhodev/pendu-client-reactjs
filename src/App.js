import './App.css';
import { Component } from 'react';
import Key from './Key'
import Word from './Word'
import Win from './Win';
import PenduPic from './PenduPic';
import Loose from './Loose';
import Dictionary from './Dictionary';

class App extends Component {

    INITIAL_KEYS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map(l => {return {value: l, state: 'none'}})

    INITIALE_STATE = {

        keys: JSON.parse(JSON.stringify(this.INITIAL_KEYS)),

        currentWord: Dictionary.getOne(),

        guesses: 0,
        lettersFound: [],
        won: false,
        loose: false
    }

    // Initialise the state
    // Deep clone of INITIAL_START
    // cause the spread copy make a shallow copy
    // and note a "hard copy"
    state = JSON.parse(JSON.stringify(this.INITIALE_STATE))

    // Main place of all the game's logic
    handleKeyChoice(key) {

        // Check is the game is win or loose
        // to stop the game
        if(this.state.won || this.state.loose) 
            return

        // Create copy of state variable
        // that I'll change in this function
        const keys = [...this.state.keys]
        const lettersFound = this.state.lettersFound
        let won = true
        let loose = false
        let guesses = this.state.guesses

        // Check clicked index in keys
        const index = keys.findIndex(e => e.value === key )

        // Check if the selected key is right
        if(index === -1)
            return
        
        // Check if the clicked letter
        // is in currentWord
        keys[index].state = 'mismatched'
        for(const letter of [...this.state.currentWord]) {

            if(letter === key) {

                keys[index].state = 'matched'
                lettersFound.push(key)
                continue
            }
        }

        // Check if letter is not matched
        // to increment guesses
        if(keys[index].state !== 'matched')
            guesses++


        // Check if the word is totally found
        for(const letter of [...this.state.currentWord]) {

            if( !lettersFound.includes(letter) ) 
                won = false
        }

        // If the number of guesses is too high
        // the player loose the game
        if(guesses >= 7) 
            loose = true
            
        // Update state of this compenent 
        // with the new performed values
        this.setState({ keys, lettersFound, won, loose, guesses })
    }

    handleRestart() {

        let { keys, currentWord, lettersFound, won, loose, guesses} = this.INITIALE_STATE

        // Deep clone to clone INSIDE objects too
        keys = JSON.parse(JSON.stringify(this.INITIAL_KEYS))
        lettersFound = []
        currentWord = Dictionary.getOne()

        this.setState({ keys, currentWord, lettersFound, won, loose, guesses })
    }

    componentDidMount() {

        document.addEventListener('keyup', ((event) => this.handleKeyChoice(event.key.toUpperCase())))
    }

    render() {

        return (
            <div className="App">

                <PenduPic guesses={this.state.guesses}/>

                <br /><br />

                <div>
                    <Word 
                        lettersFound={this.state.lettersFound} 
                        currentWord={this.state.currentWord} 
                        />
                </div>

                <ul>
                    {this.state.keys.map(k => {
                        return <Key 
                            key={k.value} 
                            keyValue={k.value} 
                            state={k.state}
                            onClick={(value) => {this.handleKeyChoice(value)}}
                            />
                    })}
                </ul>

                <Win 
                    won={this.state.won}
                    onRestart={() => {this.handleRestart()}}
                    />
                
                <Loose
                    loose={this.state.loose}
                    onRestart={() => {this.handleRestart()}}
                    />
            </div>
        );
    }
}

export default App;
