import React, { useRef } from "react";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  // const scrolldiv = useRef();

  return (
    <div>
        <div style={styles.container}>
          {imageUris.map((uri) => (
            <div key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </div>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} /> c
        </div>
    </div>
  );
}

export default ImageInputList;
