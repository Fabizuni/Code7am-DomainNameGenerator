
let pronounList = ['the','our','your','my'];
let adjList = ['great', 'big','beautiful','amazing','nice','awesome' ];
let nounList = ['jogger','racoon','house','car','table','computer','box'];
let extensionList = ['.com', '.net', '.us', '.io','.cr','.cl',]


for (let pronoun = 0; pronoun < pronounList.length; pronoun++) {
    for (let adj = 0; adj < adjList.length; adj++) {
        for (let noun = 0; noun < nounList.length; noun++) {
          for (let extension = 0; extension < extensionList.length; extension++) {
              console.log(`${pronounList[pronoun]}${adjList[adj]}${nounList[noun]}${extensionList[extension]}`)  
              
          }
        }
    }   
}








