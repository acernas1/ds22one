/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 *
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER
 * @arg {tree} n - tree
 *
 * @example
 * inorder(root)
 *
 * PROBLEM 2
 * posorder(n)
 *
 * traverses a tree in POSORDER
 * @arg {tree} n - tree
 *
 * @example
 * posorder(root)
 *
 */

function inorder(n){
    if (n!==null){
        inorder(n.l)
        console.log(n.d)
        inorder(n.r)
    }
}
function postorder(n){
    if (n!==null){
        postorder(n.l)
        postorder(n.r)
        console.log(n.d)
    }
}
function preorder(n){
    if (n!==null){
        console.log(n.d)
        preorder(n.l)
        preorder(n.r)
    }
}

function Node(o){
    this.d=o//bject<->data
    this.l=null//eft
    this.r=null//ight
}

let p = new Node('+')
let o1 = new Node('-')
let o2 = new Node(3)
let o3 = new Node(8)
let o4 = new Node(3)

p.l = o1
o1.l = o3
o1.r = o4
p.r = o2

console.log('Preorder:')
console.log(preorder(p))
console.log('Inorder')
console.log(inorder(p))
console.log('Postorder')
console.log(postorder(p))





