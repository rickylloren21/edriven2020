
var month, day;
month = prompt("Month 1-12")
day = prompt("Start Day 1-7")
function CalendarMaker(elem, month, dayOfWeek){
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let strMonth = ''
    if (month == 1)
        strMonth = '<div class="box green" >JANUARY</div>'
    else if (month == 2)
        strMonth = '<div class="box green" >February</div>'
    else if (month == 3)
        strMonth = '<div class="box green" >March</div>'
    else if (month == 4)
        strMonth = '<div class="box green" >April</div>'
    else if (month == 5)
        strMonth = '<div class="box green" >May</div>'
    else if (month == 6)
        strMonth = '<div class="box green" >June</div>'
    else if (month == 7)
        strMonth = '<div class="box green" >July</div>'
    else if (month == 8)
        strMonth = '<div class="box green" >August</div>'
    else if (month == 9)
        strMonth = '<div class="box green" >September</div>'
    else if (month == 10)
        strMonth = '<div class="box green" >October</div>'
    else if (month == 11)
        strMonth = '<div class="box green" >November</div>'
    else if (month == 12)
        strMonth = '<div class="box green" >December</div>'
    else {
        strMonth = "Invalid Input"
    }

    let table = `<table><tr><td colspan = "7" align = "center" id="month" >${strMonth}</tr></td><tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>`
    let counter = 1
    let clndrDays = 1
    let wkndCounter = 0

    if(month > 12 || dayOfWeek > 7){
        elem.innerHTML = ("<h1>Invalid Input<h1>")
    }else if(month == 0 || dayOfWeek == 0)
        elem.innerHTML = ("<h1>Invalid Input</h1>")
        else{
            if(days[month-1] == 31){
                if(dayOfWeek >= 6){
                    for (let i = 0; i < 42; i++) {
                        if (wkndCounter == 0) {
                            
                            table += '<tr>'
                        }
                
                        if (counter <= dayOfWeek - 1) {
                            table += "<td></td>"
                            counter++
                        }
                
                        else if (clndrDays > days[month - 1])
                            table += "<td></td>"
                
                        else {
                            if (clndrDays <= days[month - 1]) {
                                table += `<td>${clndrDays}</td>`
                                clndrDays++
                            }
                            else
                                table += "<td></td>"
                        }
                
                        if (wkndCounter == 6) {
                            table += '</tr>'
                            wkndCounter = 0
                        }
                        else {
                            wkndCounter++
                        }
                    }
                }
                else{
                    for (let i = 0; i < 35; i++) {
                        if (wkndCounter == 0) {
                            table += '<tr>'
                        }
                
                        if (counter <= dayOfWeek - 1) {
                            table += "<td></td>"
                            counter++
                        }
                
                        else if (clndrDays > days[month - 1])
                            table += "<td></td>"
                
                        else {
                            if (clndrDays <= days[month - 1]) {
                                table += `<td>${clndrDays}</td>`
                                clndrDays++
                            }
                            else
                                table += "<td></td>"
                        }
                
                        if (wkndCounter == 6) {
                            table += '</tr>'
                            wkndCounter = 0
                        }
                        else {
                            wkndCounter++
                        }
                    }
        
                }
                
            }else if(days[month-1] == 28){
                if(dayOfWeek >= 6){
                for (let i = 0; i < 35; i++) {
                    if (wkndCounter == 0) {
                        table += '<tr>'
                    }
            
                    if (counter <= dayOfWeek - 1) {
                        table += "<td></td>"
                        counter++
                    }
            
                    else if (clndrDays > days[month - 1])
                        table += "<td></td>"
            
                    else {
                        if (clndrDays <= days[month - 1]) {
                            table += `<td>${clndrDays}</td>`
                            clndrDays++
                        }
                        else
                            table += "<td></td>"
                    }
            
                    if (wkndCounter == 6) {
                        table += '</tr>'
                        wkndCounter = 0
                    }
                    else {
                        wkndCounter++
                    }
                }
            }else{
                for (let i = 0; i < 28; i++) {
                    if (wkndCounter == 0) {
                        table += '<tr>'
                    }
            
                    if (counter <= dayOfWeek - 1) {
                        table += "<td></td>"
                        counter++
                    }
            
                    else if (clndrDays > days[month - 1])
                        table += "<td></td>"
            
                    else {
                        if (clndrDays <= days[month - 1]) {
                            table += `<td>${clndrDays}</td>`
                            clndrDays++
                        }
                        else
                            table += "<td></td>"
                    }
            
                    if (wkndCounter == 6) {
                        table += '</tr>'
                        wkndCounter = 0
                    }
                    else {
                        wkndCounter++
                    }
                }
            }
            }else{
                if(dayOfWeek > 6){
                    for (let i = 0; i < 42; i++) {
                        if (wkndCounter == 0) {
                            table += '<tr>'
                        }
                
                        if (counter <= dayOfWeek - 1) {
                            table += "<td></td>"
                            counter++
                        }
                
                        else if (clndrDays > days[month - 1])
                            table += "<td></td>"
                
                        else {
                            if (clndrDays <= days[month - 1]) {
                                table += `<td>${clndrDays}</td>`
                                clndrDays++
                            }
                            else
                                table += "<td></td>"
                        }
                
                        if (wkndCounter == 6) {
                            table += '</tr>'
                            wkndCounter = 0
                        }
                        else {
                            wkndCounter++
                        }
                    }
                }else{
                    for (let i = 0; i < 35; i++) {
                        if (wkndCounter == 0) {
                            table += '<tr>'
                        }
                
                        if (counter <= dayOfWeek - 1) {
                            table += "<td></td>"
                            counter++
                        }
                
                        else if (clndrDays > days[month - 1])
                            table += "<td></td>"
                
                        else {
                            if (clndrDays <= days[month - 1]) {
                                table += `<td>${clndrDays}</td>`
                                clndrDays++
                            }
                            else
                                table += "<td></td>"
                        }
                
                        if (wkndCounter == 6) {
                            table += '</tr>'
                            wkndCounter = 0
                        }
                        else {
                            wkndCounter++
                        }
                    }
                }
                
            }
            table += '</table>'
        
            elem.innerHTML = table;
            }
        }
    

CalendarMaker(calendar, month, day);