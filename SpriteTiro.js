function SpriteTiro(){
  this.clickX = 0;
  this.clickY = 0;
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
  this.ay = 0;
  this.ax = 0;
  this.width = 5;
  this.height = 5;
  this.color = "blue";
}

SpriteTiro.prototype.desenhar = function (ctx){
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x, this.y, this.width, this.height);
}

SpriteTiro.prototype.mover = function (dt){
  //Aceleração
  this.vy = this.vy + this.ay*dt;
  this.vx = this.vx + this.ax*dt;

  //Velocidade
  this.y = this.y + (this.clickY*this.vy*dt);
  this.x = this.x + (this.clickX*this.vx*dt);
}