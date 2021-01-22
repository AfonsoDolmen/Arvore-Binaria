class No{
    constructor(valor,left=undefined,right=undefined){
        this.valor = valor;
        this.left = left;
        this.right = right;
        this.x = 0;
        this.y = 0;
    }

    draw(){
        circle(this.x,this.y,30);
    }
}