import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { run } from "../Config/gemini";


const initialState = {
    respose: {
        text: "",
        status: "not started",
    }
};

export const getResponse = createAsyncThunk('/getresponse',async(req,res) => {
    const response = await run(req)
    return response.text()
})


export const responseSlice = createSlice({
    name: "response",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id!== action.payload)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getResponse.pending,(state, action) => {
            state.respose.status = "pending";
        })
        builder.addCase(getResponse.fulfilled,(state, action) => {
            state.respose.text = action.payload;
            state.respose.status = "completed";
        })
    }
})

export const { addTask, deleteTask } = responseSlice.actions;
export default responseSlice.reducer;