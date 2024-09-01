function result(input){
    const value = Math.floor(Math.random()*3)+1;


    if (input === 1 ){
        
        document.querySelector('.mySelection').setAttribute('src','./images/rock.png');
    
    }else if (input === 2){
    
        document.querySelector('.mySelection').setAttribute('src','./images/paper.png');
    
    }else if(input === 3){
    document.querySelector('.mySelection').setAttribute('src','./images/scissors.png');
    }
    
    
        if (value === 1 ){
        
            document.querySelector('.computerSelection').setAttribute('src','./images/rock.png');
        
        }else if (value === 2){
        
            document.querySelector('.computerSelection').setAttribute('src','./images/paper.png');
        
        }else if(value === 3){
        document.querySelector('.computerSelection').setAttribute('src','./images/scissors.png');
        }
    

   

        if(value === input){
       
        document.querySelector('.final-output').innerHTML = 'Draw! you and computer chosse same';
        }
        else if(input===1 && value===2 ){
        
        document.querySelector('.final-output').innerHTML = 'OOPS! you loose, computer choose paper';
        }
        else if(input ===1 && value ===3){
       
        document.querySelector('.final-output').innerHTML = 'you win!! computer choose Scissor';
        }
        else if(input ===2 && value ===1){
        
        document.querySelector('.final-output').innerHTML = 'You win!! computer choose rock';
        }
        else if(input ===2 && value ===3){
            
            document.querySelector('.final-output').innerHTML = 'OOPS! you loose, computer choose scissor';
        }
        else if(input ===3 && value ===1){
            
            document.querySelector('.final-output').innerHTML = 'OOPS! You loose, computer choose rock!';
        }
        else if(input ===3 && value ===2){
            
            document.querySelector('.final-output').innerHTML = 'You win!!, computer choose paper';
        }
}