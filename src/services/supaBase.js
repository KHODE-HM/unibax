import { createClient } from "@supabase/supabase-js";

const url = window.localStorage.getItem("Supabase_url");
const key = window.localStorage.getItem("Supabase_key");

const supabase = createClient(
  localStorage.getItem("url"),
  localStorage.getItem("key")
);
// console.log(supabase);
export default supabase;
