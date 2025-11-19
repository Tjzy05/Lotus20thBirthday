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

document.getElementById("wardrobeClue").onclick=function(){
    document.getElementById("clueModalWardrobe").style.display='flex';
}

document.getElementById("closeClueWardrobe").onclick=function(){
    document.getElementById("clueModalWardrobe").style.display='none';
}

sessionStorage.setItem("tinaVisited",'true');

const timeLineData=[
    "昨天 21:10：返到屋企，直接進入廚房看有甚麼食材，看到柯藍的蛋糕。",
    "昨天 21:45：食完飯、洗完碗後，返房間趕ddl。",
    "昨天 23:00：出房間沖涼。",
    "昨天 23:45：沖完涼入廚房睇有甚麼可以拿來做宵夜。",
    "今天凌晨 01:45：睡覺。",
    "--- 今天 Tina Day off --- ",
    "今天 10:15：起身，去廚房煮早餐。",
    "--- 未知時間線 ---",
    "今天 15:00: 離開房間。"
]
let currentTimeLineIndex=0;

const tinaHead=document.getElementById("tinaHead");
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
tinaHead.onclick=showTimeLine;


closeTimeLine.onclick=function(){
    timeLineModal.classList.remove("show");
};

timeLineModal.onclick=function(e){
    if(timeLineModal.classList.contains("show") && !e.target.closest(".closeTimeLine")) {
        displayNextTimeLineEntry();
    }
};


