import { useEffect, useState } from "react";
import initialData from "@/content/events-initial.json";
import { EVENTS_FEED_URL,validEventUpdates } from "@/lib/eventUpdates";
const KEY="pa-events-official-v1";
export function useEventUpdates(){
 const [data,setData]=useState(()=>{try{const saved=JSON.parse(localStorage.getItem(KEY));if(validEventUpdates(saved)&&saved.updatedAt>=initialData.updatedAt)return saved;}catch{}return initialData;});
 const [unavailable,setUnavailable]=useState(false);
 useEffect(()=>{let active=true,running=false,controller;
 const refresh=async()=>{if(running)return;running=true;controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),10000);
 try{const response=await fetch(EVENTS_FEED_URL,{cache:"no-store",signal:controller.signal});if(!response.ok)throw new Error("Unavailable");const next=await response.json();if(!validEventUpdates(next))throw new Error("Invalid agenda");if(active){setData(previous=>next.updatedAt>=previous.updatedAt?next:previous);setUnavailable(false);try{const saved=JSON.parse(localStorage.getItem(KEY));if(!validEventUpdates(saved)||next.updatedAt>=saved.updatedAt)localStorage.setItem(KEY,JSON.stringify(next));}catch{try{localStorage.setItem(KEY,JSON.stringify(next));}catch{}}}}
 catch{if(active)setUnavailable(true);}finally{clearTimeout(timeout);running=false;}};
 refresh();const interval=setInterval(refresh,300000);window.addEventListener("focus",refresh);return()=>{active=false;controller?.abort();clearInterval(interval);window.removeEventListener("focus",refresh);};},[]);
 return {data,unavailable};
}
