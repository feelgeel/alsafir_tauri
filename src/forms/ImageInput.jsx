import React, { useEffect } from "react";

function ImageInput({  onChangeImage,imageUri }) {
  useEffect(() => {
    // requestPermission();
  }, []);


  

  return (
    
      <div>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </div>
  );
}


export default ImageInput;
