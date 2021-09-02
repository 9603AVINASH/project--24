class Player {
    constructor (x,y,width,height) {
    var options = {
        isStatic:true
    };
        
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/playerArcher.png");
     World.add(world, this.body);
    }
     
    display() {
     
            if (move === "up" && computerArcher.body.angle < 1.77) {
              angleValue = -0.1;
            }else{
               angleValue = -0.1;
            }
          if(move === "down" && computerArcher.body.angle > 1.47) {
            angleValue = -0.1;
          }else{
            angleValue = 0.1;
          }
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        matter.body.setAngle(this.body,-PI/2);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
    
        pop();
      }
    }