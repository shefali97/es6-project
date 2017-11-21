let name_arr=[];
let rollno_arr=[];
let stream_arr=[];
let year_arr=[];
function insertData(){
    let name=document.getElementById("name");
    let rollno=document.getElementById("rollno");
    let stream=document.getElementById("sel1");
    let year=document.getElementById("year");
    let table1=document.getElementById("table1");
    let tbody=document.getElementById("tb"); 
    table1.appendChild(tbody);    
    let row=document.createElement("tr"); 
    row.setAttribute("id","val");
    tbody.appendChild(row);
    let cell1=document.createElement("td");
    row.appendChild(cell1);    
    let f1=document.createElement("INPUT");
    f1.setAttribute("type","checkbox");
    f1.setAttribute("class","cb");
    cell1.appendChild(f1);

    let cell2=document.createElement("td");
    row.appendChild(cell2);    
    let f2=document.createTextNode(name.value);
    name_arr.push(name.value);
    cell2.appendChild(f2);

    let cell3=document.createElement("td");
    row.appendChild(cell3);    
    let f3=document.createTextNode(rollno.value);
    rollno_arr.push(rollno.value);
    cell3.appendChild(f3);

    let cell4=document.createElement("td");
    row.appendChild(cell4);    
    let f4=document.createTextNode(stream.value);
    stream_arr.push(stream.value);    
    cell4.appendChild(f4);

    let cell5=document.createElement("td");
    row.appendChild(cell5);    
    let f5=document.createTextNode(year.value);
    year_arr.push(year.value);
    cell5.appendChild(f5);

    document.getElementById("form").reset();
}


function deleteData()
{
    let pos=0;
    let cb = document.getElementsByClassName("cb");
    for(let i=0;i<=cb.length;i++)
    {
        if(cb[i].checked)
        {
            document.getElementById("tb").deleteRow(i);
            name_arr.splice(i,1);
            rollno_arr.splice(i,1);
            stream_arr.splice(i,1);
            year_arr.splice(i,1);            
            i=0;
            deleteData();
        }
    }  
};

function editData()
{
    let ch = document.getElementsByClassName("cb");
    let count=0;
    let pos=0;
    for(let i=0;i<ch.length;i++){
        if(ch[i].checked && i==0){
            break;
        }
        else if(ch[i].checked && i!=0)
        {
            pos++;
            break;
        }
    }
    for(let i=0;i<ch.length;i++){
        if(ch[i].checked){
            count++;
            ch[i].checked=0;            
        }
        if(count>1)
        {
            break;
        }
    }
    if(count==0){
        $('#edit').attr('data-target','#myModal2');
        $('#edit').attr('data-toggle','modal');      
        document.getElementById("myModal1").style.visibility = "visible";
        return false;
    }
    else if(count>1)
    {       
        $('#edit').attr('data-target','#myModal1');
        $('#edit').attr('data-toggle','modal');      
        document.getElementById("myModal1").style.visibility = "visible";
        return false;   
    }
    else if(count===1)
    {       
       $('#edit').attr('data-target','#myModal');
       $('#edit').attr('data-toggle','modal');      
       document.getElementById("myModal").style.visibility = "visible";    
       let name1=document.getElementById("name1");
       let rollno1=document.getElementById("rollno1");
       let sel2=document.getElementById("sel2");
       let year1=document.getElementById("year1");
       $('#name1').attr('placeholder',name_arr[pos]);
       $('#rollno1').attr('placeholder',rollno_arr[pos]);
       $('#sel2').attr('value',stream_arr[pos]);       
       $('#year1').attr('placeholder',year_arr[pos]);
    $("#myModal").on("hidden.bs.modal", function () {
        let name=document.getElementById("name1");
        let rollno=document.getElementById("rollno1");
        let stream=document.getElementById("sel2");
        let year=document.getElementById("year1");
        name_arr[pos]=name.value;
        rollno_arr[pos]=rollno.value;
        stream_arr[pos]=stream.value;
        year_arr[pos]=year.value;
        let r = document.getElementById("table1").rows[pos+1].cells;        
        if((name!=` ` || name!= `` || name!=null) && (rollno!=` ` || rollno!= `` || rollno!=null) && (stream!=` ` || stream!= `` || stream!=null) && (year!=` ` || year!= `` || year!=null))
        {
         r[1].innerHTML = name.value;
         r[2].innerHTML = rollno.value;
         r[3].innerHTML = stream.value;
         r[4].innerHTML = year.value;
         document.getElementById("form1").reset();
        }
      }); 
}
};
