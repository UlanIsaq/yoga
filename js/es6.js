class options{

    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDIV(){
        let newElem=  document.createElement("div");
        document.body.appendChild(newElem);
       let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
       newElem.style.cssText = param;
    }
    
}

let optionObj = new options(500,200,"red", 14,'hello world!');
console.log(optionObj.createDIV());