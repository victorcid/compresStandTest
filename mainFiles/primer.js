$('#filePathTxt').on('change', function(){
   $('#filePathTxt').val(this.value.replace(/\\/g,'/'));
   path=this.value.replace(/\\/g,'/')
 });

$(window).on('load', async function() {

  const fs = require('fs');
  var txt =fs.readFileSync('./testFiles/ana_karenina.pdf','hex')

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
  var Arr3 = [Arr2[Arr2.length-1],Arr2[Arr2.length-2],Arr2[Arr2.length-3]]
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

  var Arr6 = [Arr2[Arr2.length-4],Arr2[Arr2.length-5],Arr2[Arr2.length-6]]
  var Arr7 = []
  var Arr8=[]
  var x = 0
  var y =0
  var w = 0
  for (var i = 0; i < Arr1.length; i++) {
  if (Arr3.some(e=>e[0]==Arr1[i])){

  }else if (Arr6.some(e=>e[0]==Arr1[i])){
      Arr7.push(Arr1[i])
      if (y>0) Arr8.push(y+3)
      Arr8.push(Arr6.findIndex(e=>e[0]==Arr1[i]))

      if (y>w) w=y;
      y=0
    }else {
      Arr7.push(0)
      x++
      y++
    }
  }
  if (y>w) w=y;
  Arr6.push([0,x])

  var Stg5=''
  for (var i = 0; i < Arr6.length; i++) {
    Stg5 += `
    <div>
      <div class="x${Arr6[i][0]}" style="width: 1em; height: 1em; display:inline-block"></div>
      <label style="display:inline-block">${Arr6[i][0]} : ${Arr6[i][1]}</label>
    </div>`
  }

  Stg5 += `
  <div>
    <div style="width: 1em; height: 1em; display:inline-block"></div>
    <label style="display:inline-block">maximo ${w}</label>
  </div>`


  Stg5 += `
  <div>
    <div style="width: 1em; height: 1em; display:inline-block"></div>
    <label style="display:inline-block">largo compeso ${Arr8.length}</label>
  </div>`

  $('.step2').find('.info').html(Stg5)

  var Stg6 =''
  for (var i = 0; i < Arr7.length; i++) Stg6 += `<div class="x${Arr7[i]}"></div>`;
  //console.log(Stg1);
  $('.step2').find('.grid-container').html(Stg6)

  ///////////////////////////////////////////////////////////////////////////////////////////

  var Arr9 = [Arr2[Arr2.length-7],Arr2[Arr2.length-8],Arr2[Arr2.length-9]]
  var Arr10 = []
  var Arr11=[]
  var x = 0
  var y =0
  var w = 0
  for (var i = 0; i < Arr1.length; i++) {
  if (Arr3.some(e=>e[0]==Arr1[i])){

  }else if (Arr6.some(e=>e[0]==Arr1[i])){

  }else if (Arr9.some(e=>e[0]==Arr1[i])){
      Arr10.push(Arr1[i])
      if (y>0) Arr11.push(y+3)
      Arr11.push(Arr9.findIndex(e=>e[0]==Arr1[i]))

      if (y>w) w=y;
      y=0
    }else {
      Arr10.push(0)
      x++
      y++
    }
  }
  if (y>w) w=y;
  Arr9.push([0,x])

  var Stg7=''
  for (var i = 0; i < Arr9.length; i++) {
    Stg7 += `
    <div>
      <div class="x${Arr9[i][0]}" style="width: 1em; height: 1em; display:inline-block"></div>
      <label style="display:inline-block">${Arr9[i][0]} : ${Arr9[i][1]}</label>
    </div>`
  }

  Stg7 += `
  <div>
    <div style="width: 1em; height: 1em; display:inline-block"></div>
    <label style="display:inline-block">maximo ${w}</label>
  </div>`


  Stg7 += `
  <div>
    <div style="width: 1em; height: 1em; display:inline-block"></div>
    <label style="display:inline-block">largo compeso ${Arr11.length}</label>
  </div>`

  $('.step3').find('.info').html(Stg7)

  var Stg8 =''
  for (var i = 0; i < Arr10.length; i++) Stg8 += `<div class="x${Arr10[i]}"></div>`;
  //console.log(Stg1);
  $('.step3').find('.grid-container').html(Stg8)

  //////////////////////////////////////////////////////////////////////////////////

    var Arr12 = [Arr2[Arr2.length-10],Arr2[Arr2.length-11],Arr2[Arr2.length-12]]
    var Arr13 = []
    var Arr14=[]
    var x = 0
    var y =0
    var w = 0
    for (var i = 0; i < Arr1.length; i++) {
    if (Arr3.some(e=>e[0]==Arr1[i])){

    }else if (Arr6.some(e=>e[0]==Arr1[i])){

    }else if (Arr9.some(e=>e[0]==Arr1[i])){

    }else if (Arr12.some(e=>e[0]==Arr1[i])){
        Arr13.push(Arr1[i])
        if (y>0) Arr14.push(y+3)
        Arr14.push(Arr12.findIndex(e=>e[0]==Arr1[i]))

        if (y>w) w=y;
        y=0
      }else {
        Arr13.push(0)
        x++
        y++
      }
    }
    if (y>w) w=y;
    Arr12.push([0,x])

    var Stg7=''
    for (var i = 0; i < Arr12.length; i++) {
      Stg7 += `
      <div>
        <div class="x${Arr12[i][0]}" style="width: 1em; height: 1em; display:inline-block"></div>
        <label style="display:inline-block">${Arr12[i][0]} : ${Arr12[i][1]}</label>
      </div>`
    }

    Stg7 += `
    <div>
      <div style="width: 1em; height: 1em; display:inline-block"></div>
      <label style="display:inline-block">maximo ${w}</label>
    </div>`


    Stg7 += `
    <div>
      <div style="width: 1em; height: 1em; display:inline-block"></div>
      <label style="display:inline-block">largo compeso ${Arr14.length}</label>
    </div>`

    $('.step4').find('.info').html(Stg7)

    var Stg8 =''
    for (var i = 0; i < Arr13.length; i++) Stg8 += `<div class="x${Arr13[i]}"></div>`;
    //console.log(Stg1);
    $('.step4').find('.grid-container').html(Stg8)

    //////////////////////////////////////////////////////////////////////////////////
  var Arr15 = [Arr2[Arr2.length-13],Arr2[Arr2.length-14]]
  var Arr16 = []
  var Arr17=[]
  var x = 0
  var y =0
  var w = 0
  for (var i = 0; i < Arr1.length; i++) {
    if (Arr3.some(e=>e[0]==Arr1[i])){

    }else if (Arr6.some(e=>e[0]==Arr1[i])){

    }else if (Arr9.some(e=>e[0]==Arr1[i])){

    }else if (Arr12.some(e=>e[0]==Arr1[i])){

    }else if (Arr15.some(e=>e[0]==Arr1[i])){
        Arr16.push(Arr1[i])
        if (y>0) Arr17.push(y+3)
        Arr17.push(Arr15.findIndex(e=>e[0]==Arr1[i]))

        if (y>w) w=y;
        y=0
    }else {
      Arr16.push(0)
      x++
      y++
    }
  }
  if (y>w) w=y;
  Arr15.push([0,x])
  console.log(w);
  x=0;
  y=0;
  w=0;
  var Arr18=[]
  for (var i = 0; i < Arr16.length; i++) {
    if (Arr15[2][0]==Arr16[i]) x++
    else if (Arr15[1][0]==Arr16[i]) y++
    else if (Arr15[0][0]==Arr16[i]) w++

    if ((x==1 || x==2) && Arr15[2][0]!=Arr16[i]){ Arr18.push(30); x=0;  }
    else if ((y==1 || y==2) && Arr15[1][0]!=Arr16[i]){ Arr18.push(31); y=0;  }
    else if ((w==1 || w==2) && Arr15[0][0]!=Arr16[i]){ Arr18.push(32); w=0;  }


    if (x==10){ Arr18.push(8); x=0;  }
    else if (y==10){ Arr18.push(16); y=0;  }
    else if (w==9){ Arr18.push(23); w=0;  }

    if (x>2 && Arr15[2][0]!=Arr16[i]) { Arr18.push(x); x=0;  }
    else if (y>2 && Arr15[1][0]!=Arr16[i]) { Arr18.push(y+8); y=0;  }
    else if (w>2 && Arr15[0][0]!=Arr16[i]) { Arr18.push(w+16); w=0;  }
  }

  console.log(Arr18);

  var Stg9=''
  for (var i = 0; i < Arr15.length; i++) {
    Stg9 += `
    <div>
      <div class="x${Arr15[i][0]}" style="width: 1em; height: 1em; display:inline-block"></div>
      <label style="display:inline-block">${Arr15[i][0]} : ${Arr15[i][1]}</label>
    </div>`
  }

  Stg9 += `
  <div>
    <div style="width: 1em; height: 1em; display:inline-block"></div>
    <label style="display:inline-block">maximo ${w}</label>
  </div>`


  Stg9 += `
  <div>
    <div style="width: 1em; height: 1em; display:inline-block"></div>
    <label style="display:inline-block">largo compeso ${Arr18.length}</label>
  </div>`

  $('.step5').find('.info').html(Stg9)

  var Stg10 =''
  for (var i = 0; i < Arr16.length; i++) Stg10 += `<div class="x${Arr16[i]}"></div>`;
  //console.log(Stg1);
  $('.step5').find('.grid-container').html(Stg10)


})
