window.onload = function (){
    mine()
}
function mine(){
    const numberInput = document.getElementById('input_number');
    numberInput.addEventListener('blur', function(event){
        const value = event.target.value;
        const regex = /^\d+$/;
        // console.log(regex.test(value)) 
        if( regex.test(value)){
            regex.test(value)
            // console.log() 
        }else{
            alert('woring!!')
        }
       
    })
    // console.log('test')
}
