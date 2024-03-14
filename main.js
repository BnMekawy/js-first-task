alert("who Am I Game")

let Msg1 = confirm("Do you Fly ?!")

if ( Msg1 === true ){
    let Msg2 = confirm("Are you wild ?")

    if (Msg2 === true){
        console.log("Eagle")
        document.write("<h1>Eagle</h1>")
    }
    else{
        console.log("Parrot")
        document.write("<h1>Parrot</h1>")
    }
}
else{
    let Msg3 = confirm("Do You live under sea ?")
    if (Msg3===true){
        let Msg4 = confirm(" Are You Wild ?")
        if (Msg4 === true){
            console.log("Shark")
            document.write("<h1>shark</h1>")
        }
        else{
            console.log("Dolphin")
            document.write("<h1>dolphin</h1>")
        }
    }
    else{
        let Msg5 = confirm("Are You wild ?")
        if(Msg5===True){
            console.log("Lion")
            document.write("<h1>Lion</h1>")
        }
        else{
            console.log("cat")
            document.write("<h1>cat</h1>")
        }
    }
}