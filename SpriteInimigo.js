function SpriteInimigo(){
  this.x = 0;
  this.y = 0;
  this.vy = 0;
  this.vx = 0;
  this.ay = 0;
  this.ax = 0;
  this.width = 30;
  this.height = 30;
  this.color = "green";
}

SpriteInimigo.prototype.desenhar = function (ctx){
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.strokeStyle = "black";
  ctx.strokeRect(this.x, this.y, this.width, this.height);
}

SpriteInimigo.prototype.mover = function (dt){
  //Aceleração
  this.vy = this.vy + this.ay*dt;

  //Velocidade
  this.y = this.y + (this.vy*dt);
}

//Colisão retangular
SpriteInimigo.prototype.colodiuComPredio = function(alvo){
  if(this.x + this.width < alvo.x)return false;
  if(this.x > alvo.x + alvo.width)return false;
  if(this.y + this.height < alvo.y)return false;
  if(this.y > alvo.y + alvo.height)return false;
  return true;
}

//Colisão retangular
SpriteInimigo.prototype.colodiuComTiro = function(alvo){
  if(this.x + this.width < alvo.x)return false;
  if(this.x > alvo.x + alvo.width)return false;
  if(this.y + this.height < alvo.y)return false;
  if(this.y > alvo.y + alvo.height)return false;
  return true;
}

//Colisão retangular
SpriteInimigo.prototype.colidiuComAtirador = function(alvo){
  if(this.x + this.width < alvo.x)return false;
  if(this.x > alvo.x + alvo.width)return false;
  if(this.y + this.height < alvo.y)return false;
  if(this.y > alvo.y + alvo.height)return false;
  return true;
}