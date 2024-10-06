const printName=(printAge) =>{
    setTimeout(() => {
        console.log("My name is Ripan. (2 seconds delay)");
        printAge(); 
    }, 2000);
}
const printAge=(printLocation)=>{
    setTimeout(()=>{
        console.log("I am 27 years old.(3 seconds delay)");
        printLocation();
    },3000)
}
const printLocation=(printHobbies)=>{
    setTimeout(()=>{
        console.log("I live in Örebro. (1 seconds delay)");;
        printHobbies();
    },1000)
}
const printHobbies=()=>{
    console.log("My hobbies are decorating home, cooking and reading")
    

}

printName(()=>{
    printAge(()=>{
        printLocation(()=>{
            printHobbies();
        });
    });
});