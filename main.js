Name_of_the_Studentarray=[];
function Submit(){
    var name1=document.getElementById("nos1").value;
    var name2=document.getElementById("nos2").value;
    var name3=document.getElementById("nos3").value;
    var name4=document.getElementById("nos4").value;

    Name_of_the_Studentarray.push(name1);
    Name_of_the_Studentarray.push(name2);
    Name_of_the_Studentarray.push(name3);
    Name_of_the_Studentarray.push(name4);
    console.log(Name_of_the_Studentarray);

    document.getElementById("displayname").innerHTML=Name_of_the_Studentarray;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function Sort(){
    Name_of_the_Studentarray.sort();
    console.log(Name_of_the_Studentarray);
    document.getElementById("displayname").innerHTML=Name_of_the_Studentarray;
}