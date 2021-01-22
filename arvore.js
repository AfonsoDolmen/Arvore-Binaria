class ArvoreBinaria{
    constructor(raiz){
        this.raiz = raiz;
    }

    inserir(valor){
        this.novoNo = new No(valor,undefined,undefined);

        if(this.raiz == undefined){
            this.raiz = this.novoNo;
            this.raiz.x = width/2;
            this.raiz.y = 20;
            circle(this.raiz.x,this.raiz.y,30);
            text(this.raiz.valor,this.raiz.x,this.raiz.y);
        }else{
            this.inserirNo(this.raiz,this.novoNo);
        }
    }

    inserirNo(no,novoNo){
        if(novoNo.valor < no.valor){
            if(no.left == undefined){
                novoNo.x = no.x - 50;
                novoNo.y = no.y + 80;
                line(novoNo.x,novoNo.y,no.x,no.y)

                no.left = novoNo;
                circle(no.left.x,no.left.y,30);
                text(no.left.valor,no.left.x,no.left.y);
            }else{
                this.inserirNo(no.left,novoNo);
            }
        }else{
            if(no.right == undefined){
                novoNo.x = no.x + 50;
                novoNo.y = no.y + 80;
                line(novoNo.x,novoNo.y,no.x,no.y)

                no.right = novoNo;
                circle(no.right.x,no.right.y,30);
                text(no.right.valor,no.right.x,no.right.y);
            }else{
                this.inserirNo(no.right,novoNo);
            }
        }
    }
}