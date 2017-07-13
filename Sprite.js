function Sprite(){
  this.g = 0;
  this.x = 190;
  this.y = 350;
  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 50;
  this.color = "blue";
  this.tiros = [];
}

Sprite.prototype.desenhar = function (ctx){
  ctx.beginPath();
    ctx.moveTo(200, 350); 
    ctx.lineTo(190, 400); 
    ctx.lineTo(210, 400); 
    ctx.closePath();
	ctx.fillStyle = "#6CA6CD";
	ctx.fill();
    ctx.stroke();
  
  for (var i = 0; i < this.tiros.length; i++) {
    this.tiros[i].desenhar(ctx);
  }
}

Sprite.prototype.mover = function (dt){
  //Aceleração
  this.vx = this.vx + this.ax*dt;
  this.vy = this.vy + (this.ay+this.g)*dt;

  //Velocidade
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;

  this.angle = this.angle + this.vang *dt;
  
  for (var i = 0; i < this.tiros.length; i++) {
	if(this.tiros[i].y < -10 || this.tiros[i].x > 410 || this.tiros[i].x < - 10){
		this.tiros.splice(i,1);
	}else{
		this.tiros[i].mover(dt);
	}
  }
}

//Colisão retangular
Sprite.prototype.colodiuCom = function(alvo){
  if(this.x + this.width < alvo.x)return false;
  if(this.x > alvo.x + this.width)return false;
  if(this.y + this.height < alvo.y)return false;
  if(this.y > alvo.y + this.height)return false;
  return true;
}

//Colisão retangular
Sprite.prototype.colodiuComTiro = function(alvo){
  if(this.x + this.width < alvo.x)return false;
  if(this.x > alvo.x + alvo.width)return false;
  if(this.y + this.height < alvo.y)return false;
  if(this.y > alvo.y + alvo.height)return false;
  return true;
}

Sprite.prototype.atirar = function (clickX, clickY){
	var dy = clickY - 430;
	var dx = clickX - 205;
	//console.log(dy)
	var h = (Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2))).toFixed(0);
	var dxh = dx / h;
	var dyh = dy / h;
	
	var tiro = new SpriteTiro();
	tiro.x = this.x + 6;
	tiro.y = this.y;
	tiro.vy = 150;
	tiro.vx = 150;
	tiro.clickX = dxh.toFixed(2);
	tiro.clickY = dyh.toFixed(2);
	this.tiros.push(tiro);
}

