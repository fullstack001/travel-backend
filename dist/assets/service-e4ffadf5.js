import{a as t}from"./axios-9b9683dd.js";const a="http://escapadezanzibar.exclusive-technology.net:3000",c=async()=>{try{return(await t.get(`${a}/api/service/`)).data}catch{return 500}},o=async r=>{try{return(await t.post(`${a}/api/service/putservicedata`,r)).data}catch{return 500}},n=async r=>{try{return(await t.post(`${a}/api/service/deletedata`,r)).data}catch{return 500}};export{n as d,c as g,o as p};