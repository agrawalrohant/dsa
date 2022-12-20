// question -->https://www.scaler.com/academy/mentee-dashboard/class/41067/assignment/problems/4367?navref=cl_tt_nv

// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
let head = new Node();
let size_of_ll = 0;
class LinkedList {
  constructor() {
    head = null;
    size_of_ll = 0;
  }

  insert_node(pos, no) {
    // start
    let newNode = new Node(0);
    newNode.value = no;
    if (head == null || pos == 1) {
      newNode.next = head;
      head = newNode;
    } else {
      // in between or end
      let counter = 1;
      let nextNode = head;
      while (counter < pos - 1) {
        nextNode = nextNode.next;
        counter++;
      }
      newNode.next = nextNode.next;
      nextNode.next = newNode;
    }
    size_of_ll++;
  }

  delete_node(pos) {
    if (head == null || pos < 1 || pos > size_of_ll) {
      return;
    } else {
      if (pos == 1) {
        head = head.next;
      } else {
        let counter = 1;
        let nextNode = head;
        while (counter < pos - 1) {
          nextNode = nextNode.next;
          counter++;
        }
        nextNode.next = nextNode.next.next;
      }
      size_of_ll--;
    }
  }

  print_ll() {
    let result = "";
    let nextNode = head;
    let first = true;
    while (nextNode != null) {
      if (first) {
        result += nextNode.value;
        first = false;
      } else {
        result += " " + nextNode.value;
      }
      nextNode = nextNode.next;
    }
    result += "\n";
    process.stdout.write(result);
  }
}
