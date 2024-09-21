import supabase from "./supabase";

export async function getQuestions() {
  let { data, error } = await supabase.from("questions").select("*");

  if (error) {
    console.error(error);
    throw new Error("Questions could not be loaded");
  }

  return data;
}
