import React, { useState } from "react";
import { useFormikContext } from "formik";
import { save, open, ask } from '@tauri-apps/api/dialog'
import { writeTextFile, readTextFile,BaseDirectory,copyFile,readBinaryFile,readDir } from '@tauri-apps/api/fs'
import { sendNotification } from '@tauri-apps/api/notification'
import ErrorMessage from "./C_ErrorMessage";
import ImageInputList from "./ImageInputList";
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { appDataDir, join } from '@tauri-apps/api/path';
function C_ImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const [imgState,setimgState] = useState();
  const [imgState1,setimgState1] = useState();
  const imageUris = values[name];
  let image_list=[]
  const handleAdd = async(e) => {
    e.preventDefault()
      const filePath = await open({
        multiple:false,
      filters: [{
        name: "images",
        extensions: ["jpeg","png","PNG","JPEG","jpg","JPG"]
      }]
    })
    const assetUrl = convertFileSrc(filePath);
    // console.log( assetUrl);
    
    setFieldValue(name, assetUrl);
    setimgState(assetUrl)
    // const appDataDirPath = await appDataDir();
    // const finalfilePath = await join(appDataDirPath, filePath);
    // const assetUrl = convertFileSrc(filePath);
    // let copied=await copyFile(filePath, 'rand.jpeg', { dir: BaseDirectory.Desktop });

//read the img from local disk
  //  const fileContent = await readTextFile("rand.jpeg",{dir:BaseDirectory.Desktop})
//convert it to a file src
  // const assetUrl1 = convertFileSrc(fileContent);
//set the state
  //  setimgState(assetUrl1)
    ///////////////////////
    ////read imgs from dir
    /////////////////////

    // const images_in_cache = await readDir(
    //   'taurimg',
    //   {
    //     dir: BaseDirectory.Desktop,
    //     recursive: false
    //   }
    // );

    // images_in_cache.forEach(async (entry) => {
    //   image_list.push(convertFileSrc(entry.path)); 
    //   // console.log(entry);
    // });
    // console.log("img from dir",image_list[2]);
    // console.log("img from open fs",assetUrl);

  };
  const handleChange=(e)=>{
    // console.log(e.target.files);

    setimgState(URL.createObjectURL(e.target.files[0]));
    setimgState1(e.target.files[0]);

  }
// console.log(imageUris);
  return (
    <>
    <button onClick={handleAdd} >save it on local space</button>
    {/* <input type="file" onChange={handleChange} /> */}
    {imageUris&&<img src={imageUris} width="200px" height="100px"/>}
      {/* <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      /> */}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default C_ImagePicker;
