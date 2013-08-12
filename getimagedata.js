/*
 * nicholas ortenzio
 * nicholas.ortenzio@gmail.com
 *
 * a faster alternative to canvas getImageData()
 *
 * The MIT License (MIT)
 * Copyright (c) 2013 Nicholas Ortenzio
 * 
 * parameters
 * --------
 * x - starting x coordinate
 * y - starting y coordinate
 * w - width of rectangle to get data from
 * h - height of rectangle to get data from
 * W - width of the original image data
 * H - height of th original image data
 * d - image data (cache this once)
 */
    
var getImageDataFaster = function (x, y, w, h, W, H, d) {
  var arr = [];

	for (var r=y; r<h+y; r+=1) {
		for (var c=x; c<w+x; c+=1) {
			var O = ((r*W) + c) * 4; 
			if (c<0 || c>=W || r<0 || r>=H) {
  			arr.push(0,0,0,0);
			} else {
				arr.push(d[O+0], d[O+1], d[O+2], d[O+3]);
			}
		}
	}

	return arr;
};

