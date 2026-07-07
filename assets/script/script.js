  
    const div = document.querySelectorAll(".xo>div");
    let user1 = "x";
    let user2 = "o";
    let move;
    // end select secton
    let turn = parseInt(Math.random() * 2);
    if (turn) {
      alert("user1 start:x");
      move = "x";
    } else {
      alert("user2 start:o");
      move = "o";
    }
    console.log(move);

    // fill out these divs
    div.forEach((val) => {
      val.addEventListener("click", () => {
        if (val.innerText == "") {
          val.innerText = move;
                  checkWinner()
move =move=='x' ? 'o': 'x'
        }
       
      });
    });
    // fill out these divs

    // select user winner

    function checkWinner(){

        let winner = "";
    switch (true) {
      case div[0].innerText == div[3].innerText &&
        div[0].innerText == div[6].innerText &&
        div[0].innerText != "":
        winner = div[0].innerText;
        break;
      case div[1].innerText == div[4].innerText &&
        div[1].innerText == div[7].innerText &&
        div[1].innerText != "":
        winner = div[1].innerText;
        break;
          case div[2].innerText == div[5].innerText &&
        div[2].innerText == div[8].innerText &&
        div[2].innerText != "":
        winner = div[2].innerText;
        break;
      case div[0].innerText == div[4].innerText &&
        div[0].innerText == div[8].innerText &&
        div[0].innerText != "":
        winner = div[0].innerText;
        break;
      case div[2].innerText == div[4].innerText &&
        div[2].innerText == div[6].innerText &&
        div[2].innerText != "":
        winner = div[2].innerText;
        break;
     
      
    }
    if(winner=='x'){
        alert('user1 won !')
        setTimeout(()=>{
            location.reload()
        },1000)
    }else if(winner=='o'){
        alert('user2 won !')
        setTimeout(()=>{
            location.reload()
        },1000)
    }
}
