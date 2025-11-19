document.getElementById("bedClue").onclick=function(){
    document.getElementById("clueModalBed").style.display='flex';
}

document.getElementById("closeClueBed").onclick=function(){
    document.getElementById("clueModalBed").style.display='none';
}

document.getElementById("deskClue").onclick=function(){
    document.getElementById("clueModalDesk").style.display='flex';
}

document.getElementById("closeClueDesk").onclick=function(){
    document.getElementById("clueModalDesk").style.display='none';
}

document.getElementById("bagClue").onclick=function(){
    document.getElementById("clueModalBag").style.display='flex';
}

document.getElementById("closeClueBag").onclick=function(){
    document.getElementById("clueModalBag").style.display='none';
}

sessionStorage.setItem("jessieVisited",'true');

const timeLineData=[
    "昨天 20:00：返到屋企，親眼見到柯藍將蛋糕放入雪櫃。",
    "昨天 20:30：打開雪櫃攞食材，準備晚飯。",
    "昨天 21:00：洗完碗之後就冇再進入廚房。",
    "昨天 24:00：睡覺。",
    "今天 09:00：出門上課。",
    "今天 15:00：返到屋企，進入房間。",
    "今天 15:15：離開房間。"
]
let currentTimeLineIndex=0;

const jessieHead=document.getElementById("jessieHead");
const timeLineModal=document.getElementById("timeLineModal");
const timeLineContent=document.getElementById("timeLineContent");
const closeTimeLine=document.getElementById("closeTimeLine");
const timeLineWrapper=document.querySelector(".timeLineWrapper");

function showTimeLine(){
    timeLineModal.classList.add("show");
    currentTimeLineIndex=0;
    timeLineContent.innerHTML="";
    displayNextTimeLineEntry();
}

function displayNextTimeLineEntry(){
    if(currentTimeLineIndex<timeLineData.length){
        timeLineContent.innerHTML+=`<p>${timeLineData[currentTimeLineIndex]}</p>`;
        currentTimeLineIndex++;
        closeTimeLine.style.display="none";
    } else {
        timeLineContent.innerHTML+="<p>--- 其後時間線未知 ---</p>";
        closeTimeLine.style.display="block";
    }
    scrollToBottom();
}

function scrollToBottom(){
    const element=document.getElementById("timeLineContent");
    element.scrollTop=element.scrollWidth;
}
jessieHead.onclick=showTimeLine;


closeTimeLine.onclick=function(){
    timeLineModal.classList.remove("show");
};

timeLineModal.onclick=function(e){
    if(timeLineModal.classList.contains("show") && !e.target.closest(".closeTimeLine")) {
        displayNextTimeLineEntry();
    }
};


