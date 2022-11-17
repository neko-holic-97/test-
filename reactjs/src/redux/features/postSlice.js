import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk('posts/getPost', async()=>{
    return fetch( "https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
})

export const createPost = createAsyncThunk( "posts/createPost", async({content})=>{
    return   fetch( "https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: content.title,
            body: content.body
        })
    })
    .then(res=> res.json())
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false
    },
    extraReducers: {
        [getPost.pending]: (state, action)=>{
            state.loading = true
        },
        [getPost.fulfilled]: (state, action)=>{
            state.loading = false;
            state.posts = action.payload
        },
        [getPost.rejected]: (state,action)=>{
            state.loading = false
        },
        [createPost.pending]: (state, action)=>{
            state.loading = true
        },
        [createPost.fulfilled]: (state, action)=>{
            state.loading = false;
            state.posts = [action.payload]
        },
        [createPost.rejected]: (state,action)=>{
            state.loading = false
            
        }
    }
})

export default postSlice.reducer