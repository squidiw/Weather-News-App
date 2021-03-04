// SHOW DAY AND TIME
         let today = new Date();
         let day = today.getDay();
         let daylist = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday ",
            "Thursday",
            "Friday",
            "Saturday",
         ];
         let month = today.getMonth();
         let monthlist = [
             "Jan",
             "Feb",
             "Mar",
             "Apr",
             "May",
             "Jun",
             "Jul",
             "Aug",
             "Sep",
             "Oct",
             "Nov",
             "Dec",
         ]

         let date = `${today.getFullYear()} - ${monthlist[month]} - ${today.getDate()}`;
    
         let hour = today.getHours();
         let minute = today.getMinutes();
         let second = today.getSeconds();
         let prepand = hour >= 12 ? " PM " : " AM ";
         hour = hour >= 12 ? hour - 12 : hour;
         if (hour === 0 && prepand === " PM ") {
            if (minute === 0 && second === 0) {
               hour = 12;
               prepand = " Noon";
            } else {
               hour = 12;
               prepand = " PM";
            }
         }
         if (hour === 0 && prepand === " AM ") {
            if (minute === 0 && second === 0) {
               hour = 12;
               prepand = " Midnight";
            } else {
               hour = 12;
               prepand = " AM";
            }
         }

         document.getElementById('current_day').innerHTML = `It's ${daylist[day]}, ${date}`;
         document.getElementById('current_time').innerHTML = `The time is : ${hour} : ${minute} ${prepand}`
