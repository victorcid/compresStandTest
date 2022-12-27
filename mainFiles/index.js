$('#filePathTxt').on('change', function(){
   $('#filePathTxt').val(this.value.replace(/\\/g,'/'));
   path=this.value.replace(/\\/g,'/')
 });

$(window).on('load', async function() {

  const fs = require('fs');
  var txt =fs.readFileSync('./testFiles/ana_karenina.rar','hex')

// console.log(txt);

  var index = 1
  var txt2 = txt.match(new RegExp(`.{1,${index}}`,"g"));
  var Arr1 =[]
  //console.log(txt2);

  for (var i = 0; i < 16000; i++) Arr1.push(txt2[i]);
  //console.log(Arr1);

  var Stg1 =''
  for (var i = 0; i < Arr1.length; i++) Stg1 += `<div class="x${Arr1[i]}"></div>`;
  //console.log(Stg1);
  $('.step0').find('.grid-container').html(Stg1)

  var Arr2 =[]
  for (var i = 0; i < Arr1.length; i++) {
    if (!Arr2.some(e=>e[0]==Arr1[i])) Arr2.push([Arr1[i],1])
    else Arr2[Arr2.findIndex(e=>e[0]==Arr1[i])][1]++
  }

  Arr2.sort((a, b)=> b[1]-a[1]);
  var Stg2=''
  for (var i = 0; i < Arr2.length; i++) {
    Stg2 += `
    <div>
      <div class="x${Arr2[i][0]}" style="width: 1em; height: 1em; display:inline-block"></div>
      <label style="display:inline-block">${Arr2[i][0]} : ${Arr2[i][1]}</label>
    </div>`
  }

  $('.step0').find('.info').html(Stg2)
  //console.log(Arr2);


  //////////////////////////////////////////////////////////////////////////////////////////
  var Arr3 = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e']
  var Arr4 = []
  var Arr5=[]
  var x = 0
  var y =0
  var w = 0
  for (var i = 0; i < Arr1.length; i++) {
    if (Arr3.some(e=>e[0]==Arr1[i])){
      Arr4.push(Arr1[i])
      if (y>0) Arr5.push(y+3)
      Arr5.push(Arr3.findIndex(e=>e[0]==Arr1[i]))

      if (y>w) w=y;
      y=0
    }else {
      Arr4.push(0)
      x++
      y++
    }
  }
  if (y>w) w=y;


  Arr3.push([0,x])

  var Stg3=''
  for (var i = 0; i < Arr3.length; i++) {
    Stg3 += `
    <div>
      <div class="x${Arr3[i][0]}" style="width: 1em; height: 1em; display:inline-block"></div>
      <label style="display:inline-block">${Arr3[i][0]} : ${Arr3[i][1]}</label>
    </div>`
  }

  Stg3 += `
  <div>
    <div style="width: 1em; height: 1em; display:inline-block"></div>
    <label style="display:inline-block">maximo ${w}</label>
  </div>`


  Stg3 += `
  <div>
    <div style="width: 1em; height: 1em; display:inline-block"></div>
    <label style="display:inline-block">largo compeso ${Arr5.length}</label>
  </div>`

  $('.step1').find('.info').html(Stg3)

  var Stg4 =''
  for (var i = 0; i < Arr4.length; i++) Stg4 += `<div class="x${Arr4[i]}"></div>`;
  //console.log(Stg1);
  $('.step1').find('.grid-container').html(Stg4)

  //console.log(Arr5);

  /////////////////////////////////////////////////////////////////////////////////////



})
