function Popup(id)
{
	this.element = document.getElementById(id);
	document.body.removeChild(this.element);
	
	this.background = document.createElement('div');
	this.background.style.backgroundColor = 'rgba(0,0,0,0.5)';
	this.background.style.position = 'fixed';
	this.background.style.top = '0';
	this.background.style.left = '0';
	this.background.style.width = '100%';
	this.background.style.height = '100%';
	
	this.element.style.position = 'fixed';
	this.element.style.left = '10%';
	this.element.style.width = '80%';
}

Popup.prototype.open = function()
{
	document.body.appendChild(this.background);
	document.body.appendChild(this.element);
	
	this.overflow = document.body.style.overflow;
	document.body.style.overflow = 'hidden';
	this.element.style.display = 'block';
};

Popup.prototype.close = function()
{
	document.body.removeChild(this.background);
	document.body.removeChild(this.element);
	
	document.body.style.overflow = this.overflow;
};
