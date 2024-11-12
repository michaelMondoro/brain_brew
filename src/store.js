import { writable } from "svelte/store";
import PocketBase from 'pocketbase';
import {config} from './config.js';

export const pb = await new PocketBase(`https://${config.DB_SERVER}:${config.DB_PORT}`);

export let selectedPost = writable(null);
export let posts = writable(null);
export let searchErr = writable(null);
export let loading = writable(false);


export let authenticated = writable(localStorage.getItem('pocketbase_auth') != undefined);

const storedTag = sessionStorage.getItem('storedTag') ? sessionStorage.getItem('storedTag') : "";
export let selectedTag = writable(storedTag);
selectedTag.subscribe(value => sessionStorage.setItem('storedTag', value));



const storedTheme = sessionStorage.getItem('theme') ? sessionStorage.getItem('theme') : 'dark';
export const theme = writable(storedTheme);
theme.subscribe(value => sessionStorage.setItem('theme', value))