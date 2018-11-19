var megaLib = {
    isPositive : function (number) {
        if(number){
            return (number > 0) ? true : false; 
        }
    },

    isValue : function(value){
        var bReturn = true;
        
        if(!value){
            bReturn = false;
        }
        else if(typeof elem === 'string' && elem.trim()){
            bReturn = false;
        }

        return bReturn;
    }
}