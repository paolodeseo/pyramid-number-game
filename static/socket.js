//client

var socket = io('http://localhost:3000');

// socket.emit('connecting', {'sample_object' : 1, 'element2' :  'sample value'})

// socket.on('connection confirmation', function(msg){
//     // console.log(msg)
//     alert(msg)
// })


socket.on('connected', function(){
    // alert('Connected to Server')
})

socket.on('move', function(msg){
    flag = msg['flag']
    
    if(msg['box'] == 'b1') {
        myfunc_3()
        myfunc()
    }

    else if(msg['box'] == 'b2'){
        myfunc_4(); 
        myfunc();
    }

    else if(msg['box'] == 'b3'){
        myfunc_5(); 
        myfunc();
    }

    else if(msg['box'] == 'b4'){
        myfunc_6(); 
        myfunc();
    }

    else if(msg['box'] == 'b5'){
        myfunc_7(); 
        myfunc();
    }
    
    else if(msg['box'] == 'b6'){
        myfunc_8(); 
        myfunc();
    }

    else if(msg['box'] == 'b7'){
        myfunc_9(); 
        myfunc();
    }

    else if(msg['box'] == 'b8'){
        myfunc_10(); 
        myfunc();
    }
    else if(msg['box'] == 'b9'){
        myfunc_11(); 
        myfunc();
    }

    else if(msg['box'] == 'b10'){
        myfunc_12(); 
        myfunc();
    }
    else if(msg['box'] == 'b11'){
        myfunc_13(); 
        myfunc();
    }
})


document.getElementById('b1').addEventListener('click', function(){
    socket.emit('move', {'flag' : flag, 'box' : 'b1'})
    myfunc_3()
    myfunc()
})

// document.getElementById('b2').addEventListener('click', function() {
//     socket.emit('move', {'flag' : flag, 'box' : 'b2'})
//     myfunc_4(); 
//     myfunc();
// })

// document.getElementById('b3').addEventListener('click', function() {
//     socket.emit('move', {'flag' : flag, 'box' : 'b3'})
//     myfunc_5(); 
//     myfunc();
// })

document.getElementById('b4').addEventListener('click', function() {
    socket.emit('move', {'flag' : flag, 'box' : 'b4'})
    myfunc_6(); 
    myfunc();
})

document.getElementById('b5').addEventListener('click', function() {
    socket.emit('move', {'flag' : flag, 'box' : 'b5'})
    myfunc_7(); 
    myfunc();
})

document.getElementById('b6').addEventListener('click', function() {
    socket.emit('move', {'flag' : flag, 'box' : 'b6'})
    myfunc_8(); 
    myfunc();
})

document.getElementById('b7').addEventListener('click', function() {
    socket.emit('move', {'flag' : flag, 'box' : 'b7'})
    myfunc_9(); 
    myfunc();
})

document.getElementById('b8').addEventListener('click', function() {
    socket.emit('move', {'flag' : flag, 'box' : 'b8'})
    myfunc_10();
    myfunc();
})

document.getElementById('b9').addEventListener('click', function() {
    socket.emit('move', {'flag' : flag, 'box' : 'b9'})
    myfunc_11();
    myfunc();
})

document.getElementById('b10').addEventListener('click', function() {
    socket.emit('move', {'flag' : flag, 'box' : 'b10'})
    myfunc_12();
    myfunc();
})

document.getElementById('b11').addEventListener('click', function() {
    socket.emit('move', {'flag' : flag, 'box' : 'b11'})
    myfunc_13();
    myfunc();
})



