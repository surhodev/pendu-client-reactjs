class Dictionary {

    static getOne() {

        let index = parseInt(Math.random() * (this.words.length-1))

        return this.words[index]
    }

    static words = [
        'MOTS',
        'COUVERT',
        'PATATE',
        'CHAUD',
        'SIGLE',
        'DICTIONNAIRE',
        'PARLER',
        'PHRASE',
        'CHAMP',
        'MORAL',
        'FORCER',
        'TRAIT',
        'IMPACTER',
        'LETTRE',
        'LIVRE'
    ]
}

export default Dictionary