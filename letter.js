var Letter = function(let) {
    //make a charac property and set it to what you think makes second_instructor_demonstration
    this.charac = let,
    //make an appear property and set it to what makes sense
    this.appear = appear,
    //make a letterRender property and set it to a function that does what you think makes sense
    this.letterRender = function() {
        if (this.appear === true) {
            return this.character;
        } else {
            return console.log('false');
        }
    }
};

//export the Letter constructor here
module.exports = Letter;
