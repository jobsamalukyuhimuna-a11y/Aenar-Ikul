"use client";

import { useState } from "react";

export default function NewStoryPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [music, setMusic] = useState("");
  const [content, setContent] = useState("");

  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingMusic, setUploadingMusic] = useState(false);


  async function uploadFile(
    file: File,
    type: "image" | "music"
  ) {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("type", type);


    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });


    const data = await response.json();


    if (data.success) {
      return data.url;
    }


    throw new Error("Upload failed");
  }



  async function handleImageUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;


    try {

      setUploadingImage(true);


      const url = await uploadFile(file, "image");


      console.log("COVER:", url);


      setCover(url);


    } catch (error) {

      console.error(error);

      alert("Image upload failed");


    } finally {

      setUploadingImage(false);

    }
  }




  async function handleMusicUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;


    try {

      setUploadingMusic(true);


      const url = await uploadFile(file, "music");


      console.log("MUSIC:", url);


      setMusic(url);


    } catch (error) {

      console.error(error);

      alert("Music upload failed");


    } finally {

      setUploadingMusic(false);

    }
  }





  async function saveStory() {


    console.log("SAVING STORY:", {
      title,
      slug,
      description,
      cover,
      music,
      content,
    });



    if (
      !title ||
      !slug ||
      !description ||
      !content ||
      !cover
    ) {

      alert(
        "Please fill all required fields and upload cover image."
      );

      return;
    }



    try {


      const response = await fetch(
        "/api/admin/stories",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },


          body: JSON.stringify({
            title,
            slug,
            description,
            cover,
            music,
            content,
          }),

        }
      );



      const data = await response.json();



      console.log(
        "SERVER RESPONSE:",
        data
      );



      alert(data.message);



    } catch (error) {


      console.error(
        "SAVE ERROR:",
        error
      );


      alert(
        "Failed to save story"
      );

    }

  }





  return (

    <main
      style={{
        minHeight: "100vh",
        background: "#090909",
        color: "white",
        padding: 60,
      }}
    >


      <h1
        style={{
          color: "#d4af37",
          fontSize: 46,
          marginBottom: 40,
        }}
      >
        Create New Story
      </h1>



      <input
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        style={input}
      />



      <input
        placeholder="Slug"
        value={slug}
        onChange={(e)=>setSlug(e.target.value)}
        style={input}
      />



      <label style={label}>
        Cover Image
      </label>



      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={input}
      />



      {uploadingImage && (
        <p>
          Uploading image...
        </p>
      )}



      {cover && (
        <p style={{marginBottom:20}}>
          Selected:
          <br/>
          {cover}
        </p>
      )}






      <label style={label}>
        Music File
      </label>



      <input
        type="file"
        accept="audio/*"
        onChange={handleMusicUpload}
        style={input}
      />



      {uploadingMusic && (
        <p>
          Uploading music...
        </p>
      )}



      {music && (
        <p style={{marginBottom:20}}>
          Selected:
          <br/>
          {music}
        </p>
      )}






      <textarea
        placeholder="Description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        style={{
          ...input,
          height:120,
        }}
      />





      <textarea
        placeholder="Story Content"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        style={{
          ...input,
          height:350,
        }}
      />






      <button
        onClick={saveStory}
        style={{
          padding:"18px 35px",
          background:"#d4af37",
          color:"#111",
          border:"none",
          borderRadius:10,
          cursor:"pointer",
          fontWeight:"bold",
        }}
      >
        Save Story
      </button>


    </main>

  );
}




const label: React.CSSProperties = {

  display:"block",
  marginBottom:8,
  color:"#d4af37",

};




const input: React.CSSProperties = {

  width:"100%",
  marginBottom:20,
  padding:15,
  borderRadius:10,
  border:"1px solid #555",
  background:"#151515",
  color:"white",
  fontSize:16,

};