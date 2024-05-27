import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { run } from "../Config/gemini";


const initialState = {
    respose: {
        text: "",
        status: "started",
        previoustext:[]
    }
};

export const getResponse = createAsyncThunk('/getresponse',async(req,res) => {
    const response = await run(req);
    return response.text()
})



export const responseSlice = createSlice({
    name: "response",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.respose.previoustext.push(action.payload)
        },
        changeStatus: (state, action) => {
            state.respose.status = action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getResponse.pending,(state, action) => {
            state.respose.status = "pending";
        })
        builder.addCase(getResponse.fulfilled,(state, action) => {
            const responseArray = action.payload.split("**");
            let newResponse = "";

            for (let i = 0; i < responseArray.length; i++) {
                const element = responseArray[i];
                
                if(i === 0 || i%2 !== 1) {
                    newResponse += element;
                }
                else {
                    newResponse += "<b>" + element + "</b>";
                }
            }

            const response2 = newResponse.split("*").join("<br/>");
            state.respose.text = response2;
            state.respose.status = "completed";
        })
    }
})

export const { addTask, changeStatus } = responseSlice.actions;
export default responseSlice.reducer;