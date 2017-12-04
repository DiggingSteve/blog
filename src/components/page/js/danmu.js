
class danmu{
    constructor(con,text,direction){
        this.con=document.getElementById(con);
        this.text=text;
        this.direction=direction;
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
        }, this.direction);
    }
    randomTop(){
        let height=parseInt(((Math.random()*100)/2))*5;
        return height;
    }
}



export default danmu