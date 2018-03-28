class Tab{
    constructor(tab,num=4){
        this.tab = tab
        this.num = num
    }
    init(){
        this.tabChild = document.createElement("div");
        this.tabChild.classList.add("tab");
        for(let i=0;i<this.num;i++){
           let div = document.createElement("div")
           div.style.display = 'none';
           div.innerText = i;
           this.tabChild.appendChild(div)

        }
        this.select = document.createElement("div");
        this.select.classList.add("select");
        for(let i=0;i<this.num;i++){
            let a = document.createElement("a");
            a.setAttribute("href","#");
            a.innerText = i
            this.select.appendChild(a);

        }
        // this.tab.appendChild(tabChild);
        // this.tab.appendChild(select)
        let temp = document.createDocumentFragment();
        temp.appendChild( this.select)
        temp.appendChild(this.tabChild);
        this.tab.appendChild(temp);
        let first  = document.querySelector(".tab>div:first-child");
        first.style.display = "block";
        document.querySelector(".select>a:first-child").classList.add("active");

        this.bind()
        }
    bind(){
        let selectA = document.querySelectorAll(".select>a");
        let _this =this;
        selectA.forEach((n) =>{
            n.addEventListener("click",function(){
                selectA.forEach((m) =>{
                    m.classList.remove("active")
                })
                let index = Array.prototype.indexOf.call(selectA,this);
                n.classList.remove("active");
                this.classList.add("active");
               Array.prototype.forEach.call( _this.tabChild.children,(n) =>{
                      n.style.display = "none";
                      n.classList.remove("active")
                })
                _this.tabChild.children[index].style.display = "block";
                _this.tabChild.children[index].classList.add("active")
            })
        })
    }
}