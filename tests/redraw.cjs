const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');

function element(){
  return{
    textContent:'',style:{},listeners:{},children:[],
    addEventListener(type,listener){this.listeners[type]=listener},
    setAttribute(){},removeAttribute(){},append(...children){this.children.push(...children)},
    replaceChildren(...children){this.children=children},
    getContext(){return{}},
    getBoundingClientRect(){return{left:0,top:0,width:100,height:100}},
    setPointerCapture(){},hasPointerCapture(){return false}
  };
}

const elements=new Map();
const document={
  querySelector(selector){if(!elements.has(selector))elements.set(selector,element());return elements.get(selector)},
  querySelectorAll(){return[]},
  createElement:element
};
const context=vm.createContext({document,window:{addEventListener(){}},console});
const html=fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8');
vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1],context);
vm.runInContext("hasPhoto=true;traces=Object.fromEntries(lineOrder.map(key=>[key,[0,10,20,30].map(x=>({x,y:10}))]));updateAnalysis()",context);

const generate=elements.get('#generate'),guide=elements.get('.guide');
const pointer={pointerId:1,clientX:0,clientY:10,preventDefault(){}};
assert.equal(generate.disabled,false,'완성된 세 선은 결과 버튼을 활성화해야 합니다.');

guide.listeners.pointerdown(pointer);
assert.equal(generate.disabled,true,'다시 그리는 동안에는 결과 버튼이 비활성화되어야 합니다.');
elements.get('#reading-form').listeners.submit({preventDefault(){}});
assert.equal(elements.get('#status').textContent,'사진을 먼저 분석해주세요.','다시 그리는 동안 이전 분석값으로 제출할 수 없어야 합니다.');

guide.listeners.pointerup(pointer);
assert.equal(generate.disabled,true,'너무 짧은 선을 거부한 뒤에도 결과 버튼은 비활성화되어야 합니다.');
assert.equal(elements.get('#analysis-list').children[0].children[1].textContent,'그려주세요','거부한 선의 이전 분석 표시가 지워져야 합니다.');

guide.listeners.pointerdown(pointer);
for(const clientX of [10,20,30])guide.listeners.pointermove({...pointer,clientX});
guide.listeners.pointerup({...pointer,clientX:30});
assert.equal(generate.disabled,false,'유효한 선을 다시 완성하면 결과 버튼이 활성화되어야 합니다.');
assert.equal(generate.textContent,'내 손금 결과 보기');
