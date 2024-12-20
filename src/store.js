import { writable } from "svelte/store";
import PocketBase from 'pocketbase';
import {config} from './config.js';

export const pb = await new PocketBase(`https://${config.DB_SERVER}:${config.DB_PORT}`);

export let selectedPost = writable(null);
export let selectedCategory = writable(null);
export let page = writable(1);
export let pageCount = writable(1);
export let currentFilter = writable("");

export let posts = writable(null);
export let searchErr = writable(null);
export let loading = writable(false);
export let totalPosts = writable(null);


export let authenticated = writable(localStorage.getItem('pocketbase_auth') != undefined);

const storedTag = sessionStorage.getItem('storedTag') ? sessionStorage.getItem('storedTag') : "";
export let selectedTag = writable(storedTag);
selectedTag.subscribe(value => sessionStorage.setItem('storedTag', value));


const storedTheme = sessionStorage.getItem('theme') ? sessionStorage.getItem('theme') : 'dark';
export const theme = writable(storedTheme);
theme.subscribe(value => sessionStorage.setItem('theme', value))


/* DB stuff */
export let fetchPosts = async (filter) => {
    loading.set(true);
    page.set(1);
    const postItems = await pb.collection('posts').getList(1, 50, {sort: '-updated', filter: filter ? filter : ""});
    pageCount.set(postItems.totalPages);
    console.log(postItems.totalPages)
    postItems.items.length == 0 ? searchErr.set(true) : searchErr.set(false);

    currentFilter.set(filter);
    totalPosts.set(postItems.totalItems);
    posts.set(postItems.items);
    loading.set(false);
}