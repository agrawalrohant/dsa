var filename = "./Partition List.js"; // Update the file name to debug here

var scalerModule = require(filename);

function Node(data){
          this.data = data
          this.next = null
        }

        let n1 = new Node(384);
        let n2 = new Node(183);
        let n3 = new Node(463);
        let n4 = new Node(31);
        n1.next = n2;
        n2.next = n3;
        n3.next = n4;
        
let reuslt = scalerModule.partition(n1,77);

console.log("Result : " + reuslt);

// from CMD run command "node main" or "node scaler/main" from outer folder
// TO Debug Play Launch Program, it will stop at debug point.
