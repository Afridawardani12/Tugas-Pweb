function terimainput(){
    var x=document.forms['form1']['username'].value;
    var y=document.forms['form1']['password'].value;

    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = x;
    cell2.innerHTML = y;
};

