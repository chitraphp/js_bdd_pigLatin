// describe('leapYear', function() {
//     it("it false for a year that is not divisible by 4", function(){
//         expect(leapYear(1999)).to.equal(false);
//     });
//
//     it("is true for most years divisible by 4", function(){
//         expect(leapYear(2012)).to.equal(true);
//     });
//
//     it("is false for most years divisible by 100", function() {
//         expect(leapYear(1900)).to.equal(false);
//     });
//
//     it("is true for years divisible by 400", function() {
//         expect(leapYear(2000)).to.equal(true);
//     });
// });

describe('pigLatin', function(){

    it("it adds 'ay' to the end of a singular letter word start with a vowel", function(){
        expect(pigLatin('a')).to.equal('aay');
    });

    it("it adds 'ay' to the end of e singular letter word start with e vowel", function(){
        expect(pigLatin('e')).to.equal('eay');
    });

    it("it adds 'ay' to the end of 2 characters word start with a vowel", function(){
        expect(pigLatin('an')).to.equal('anay');
    });

    it("it adds 'ay' to the end of 4 characters word start with a vowel", function(){
        expect(pigLatin('undo')).to.equal('undoay');
    });

    it("it adds 'ay' to the end of a singular letter word start with a consonant", function(){
        expect(pigLatin('p')).to.equal('pay');
    });

    it("it adds 'ay' to the end of 2 characters word start with a consonant", function(){
        expect(pigLatin('be')).to.equal('ebay');
    });

    it("it adds 'ay' to the end of a word start with 2 consonants", function(){
        expect(pigLatin('play')).to.equal('ayplay');
    });

    it("it adds 'ay' to the end of a word start with 2 consonants qu", function(){
            expect(pigLatin('queen')).to.equal('eenquay');
    });
});
