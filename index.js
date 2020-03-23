//for (let i = 0;; i++) {
   // console.log("loop, i = " + i);
   // if (i > 1)
   //     break;
///};

//Bracket-less for-loop syntax is not good friends with the let keyword. The following code will generate an error:
//for (var i = 0; i < 10; i++) let x = i;

//A let variable cannot be defined without scope brackets. All variables defined using the let keyword require their own local scope. This is fixed by:
//for (var i = 0; i < 10; i++) { let x = i; }

for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        console.log(x, y);  //have no idea why its outputing the way it does, doesnt make sense. why wouldnt it just say 0, 0 and 1,1 and end?


 let c = 0; //none of this makes sense at all
    mark: for (let i = 0; i < 5; i++){
    inner: for (let j = 0; j < 5; j++){
        c++; if (i == 2) break mark;}
    }
console.log(c); // 11*

let enumerable = { property : 1, method : () => {} };for (let key of Object.keys( enumerable )) console.log(key);
> property
> methodfor (let value of Object.values( enumerable )) console.log(value);
> 1
> () => {}for (let entry of Object.entries( enumerable )) console.log(entry);
> (2) ["prop", 1]
> (2) ["meth", ƒ()]

//no idea what any of this means either. looking up what it means in the examples on MDN makes me even more confused. but it shows that object.keys and object.values and also entries look exactly the same
//it appears you can set the object as a variable and then declare some other random stuff as a: b: c: etc, then call on these later.
//it doesnt really show any workable examples though which i cant understand 
