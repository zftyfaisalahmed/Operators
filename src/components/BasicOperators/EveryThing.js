function Calc(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    var opt = document.getElementById("opt").value;
    
    var ans = eval(val1 + opt + val2);
    document.getElementById("ans").value = ans;
}

export default Calc