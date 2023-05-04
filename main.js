////nav html
let nav=document.createElement('div');
let logo=document.createElement('div');
let menu=document.createElement('div');

let logop=document.createElement('p');

let p1=document.createElement('p');
let p2=document.createElement('p');
let p3=document.createElement('p');
let p4=document.createElement('p');

nav.className="navy";
logo.className="logy";
menu.className="right";

let logp=document.createTextNode('Shady');
let lip1=document.createTextNode('Home');
let lip2=document.createTextNode('About');
let lip3=document.createTextNode('Service');
let lip4=document.createTextNode('Contact');

logop.appendChild(logp);
logo.appendChild(logop);

p1.appendChild(lip1);
p2.appendChild(lip2);
p3.appendChild(lip3);
p4.appendChild(lip4);

menu.appendChild(p1);
menu.appendChild(p2);
menu.appendChild(p3);
menu.appendChild(p4);

nav.appendChild(logo);
nav.appendChild(menu);
////nav css
nav.style.cssText=" height: 70px; font-size: 25px;margin:-10px; width:Auto; display: flex; flex-direction: row;align-items: center;background-color:white;";
logo.style.cssText="width:25%;margin:5px;color:green;margin:15px;"
menu.style.cssText="width: 75%;margin:5px; display: flex; flex-direction: row; justify-content: end ;";
p1.style.cssText="color:gray;margin:5px;font-size: 20px";
p2.style.cssText="color:gray;margin:5px;font-size: 20px";
p3.style.cssText="color:gray;margin:5px;font-size: 20px";
p4.style.cssText="color:gray;margin:5px;font-size: 20px";
///center html
let n=1;
let con=document.createElement('div');
con.className="cony";
for(let i=1; i<=5; i++){
 let divy=document.createElement('div');
 divy.className="mydivy";
 for(let j=1; j<=3;j++){
 let product=document.createElement('div');
 product.className="myproduct";
 let spany=document.createElement('span');
 let prop=document.createElement('p');
 let propy=document.createTextNode('Product');
 let spantext=document.createTextNode(n);
 spany.appendChild(spantext)
 prop.appendChild(propy);
 product.appendChild(spany);

 //////css product
 product.style.cssText=" border-radius: 11px; background-color:white;margin:10px;display: flex;flex-direction: column;flex-wrap: nowrap;align-items: center; font-text:10px;padding-right: 150px; padding-left: 150px;";
 spany.style.cssText="font-family: system-ui; font-size:30px; ";
 prop.style.cssText="color:gray;font";
 /////
 product.appendChild(prop);
 divy.appendChild(product);
 n++;
 }
 //////css div
 divy.style.cssText="display:flex; flex-direction: row;justify-content:center;height:100px";
/////////
 con.appendChild(divy);

}
////css container
con.style.cssText="margin:20px;margin-left:5px;margin-righ:5px;margin-left:30px;display:flex;flex-direction:column;";
/////

////footer
let foot=document.createElement('div');
let footp=document.createTextNode("copyright2021");
foot.appendChild(footp);
//css foot
foot.style.cssText="text-align: center;background-color: green;width: auto;height: auto;padding-top: 30px;padding-bottom: 30px;display: flex;align-items: center;flex-direction: row;align-content: space-between;justify-content: center;";


///////body

document.body.style.backgroundColor="#EEEE";
document.body.appendChild(nav);
document.body.appendChild(con);
document.body.appendChild(foot);



















