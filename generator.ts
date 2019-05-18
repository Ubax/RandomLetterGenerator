class AlphabetGenerator {
    possibleCharacters = []
    constructor(additionalCharacters: string[] = null, excludeCharacters: string[] = null) {
        for (var i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++)this.possibleCharacters.push(String.fromCharCode(i));
        if (additionalCharacters != null) this.possibleCharacters = this.possibleCharacters.concat(additionalCharacters);
        if (excludeCharacters != null) this.possibleCharacters = this.possibleCharacters.filter(x => excludeCharacters.indexOf(x) == -1)
    }

    private getRandomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    getPossibleCharacters(): string[] {
        return this.possibleCharacters.map(x => x);
    }

    getRandomCharacter(): string {
        return this.possibleCharacters[this.getRandomInteger(0, this.possibleCharacters.length)];
    }
}

var alphabetGenerator = new AlphabetGenerator([], ['X', 'Y', 'V', 'Q']);

document.querySelector(".random-button").addEventListener("click", e => document.querySelector(".character").innerHTML = alphabetGenerator.getRandomCharacter())
