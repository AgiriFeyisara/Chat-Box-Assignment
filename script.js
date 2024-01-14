let toggle= document.querySelector('.toggle');
let chat= document.querySelector('.chat-container');
let right= document.querySelector('.right-section');


toggle.addEventListener('click', function()
{ 
    if (chat.style.display==='none'){
        chat.style.display='block';
        right.appendChild(chat);
        chat.style.right='20px';
        chat.style.bottom='60px';
        chat.style.top='10px';
    }else{
        chat.style.display='none';
   }


} );
