function Level(){
  this.predios = [];
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
  this.color = "blue";
  this.atingido = false;
  this.inimigos = [];
}

Level.prototype.init = function(){
    this.inserePredios();
	this.insereInimigos();
};


Level.prototype.insereInimigos = function() {
	var inimigos = this.inimigos;
	
	var insere = function(inimigo){
		inimigos.push(inimigo);
	}
	
    setInterval(function () {
        var inimigo = new SpriteInimigo();
		inimigo.y = -10;
		inimigo.x = Math.floor((Math.random() * 380) + 1)
		inimigo.vy = 50;
		insere(inimigo);
    }, 3000);
	
};

Level.prototype.inserePredios = function(){
	for (var i = 0; i < 4; i++) {
		var predio = new Level();
		if (i < 2)
			predio.x = 80*(i) + 30;
		else
			predio.x = 80*(i) + 100;
		predio.y = 350;
		predio.width = 30;
		predio.height = 50;
		predio.atingido = false;
		this.predios.push(predio);
	}
};


Level.prototype.desenhar = function (ctx){
  for (var i = 0; i < this.predios.length; i++) {
	ctx.fillStyle = this.predios[i].color;
	ctx.fillRect(this.predios[i].x, this.predios[i].y, this.predios[i].width, this.predios[i].height);
	ctx.strokeStyle = "black";
	ctx.strokeRect(this.predios[i].x, this.predios[i].y, this.predios[i].width, this.predios[i].height);
  }
  
  for (var i = 0; i < this.inimigos.length; i++) {
	this.inimigos[i].desenhar(ctx);
  }
  
};


Level.prototype.mover = function (dt){
	for (var i = 0; i < this.inimigos.length; i++) {
		if(this.inimigos[i].y > 430){
			this.inimigos.splice(i,1);
		}else{
			this.inimigos[i].mover(dt);
		}
	}
	
	
};

Level.prototype.colidiuComPredios = function (alvo, resolveColisao){
	for (var i = 0; i < this.inimigos.length; i++) {
		for (var j = 0; j < alvo.length; j++) {
			if(this.inimigos[i].colodiuComPredio(alvo[j])){
				resolveColisao(i, alvo[j]);
			}
		}
    }
};


Level.prototype.colidiuComAtirador = function (alvo, resolveColisao){
  for (var i = 0; i < this.inimigos.length; i++) {
    if(this.inimigos[i].colidiuComAtirador(alvo)){
      resolveColisao(this.inimigos[i], alvo);
    }
  }
};

/*
Level.prototype.perseguir = function (alvo, dt) {
  for (var i = 0; i < this.sprites.length; i++) {
    this.sprites[i].perseguir(alvo, dt);
  }
};*/

Level.prototype.colidiuComTiro = function (alvo, resolveColisao){
  for (var i = 0; i < this.inimigos.length; i++) {
	for(var j =0; j < alvo.length; j++){
		if(this.inimigos[i].colodiuComTiro(alvo[j])){
			resolveColisao(i, j);
		}
	}
  }
};
