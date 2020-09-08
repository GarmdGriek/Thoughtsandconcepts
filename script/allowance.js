var task=[], value=[], performedTask=[], salary=0, checkedItems,weekDay,bonus=0, weeklyAllowance=0, idIncrease=0,rowId = "allowanceTableRow";
function readTasks(){
    //read performedTask from file.
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            task = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", "tasks.txt", false);
    xmlhttp.send();
// alert(task[0]);
};
function readValue(){
    //read performedTask from file.
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        value = JSON.parse(this.responseText);
    }
};
    xmlhttp.open("GET", "taskValue.txt", false);
    xmlhttp.send();
// alert(value[0]);
};

function allowance(){
    checkedItems = document.querySelectorAll(".checkAllowance input[type=checkbox]:checked");
    weekDay = [];
    if (checkedItems && checkedItems.length) {
      checkedItems.forEach((element) => {
        weekDay.push(element.value);
      });
    }
    performedTask=document.getElementById("completedTask").value;
    performedTask = performedTask.toLowerCase();
    for (let index = 0; index < task.length; index++) {
        if (performedTask===task[index]) {
            salary = value[index];
            idIncrease++;
            salary=salary*weekDay.length;
            if ((weekDay.includes("Lørdag")) || (weekDay.includes("Søndag"))) {
                if ((weekDay.includes("Lørdag")) && (weekDay.includes("Søndag"))){
                salary=salary+(2*value[index]*0.5);
            }
                else {salary=salary+value[index]*0.5;}
            }
        
//            alert(""+performedTask+" "+salary+" "+weekDay);
        weeklyAllowance= weeklyAllowance+salary;
        }
        if ((weeklyAllowance>=200)&&(bonus===0)){
            weeklyAllowance=weeklyAllowance+50;
            performedTask=performedTask + " samt bonus";
            bonus=1;
//            alert("Bonus nådd kroner: 50");    
    }
//    alert(performedTask);
}
if(salary>0){
    var row = document.getElementById(rowId);
    var newRow = document.getElementById("AllowanceTable");
    var salaryCell = document.createElement("td");
    var taskCell = document.createElement("td");
    var weekDayCell = document.createElement("td");
    var weeklyAllowanceCell = document.createElement("td");
    var newTr = document.createElement("tr");
    rowId = "allowanceTableRow"+idIncrease;
    newTr.setAttribute("id",rowId);
    salaryCell.innerHTML= salary;
    taskCell.innerHTML=performedTask;
    weekDayCell.innerHTML= weekDay;
    weeklyAllowanceCell.innerHTML=weeklyAllowance;
    row.appendChild(salaryCell);
    row.appendChild(taskCell);
    row.appendChild(weeklyAllowanceCell);
    row.appendChild(weekDayCell)
    newRow.appendChild(newTr);
    } else{}
};
//Capitalize 
//     performedTask = performedTask.charAt(0).toUpperCase() + performedTask.slice(1);

function printDiv(printableArea) {
    var printContents = document.getElementById(printableArea).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
};