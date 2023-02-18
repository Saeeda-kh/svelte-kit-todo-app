
import { writable } from "svelte/store";
export const globalState = writable('my first global state')

export const count = writable(0)