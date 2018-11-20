var megaLib = {
    isPositive : function(number){
        if(number){
            return (number > 0) ? true : false; 
        }
    },

    isValue : function(value){
        var bReturn = true;

        if(!value)
            bReturn = false;        
        else if(typeof elem === 'string' && elem.trim())
            bReturn = false;        

        return bReturn;
    },

    validNumber: function(value){
        if(value instanceof Number)
            value = value.valueOf();
  
        return  isFinite(value) && value === parseInt(value, 10);
    },

    toNumber: function(string){
        return (+string);
    } ,

    qrt: function(number){
        if(this.validNumber(this.toNumber(number)))
            return Math.pow(number, 2);
    },

    addDays: function(daysNumber){
        var currentDay = new Date();
        var newDay = new Date();
        
        newDay.setDate(currentDay.getDate() + daysNumber);
        
        return newDay;
    },

    evenFilter: function(numbersArr){        
        var filteredArray = numbersArr.filter(function(number){
            return number % 2 == 0;
        });

        return filteredArray;
    },

    cutStrings: function(stringArr, cutLength){
        stringArr.forEach(function(item, i) {
            stringArr[i] = item.substring(0, cutLength);
        });

        return stringArr;
    },

    getFibonachi: function(length){   
        var a = 1,
            b = 1;
            arrFeb = [];
        for(var i = 1; i <= length; i++){
            if(i >= 3){            
                var c = a + b;
                a = b;
                b = c;
            }
            arrFeb.push(b);
        } 
        return arrFeb;                
    },
}