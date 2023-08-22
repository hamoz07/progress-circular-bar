const ratingContainers = Array.from(document.getElementsByClassName("rating"));

ratingContainers.forEach((container, index) => {
    const counter = container.querySelector(".counter");
    const storedVal = +counter.getAttribute("data-prog");
    let currentValue = 0;
    
        
    for (let i = 0; i < storedVal; i++) {
        const newBlock = document.createElement("div");
        newBlock.className = "block";
        newBlock.style.transform = `rotate(${3.6 * (i + 1)}deg)`;
        newBlock.style.animationDelay = `${(i + 1) / 50}s`;
        
        
        container.appendChild(newBlock);
    }
    

    const countUp = () => {
        if (currentValue <= storedVal) {
            counter.innerText = currentValue;
            currentValue += 1;
            setTimeout(countUp, 20);
        }
    };
    
    
    setTimeout(countUp, index * 500); 
});

