function multiple(valor, multiple)
        {
            resto = valor % multiple;
            if(resto==0)
                return true;
            else
                return false;
        }
 
        var multiples_7=[];
        
        for(var i=1;i<=100;i++)
        {
            if(multiple(i,7))
                multiples_7.push(i);
 
            if(multiple(i,2))
                multiples_7.splice(String(i));
                multiples_7 = multiples_7.filter(function(multiples) {
                return multiples !== String(i); 
            });   

            if(multiple(i,3))
                multiples_7.splice(String(i));
                multiples_7 = multiples_7.filter(function(multiples) {
                return multiples !== String(i); 
            });   

            if(multiple(i,5))
                multiples_7.splice(String(i));
                multiples_7 = multiples_7.filter(function(multiples) {
                return multiples !== String(i); 
            });   
             
        }
        document.write("Los numeros que son multiplos de 7 son: ",multiples_7);
        
        