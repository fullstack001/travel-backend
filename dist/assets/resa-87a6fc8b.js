import{a as t}from"./axios-9b9683dd.js";const e="http://127.0.0.1:5005",c=async a=>{try{return(await t.post(`${e}/api/resa/getresadata`,a)).data}catch{return 500}},o=async a=>{try{return(await t.post(`${e}/api/resa/getresadata-date`,a)).data}catch{return 500}},d=async a=>{try{return(await t.post(`${e}/api/resa/putresadata`,a)).data}catch{return 500}},n=async a=>{try{return(await t.post(`${e}/api/resa/deletedata`,a)).data}catch{return 500}},p=async a=>{try{return(await t.post(`${e}/api/resa/getdailydata`,{data:a})).data}catch{return 500}},i=async a=>{try{return(await t.post(`${e}/api/resa/getexportdata`,{data:a})).data}catch{return 500}},y=async a=>{try{return(await t.post(`${e}/api/resa/putdailydata`,a)).data}catch{return 500}},u=async a=>{try{return(await t.post(`${e}/api/resa/deletedailydata`,a)).data}catch{return 500}};export{o as a,i as b,p as c,n as d,y as e,u as f,c as g,d as p};