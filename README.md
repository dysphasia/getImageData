getImageData
============

a faster alternative to canvas.getImageData.

===========

for some reason calling ctx.getImageData is really slow. if you want to select sections of image data in a loop,
a quicker alternative is to cache the entire image data array and pull out the data yourself. The getImageDataFaster 
algorithm also lets you select pixels outside of the actual image area. In those cases it returns a transparent black 
pixel rgba(0,0,0,0);

===========

USAGE



  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var imgData = ctx.getImageData(0,0,canvas.width, canvas.height);
  var height = 10;
  var width = 10;
  
  for (var y=0; y<canvas.height; y+=height) {
		for (var x=0; x<canvas.width; x+=width) {			
			var data = getImageDataFaster(x, y, width, height, canvas.width, canvas.height, imgData);
      
      ...
      
    }
	}
    
