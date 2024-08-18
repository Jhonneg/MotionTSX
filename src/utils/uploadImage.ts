import { supabase } from "../supabaseClient";

export default async function uploadImage(file?: File) {
  try {
    if (!file) {
      throw new Error("You must select an Image");
    }
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = fileName;

    await supabase.storage.from("images").upload(filePath, file);
    return { filePath, fileName };
  } catch (err) {
    alert(err);
  }
}
