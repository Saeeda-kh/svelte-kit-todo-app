
import { writable } from "svelte/store";
export const globalState = writable('my first global state')

export const count = writable(0)

export default cars = writable([ { make: "Ford", model: "Taurus", year: "2015" },
{ make: "Toyota", model: "Avalon", year: "2013" }])

