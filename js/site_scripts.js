var photos = [ ]; //declares an empty array
        var fileNames = [ ]; //declares an empty element to store image file names
        var imageList = [ ]; //declares an empty array to store html list that contains an image
        var image ; //declares an empty array to store the assembled image list codes
        var openList = "<li class= 'partner'>"; //declares a variable to contain open list tag
        var closeList = "</li>"; //declares a variable to contain close list tags

        //create a loop to creat 6 images starting with the index of 0
        for (var i=0; i<6; i++) {
            fileNames.push("partner-"+(i+1)); //creates an image file name and stores it in the array
            photos.push("<img src='/images/partners/"+fileNames[i]+".png'>"); //assemble file name into image and store in an array
            image = openList + photos[i] + closeList; //assemble image element from array with list of elements and store in a variable
            imageList.push(image);
        }
        
        document.getElementById("partners").innerHTML = imageList.join('');