console.log("Hello World");
    // alert("Hatthapol");

    var name = "Hatthapol"; //string
    let Age = "21"; //int
    
    console.log("My name is " + name);
        //0 1 2
    name = [5,6,7];
    name[0] = 10;
    name[2] = "A";

    document.getElementById("content").innerHTML = name;

    // {"key":"value"}
    // users {"name":"Win","name":"Boy"};
    var users = '{"name":"A","name":"Boy"}';
    var json = JSON.parse(users);
    console.log(json);

    emp = {name: "AA",name: "BB",name: "CC"};
    console.log(emp);
    console.log(emp[2].name);

    if(name !=5){
        console.log("true");
    }else{
        console.log("False, name is 5");
    }

    for(i =1; i<5; i++){
        console.log(i);
    }
    console.log(Add(5,3));
    function add(A,B) {
        c = A + B;
        return c;
    }