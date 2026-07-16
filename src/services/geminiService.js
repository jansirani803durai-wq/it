// Questions 11 and 14: Gemini API calls
const API_KEY=import.meta.env.VITE_GEMINI_API_KEY;
const ROOT='https://generativelanguage.googleapis.com/v1beta';
const preferred=['gemini-3.1-flash-lite','gemini-3.1-flash','gemini-2.5-flash-lite','gemini-2.5-flash'];
let modelPromise;

function validateKey(){if(!API_KEY||API_KEY.includes('PASTE_')||API_KEY.includes('YOUR_'))throw new Error('API_KEY_MISSING')}
async function findModel(){
 validateKey(); if(modelPromise)return modelPromise;
 modelPromise=(async()=>{const r=await fetch(`${ROOT}/models?key=${encodeURIComponent(API_KEY)}`);const d=await r.json().catch(()=>({}));
 if(!r.ok){if([401,403].includes(r.status))throw new Error('INVALID_API_KEY');if(r.status===429)throw new Error('QUOTA_EXCEEDED');throw new Error('MODEL_LIST_FAILED')}
 const models=(d.models||[]).filter(m=>m.supportedGenerationMethods?.includes('generateContent')).map(m=>m.name.replace(/^models\//,''));
 const chosen=preferred.find(m=>models.includes(m))||models.find(m=>m.includes('gemini')&&m.includes('flash')&&!/image|audio|tts|live|embedding/i.test(m));
 if(!chosen)throw new Error('MODEL_NOT_AVAILABLE');return chosen})();
 try{return await modelPromise}catch(e){modelPromise=null;throw e}
}
async function generateText(prompt,system){
 const model=await findModel();const r=await fetch(`${ROOT}/models/${encodeURIComponent(model)}:generateContent`,{method:'POST',headers:{'Content-Type':'application/json','X-goog-api-key':API_KEY},body:JSON.stringify({systemInstruction:{parts:[{text:system}]},contents:[{role:'user',parts:[{text:prompt}]}],generationConfig:{temperature:.65,maxOutputTokens:850}})});const d=await r.json().catch(()=>({}));
 if(!r.ok){if(r.status===429)throw new Error('QUOTA_EXCEEDED');if(r.status===404)throw new Error('MODEL_NOT_AVAILABLE');if([401,403].includes(r.status))throw new Error('INVALID_API_KEY');throw new Error(d?.error?.message||'GEMINI_REQUEST_FAILED')}
 const text=d?.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('').trim();if(!text)throw new Error('EMPTY_RESPONSE');return text;
}
export async function askGemini(prompt,history=[]){const context=history.slice(-8).map(m=>`${m.role}: ${m.text}`).join('\n');return generateText(`Conversation:\n${context}\n\nCurrent question:\n${prompt}`,'You are Nexora IT Solutions professional assistant. Answer clearly and concisely about web development, software, cloud, cybersecurity, AI and IT services.')}
export async function generateFaqWithGemini(){const raw=await generateText('Generate exactly 5 common IT company questions and answers. Return ONLY a valid JSON array in this structure: [{"question":"...","answer":"..."}]. Each answer must be 25-55 words. No markdown.','You create professional website FAQ content and strictly follow JSON format.');const clean=raw.replace(/^```json\s*/i,'').replace(/^```\s*/i,'').replace(/```$/i,'').trim();const data=JSON.parse(clean);if(!Array.isArray(data))throw new Error('INVALID_FAQ_FORMAT');return data.filter(x=>typeof x?.question==='string'&&typeof x?.answer==='string').slice(0,5)}
export function aiError(error){return({API_KEY_MISSING:'Gemini API key is not configured. Add it in the .env file.',INVALID_API_KEY:'The Gemini API key is invalid or restricted.',QUOTA_EXCEEDED:'Gemini quota is temporarily exhausted. Please try again later.',MODEL_NOT_AVAILABLE:'A supported Gemini model is not currently available.',EMPTY_RESPONSE:'Gemini returned an empty response.'}[error?.message]||'The AI service is temporarily unavailable. Please try again later.')}
