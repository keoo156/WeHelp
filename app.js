const sum = document.getElementById("sum");

        const preClo3rd = document.querySelectorAll(".prethird");
        const thisClo3rd = document.querySelectorAll(".thisthird");
        const preClo4th = document.querySelectorAll(".prefourth");
        const thisClo4th = document.querySelectorAll(".thisfourth");
        const allClock  = document.querySelectorAll("input");
        const totalEle = document.querySelector(".totalEle")
        const totalMoney = document.querySelector(".totalMoney")
        const thirdMoney = document.querySelector("#showSumThird")
        const fourMoney = document.querySelector("#showSumFourth")
        
        
        //function
        function sumClock(clocks){
            let sumClo = 0;
            clocks.forEach((clock)=>{
                sumClo += clock.valueAsNumber
            })
            
            return sumClo
        }
        //檢查空白
        function checkEmpty(){
            let arr = []
            allClock.forEach(clock=>{
                arr.push(clock.value)
            })
            return arr.some((a)=>a ==="")
        }
        

        //把各個電表的值相加
        sum.addEventListener("click", ()=>{
            //看看有沒有空白
            if (!checkEmpty()){
            let thirdPreSum = sumClock(preClo3rd);
            let thirdThisSum = sumClock(thisClo3rd);
            let fourPreSum = sumClock(preClo4th);
            let fourThisSum = sumClock(thisClo4th);
            let incresed = (thirdThisSum - thirdPreSum) / 10 + (fourThisSum - fourPreSum) / 10
            let restEle = totalEle.valueAsNumber - incresed
            let thirdPercent = ((thirdThisSum - thirdPreSum)/10 + restEle / 2) / totalEle.valueAsNumber
            let fourPercent =  ((fourThisSum - fourPreSum)/10 + restEle / 2) / totalEle.valueAsNumber
            thirdMoney.innerHTML = "三樓總電費為:" + totalMoney.valueAsNumber * ((Math.round(thirdPercent * 100)) / 100)
            fourMoney.innerHTML = "四樓總電費為:" + totalMoney.valueAsNumber * ((Math.round(fourPercent * 100)) / 100)
        }else{
            alert("請輸入有效數值")
        }
        })
        
       