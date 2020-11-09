let coin = {
    state: 0,
    flip: function() {
            this.state = Math.floor(Math.random() * 2);
            return this.toString();
        },
    toString: function() {
            if(this.state){return "Heads"}else{return "Tails"}  
        },
    toHTML: function() {
            let image = document.createElement('img');
            image.setAttribute("style", "height:100px; width:100px;");
            if (this.state){
                image.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn4.digitalartsonline.co.uk%2Fcmsdata%2Fslideshow%2F3600000%2FThe-Queens-fifth-coin-portrait-by-Jody-Clark.jpg&f=1&nofb=1");
            } else {
                image.setAttribute("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.libertygames.co.uk%2Fblog%2Fwp-content%2Fuploads%2F2017%2F05%2Fthe-new-pound-coin-tails.jpg&f=1&nofb=1");
            }
            return image;
        },
    display20Images: function() {
            for(let i=0; i<20; i++){
                this.flip();
                document.querySelector("body").append(this.toHTML())}
        },
    display20Flips: function() {
            for(let i=0; i<20; i++){
                this.flip();
                let flip = document.createElement('span');
                flip.innerHTML =  `${(i+1)}.<strong> ${this.toString()} </strong>`;
                document.querySelector("body").append(flip);
            }
        }
};