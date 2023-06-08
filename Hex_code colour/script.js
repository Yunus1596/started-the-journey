function changeColor(){
    var hex_color=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexcode='';

    for(let i=0;i<=5;i++){
        let random_index= Math.floor(Math.random()*hex_color.length);

        hexcode +=hex_color[random_index];
    }
    document.getElementById("hex-code").innerHTML= hexcode;
    document.getElementsByTagName("body")[0].style.background="#"+hexcode;
}