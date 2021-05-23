<<script type="text/javascript">
console.log("Hello World");
// alert("hatthapol");


    var name = "hatthapol";
    let Age = 23;



    console.log("My name is " + name)
    //0 1 2
    name = [5,6,7];
    name[0] = 10;
    name[2] = "Ae";
    
    document.getElementById("content").innerHTML = name;

    //{"key":"value"}
    // user{ {"name":"win"},{"name":"Boy"} }
    var user = '{"name":"win","name":"Boy"}';
    var json = JSON.parse(user);
    console.log(json);

    emp = {name: "AA",name: "BB",name: "CC"}
    console.log(emp);
    console.log(emp[2].name);

    if(name){
        console.log("True");
    }else{
        console.log("False, name is 5");
    }
    for(i =1; i<5 ; i++){
        console.log(i);
    }
    console.log(Add(5,3));
    function Add(A,B) {
        c = A + B;
        return c;
    }