import { validPalioUpdates, isMunicipalSource } from "./palioUpdates";
import initial from "../content/palio-initial.json";
const item = {id:"test",title:"Comunicato",text:"Test di validazione, non pubblicato",sourceUrl:"https://www.comune.piazzaarmerina.en.it/novita/esempio.html",publishedAt:"2026-11-04"};
test("accepts pending with no invented dates",()=>expect(validPalioUpdates(initial)).toBe(true));
test("rejects different edition",()=>expect(validPalioUpdates({...initial,edition:2026})).toBe(false));
test("requires official evidence for confirmed dates",()=>{
 expect(validPalioUpdates({...initial,status:"confirmed",items:[item]})).toBe(false);
 expect(validPalioUpdates({...initial,status:"confirmed",dateLabel:"Date comunicate",dateSourceUrl:item.sourceUrl,items:[item]})).toBe(true);
});
test("rejects unsafe or misleading source URLs",()=>{
 for(const url of ["javascript:alert(1)","https://www.comune.piazzaarmerina.en.it.evil.example/a","http://www.comune.piazzaarmerina.en.it/a","https://user:pass@www.comune.piazzaarmerina.en.it/a"]){expect(isMunicipalSource(url)).toBe(false);expect(validPalioUpdates({...initial,items:[{...item,sourceUrl:url}]})).toBe(false);}
});
test("rejects malformed dates and duplicate notices",()=>{
 expect(validPalioUpdates({...initial,verifiedAt:"2026-02-31"})).toBe(false);
 expect(validPalioUpdates({...initial,items:[item,item]})).toBe(false);
});
test("partial notices do not require inventing full programme",()=>expect(validPalioUpdates({...initial,status:"partial",items:[item]})).toBe(true));
