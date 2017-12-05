
class danmu{
    constructor(con,text,duration){
        this.con=document.getElementById(con);
        this.text=text;
        this.duration=duration;
        this.createDanmu();
    }
    createDanmu(){
        let danmu=document.createElement("span");
        this.con.appendChild(danmu);
        danmu.innerText=this.text;
        danmu.classList.add("danmu");
        danmu.style.top=this.randomTop()+"px";
        
        setTimeout(() => {
            danmu.style.right='120%';
        }, 500);

        setTimeout(() => {
            danmu.remove();
            danmu=null;
        }, this.duration);
    }
    randomTop(){
        let height=parseInt(((Math.random()*100)/2))*5;
        return height;
    }
}



export default danmu