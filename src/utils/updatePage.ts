import { supabase } from "../supabaseClient";
import { Page } from "./types";

export async function updatePage(page: Partial<Page> & Pick<Page, "id">) {
  await supabase.from("pages").update(page).eq("id", page.id);
}
