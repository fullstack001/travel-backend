import{a}from"./axios-9b9683dd.js";const e="http://127.0.0.1:5005",s=async()=>{try{return(await a.get(`${e}/api/hotel/`)).data}catch{return 500}},c=async t=>{try{return(await a.post(`${e}/api/hotel/puthoteldata`,t)).data}catch{return 500}},d=async t=>{try{return(await a.post(`${e}/api/hotel/deletedata`,t)).data}catch{return 500}};export{d,s as g,c as p};