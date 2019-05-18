var AlphabetGenerator = /** @class */ (function () {
    function AlphabetGenerator(additionalCharacters, excludeCharacters) {
        if (additionalCharacters === void 0) { additionalCharacters = null; }
        if (excludeCharacters === void 0) { excludeCharacters = null; }
        this.possibleCharacters = [];
        for (var i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++)
            this.possibleCharacters.push(String.fromCharCode(i));
        if (additionalCharacters != null)
            this.possibleCharacters = this.possibleCharacters.concat(additionalCharacters);
        if (excludeCharacters != null)
            this.possibleCharacters = this.possibleCharacters.filter(function (x) { return excludeCharacters.indexOf(x) == -1; });
    }
    AlphabetGenerator.prototype.getRandomInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    AlphabetGenerator.prototype.getPossibleCharacters = function () {
        return this.possibleCharacters.map(function (x) { return x; });
    };
    AlphabetGenerator.prototype.getRandomCharacter = function () {
        return this.possibleCharacters[this.getRandomInteger(0, this.possibleCharacters.length)];
    };
    return AlphabetGenerator;
}());
var alphabetGenerator = new AlphabetGenerator([], ['X', 'Y', 'V', 'Q']);
document.querySelector(".random-button").addEventListener("click", function (e) { return document.querySelector(".character").innerHTML = alphabetGenerator.getRandomCharacter(); });
