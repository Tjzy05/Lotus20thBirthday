document.addEventListener('DOMContentLoaded', () => {

    const truthImage = document.getElementById('truthImage');
    const truthTitle = document.getElementById('truthTitle');
    const truthText = document.getElementById('truthText');
    const startupOverlay = document.getElementById('startupOverlay');
    const startButton = document.getElementById('startButton');

    const animationContainer = document.getElementById('animationContainer');
    const continueModal = document.getElementById('continueModal');
    const continueButton = document.getElementById('continueButton');
    const finalContent = document.getElementById('finalContent');
    const music = document.getElementById('birthdayMusic');
    
    const animationDuration = 3000; 


    function updateFontSizeBasedOnImage() {
        if (finalContent.style.display !== 'block') {
            return;
        }
        

        if (truthImage.clientWidth === 0 || truthImage.clientHeight === 0) {
             console.warn("圖片尚未完全渲染，稍後重試。");
             return; 
        }

        const imageWidth = truthImage.clientWidth; 
        const imageHeight = truthImage.clientHeight;
        const imageAspectRatio = 2000 / 796; 
        const screenAspectRatio = window.innerWidth / window.innerHeight;
        
        let baseSize; 
        let offsetX = 0; 
        let offsetY = 0; 
        let actualWidth; 
        let actualHeight; 


        if (screenAspectRatio > imageAspectRatio) {
            actualHeight = imageHeight;
            actualWidth = actualHeight * imageAspectRatio;
            offsetX = (imageWidth - actualWidth) / 2; 
            baseSize = actualHeight;
        } else {
            actualWidth = imageWidth;
            actualHeight = actualWidth / imageAspectRatio;
            offsetY = (imageHeight - actualHeight) / 2; 
            baseSize = actualHeight;
        }

        const h1Size = baseSize * 0.06;
        const pSize = baseSize * 0.03;
        truthTitle.style.fontSize = `${h1Size}px`;
        truthText.style.fontSize = `${pSize}px`;


        const h1TopPos = offsetY + (actualHeight * 0.83); 
        const h1LeftPos = offsetX + (actualWidth * 0.25);
        truthTitle.style.top = `${h1TopPos}px`;
        truthTitle.style.left = `${h1LeftPos}px`;

        const pTopPos = offsetY + (actualHeight * 0.90); 
        const pLeftPos = offsetX + (actualWidth * 0.30);
        truthText.style.top = `${pTopPos}px`;
        truthText.style.left = `${pLeftPos}px`;
    }


    function startSurprise() {
        startupOverlay.style.display = 'none';
        music.muted = false; 
        music.play().catch(error => { console.error("音樂播放失敗:", error); });
        animationContainer.style.display = 'flex';
        
        setTimeout(() => {
            animationContainer.style.display = 'none'; 
            continueModal.style.display = 'flex'; 
            continueButton.textContent = "Continue"; 
        }, animationDuration);
    }

    startButton.addEventListener('click', startSurprise);

    continueButton.addEventListener('click', () => {
        continueModal.style.display = 'none'; 
        finalContent.style.display = 'block'; 

        if (truthImage.complete && truthImage.naturalHeight !== 0) {
            updateFontSizeBasedOnImage();
        } else {
            truthImage.addEventListener('load', updateFontSizeBasedOnImage, { once: true });
        }
    });
    
    window.addEventListener('resize', updateFontSizeBasedOnImage);
    
    animationContainer.style.display = 'none';
    continueModal.style.display = 'none';
    finalContent.style.display = 'none';
});