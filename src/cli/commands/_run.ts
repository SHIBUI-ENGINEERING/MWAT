import { resolve } from "https://deno.land/std@0.147.0/path/mod.ts";

export async function run(args: string[]) {
  const relatiovePath = args[0];
  const absolutePath = resolve(Deno.cwd(), relatiovePath);
  const workflowModule = await import(absolutePath);

  console.log(workflowModule);
}
