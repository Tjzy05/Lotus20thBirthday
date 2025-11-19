window.onload=function(){
    if (sessionStorage.getItem("hasSeen")==='true'){
        document.getElementById('noticeBoard').style.display="none";
        document.getElementById("reopenNotice").style.display = "block";
        document.getElementById("mapOverlay").style.display = "block";
    } else {
        document.getElementById("noticeBoard").style.display="flex";
        document.getElementById("reopenNotice").style.display = "none";
        document.getElementById("mapOverlay").style.display = "none";        
    }
    checkVisitStatus();
    
};

document.getElementById('enter').onclick=closeModal;
const reopenNotice=document.getElementById("reopenNotice");
const modal=document.getElementById("noticeBoard");
document.getElementById("reopenNotice").onclick=openModal;
const mapOverlay=document.getElementById("mapOverlay");
const truthButton=document.getElementById("truthButton");
const who=document.getElementById("who");
const errorMsg=document.getElementById("errorMsg");
const lotusArrow=document.getElementById("lotus_arrow");
const submit=document.getElementById("submit");

function checkVisitStatus(){
    const tinaIsVisited=sessionStorage.getItem("tinaVisited")==='true';
    const jessieIsVisited=sessionStorage.getItem("jessieVisited")==='true';
    if(tinaIsVisited && jessieIsVisited){
        truthButton.style.display="block";
    } else {
        truthButton.style.display="none";
    }
}


function closeModal(){

    modal.style.display="none";
    reopenNotice.style.display="block";
    mapOverlay.style.display="block"
    sessionStorage.setItem("hasSeen","true");
    checkVisitStatus();
}

function openModal(){
    modal.style.display="flex";
    reopenNotice.style.display="none";
    mapOverlay.style.display="none"
    document.getElementById('noticeBoard').style.display="flex";
}

function showWho(){
    who.style.display='flex';
    errorMsg.style.display='none';
}

function submitWho(){
    const selectWho = document.querySelector('input[name="suspect"]:checked');
    if (!selectWho){
        errorMsg.style.display='block';
        return;
    }
    errorMsg.style.display='none';
    lotusArrow.style.display='flex';
    who.style.display='none';
    sessionStorage.removeItem('tinaVisited');
    sessionStorage.removeItem('jessieVisited');
    alert(`前往柯藍房間裡查看真相！`);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('enter').onclick = closeModal;
    reopenNotice.onclick = openModal;
    truthButton.addEventListener('click', showWho);
    submit.addEventListener('click', submitWho);
});