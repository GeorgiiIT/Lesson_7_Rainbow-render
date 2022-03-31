hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

native.reverse();
destination.reverse();

rainbow = [...hero,...native,...destination]

rainbow.unshift(`Richard`)
rainbow.splice(1,1)
rainbow.splice(4,1,`Vain`)
rainbow.splice(3,0,`Gave`,`Battle`)

colors = [`red`,`orange`,`yellow`,`green`,`lightblue`,`indigo`,`purple`]

for(i=0, render=[]; i<rainbow.length; i++){
render.push(`<div class="block">
<div class="circle" style="background-color: ${colors[i]}"></div>
<p>${rainbow[i]}</p>
</div>`);
}
document.write(`<div class="rainbow">${render.join(``)}</div>`);