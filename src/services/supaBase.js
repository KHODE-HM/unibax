import { createClient } from "@supabase/supabase-js";
localStorage.setItem("url", "https://diyoxrrtujlpkdftwlhk.supabase.co");
localStorage.setItem(
  "key",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpeW94cnJ0dWpscGtkZnR3bGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NzU1MDgsImV4cCI6MjAyMTE1MTUwOH0.zPGWMhTfUZI6_TCxCd_XNacVhLBFYXKcCZH2IqWhjPs"
);

const url = window.localStorage.getItem("Supabase_url");
const key = window.localStorage.getItem("Supabase_key");

const supabase = createClient(
  localStorage.getItem("url"),
  localStorage.getItem("key")
);
// console.log(supabase);
export default supabase;
