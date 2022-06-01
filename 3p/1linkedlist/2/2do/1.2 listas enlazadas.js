    /** INSTRUCTIONS
     *
     * create one file by program
     * implement a method, function, non-function solution
     * solve each as requested
     * may use code from previous exercises
     *
     * PROBLEM 1
     * create a linked-list with 1000-random-names
     * 'name3', 'name99', ..., 'name7'
     *
     * then look 'name7' up
     * returns true
     *
     * then look 'name3007' up
     * returns false
     *
     * use the method contains
     *
     * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
     * @see {@link https://jsdoc.app}
     */
    class Randoms {
      constructor() {
        this.data = Array.from({ length: 1000 }, () => "name" + Math.floor(Math.random() * 1000));
      }

      findnode(number) {
        return this.data.find(item => item === "name" + number)
      }

      find7() {
        const find7 = this.findnode(7)
        return !!find7
      }
      find3007() {
        const find3007 = this.findnode(3007)
        return !!find3007
      }
      getRandoms() {
        return this.data
      }
    }
    const randomNumbers = new Randoms

    console.log(randomNumbers.getRandoms())
    console.log("node 7: ", randomNumbers.find7())
    console.log("node 3007: ", randomNumbers.find3007())

