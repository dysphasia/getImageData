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
 *
 * Usage:
 * -------
 * var completeImage = new Uint32Array(ctx.getImageData(0,0,W,H).data.buffer),
 *     imageData = getImageDataFaster(x,y,w,h,W,H,completeImage);
 */
    
var getImageDataFaster = function (x, y, w, h, W, H, d) {
	var arr = new Uint32Array(w*h), i=0;

	for (var r=y; r<h+y; r+=1) {
		for (var c=x; c<w+x; c+=1) {
			var O = ((r*W) + c); 
			if (c<0 || c>=W || r<0 || r>=H) {
				arr[i++] = 0;
			} else {
				arr[i++] = d[O];
			}
		}
	}

	return arr;
};

