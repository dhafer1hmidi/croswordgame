function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  var images = new Array ();
  images[0] = "asset/img01.jpg";
  images[1] = "asset/img02.jpg";
  images[2] = "asset/img03.jpg";
  images[3] = "asset/img03.jpg";
  var size = images.length
  var x = Math.floor(size*Math.random())

$('.all').css('background-image', 'url('+ images[x] +')');

//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}

var allTheNeds = {
    w1: { word:'Acumen' , synonym:'Awareness' , antonym:'Ignorance',Image:'./images:'},
w2 :{ word:'Abate' , synonym:'Moderate' , antonym:'Aggravate'},
w3: {word:'Absolve' , synonym:'forgive' , antonym:'Accuse'},
w4: { word:'Brittle' , synonym:'Breakable' , antonym:'Tough' },
w5: { word:'Bold' , synonym:'Adventurous' ,antonym: 'Timid' },
w6 : { word:'Busy' , synonym:'Active' , antonym:'Lazy'},
w6 : { word:'Capable' , synonym:'able' , antonym:'Inept' },
w7 : { word:'Captivity' , synonym:'imprisonment' , antonym:'Freedom'},
w8 : { word : 'Cease', synonym:'terminate' , antonym:'Originate'},
w9: { word : 'Deliberate', synonym:'cautious' , antonym:'Rash'},
w10: { word : 'Dwarf', synonym:'Petite' , antonym:'Giant'},
w11: { word : 'Despair', synonym:'misery' , antonym:'Hope'},
w12: { word : 'Efface', synonym:'destroy' , antonym:'Maintain'},
w13: { word : 'Enormous', synonym:'colossal' , antonym:'negligible'},
w14: { word : 'Eradicate', synonym:'exterminate' , antonym:'plant'},
w15: { word : 'Fabricate', synonym:'produce' , antonym:'Destroy'},
w16: { word : 'Fanatical', synonym:'biased' , antonym:'Liberal'},
w17: { word : 'Feud', synonym:'strife' , antonym:'Harmony'},
w18: { word : 'Gather', synonym:'huddle' , antonym:'Disperse'},
w19: { word : 'Gorgeous', synonym:'magnificent' , antonym:'Dull'},
w20: { word : 'Glory', synonym:'renown' , antonym:'Shame'},
w21: { word : 'Hapless', synonym:'fated' , antonym:'Lucky'},
w22: { word : 'Hideous', synonym:'shocking' , antonym:'Attractive'},
w23: { word : 'Humble', synonym:'Meek' , antonym:'Proud'},
w24: { word : 'Insipid', synonym:'Tedious' , antonym:'Pleasing'},
w25: { word : 'Immerse', synonym:'involve' , antonym:'Emerge'},
w26: { word : 'Impair', synonym:'diminish' , antonym:'Restore'},
w27 : { word:'Just' , synonym:'honest' , antonym:'Unequal'},
w28 : { word:'Justify' , synonym:'defend' , antonym:'Impute'},
w29 : { word:'Jubilant' , synonym:'rejoicing' , antonym:'Melancholy'},
w30 : { word:'Keen' , synonym:'sharp' , antonym:'insipid'},
w31 : { word:'Knotty' , synonym:'complicated ' , antonym:'manageable'},
w32 : { word:'Knave' , synonym:'scoundrel' , antonym:'Paragon'},
w33 : { word:'Lax' , synonym:'careless' , antonym:'Firm'},
w34 : { word:'Liable' , synonym:'bound' , antonym:'Unaccountable'},
w35 : { word:'Luxuriant' , synonym:'abundant' , antonym:'Scanty'},
w36 : { word:'Masculine' , synonym:'strapping' , antonym:'Feminine'},
w37 : { word:'Modest' , synonym:'courteous' , antonym:'Arrogant'},
w38 : { word:'Mollify' , synonym:'assuage' , antonym:'infuriate'},
w39 : { word:'Niggardly' , synonym:'covetous' , antonym:'Generous'},
w40 : { word:'Nimble' , synonym:'prompt' , antonym:'Sluggish'},
w41 : { word:'Numerous' , synonym:'various' , antonym:'Scarce'},
w42 : { word:'Obliging' , synonym:'Complaisant' , antonym:'Mulish'},
w43 : { word:'Obscure' , synonym:'Vague' , antonym:'Prominent'},
w44 : { word:'Offensive' , synonym:'obnoxious' , antonym:'fascinating'},
w45 : { word:'Pacify' , synonym:'Chasten' , antonym:'Irritate'},
w46 : { word:'Persuade' , synonym:'Impress' , antonym:'halt'},
w47 : { word:'Progress' , synonym:'Betterment' , antonym:'Retrogress'},
w48 : { word:'Quack' , synonym:'deceiver' , antonym:'unfeigned'},
w49 : { word:'Quarantine' , synonym:'seclude' , antonym:'socialize'},
w50 : { word:'Quell' , synonym:'reduce' , antonym:'agitate'},
w51 : { word:'Raid' , synonym:'Incursion' , antonym:'release'},
w52 : { word:'Reason' , synonym:'Acumen' , antonym:'Speculation'},
w53 : { word:'Ruthless' , synonym:'Remorseless' , antonym:'Compassionate'},
w54 : { word:'Savage' , synonym:'Wild' , antonym:'Polished'},
w55 : { word:'Stranger' , synonym:'guest' , antonym:'Acquaintance'},
w56 : { word:'Sublime' , synonym:'Magnificent' , antonym:'Ridiculous'},
w57 : { word:'Taboo' , synonym:'ban' , antonym:'consent'},
w58 : { word:'Tranquil' , synonym:'Calm' , antonym:'Agitated'},
w59 : { word:'Tremble' , synonym:'Vibrate' , antonym:'Steady'},
w60 : { word:'Umbrage' , synonym:'offense' , antonym:'goodwill'},
w61 : { word:'Uncouth' , synonym:'Boorish' , antonym:'Compensate'},
w62 : { word:'Urge' , synonym:'Incite' , antonym:'Abomination'},
w63 : { word:'Vagrant' , synonym:'roaming' , antonym:'settled'},
w64 : { word:'Venerable' , synonym:'honored' , antonym:'Unworthy'},
w65 : { word:'Venom' , synonym:'Poison' , antonym:'Antidote'},
w66 : { word:'Wed' , synonym:'marry' , antonym:'Separate'},
w67 : { word:'Wile' , synonym:'Artifice' , antonym:'honor'},
w68 : { word:'Wilt' , synonym:'wither' , antonym:'bloom'},
w69: { word:'Yell' , synonym:'shout' , antonym:'muted'},
w70: { word:'Yearn' , synonym:'languish' , antonym:'satisfy'},
w71: { word:'Yoke' , synonym:'connect' , antonym:'Liberate'},
w72: { word:'Zeal' , synonym:'fervor' , antonym:'Apathy'},
w73: { word:'Zenith' , synonym:'summit' , antonym:'base'},
w74: { word:'Zest' , synonym:'delight' , antonym:'Disgust'}
}
//this is the way to get the word to preaper each level
function word1(allTheNeds){
  return filter(allTheNeds,function(element){
  if(element.synonym.length===4 || element.antonym.length===4){
  return element.synonym + element.antonym 
  }
  })
  }
  function word2(allTheNeds){
    return filter(allTheNeds,function(element){
    if((element.synonym.length===8 || element.antonym.length===8)&&((element.synonym.indexOf('e')===4)||(element.antonym.indexOf('e')===4))){
    return element.synonym + element.antonym 
    }
    })
    }
    function word3(allTheNeds){
      return filter(allTheNeds,function(element){
      if((element.synonym.length===10 || element.antonym.length===10)&&((element.synonym.indexOf('r')===5)||(element.antonym.indexOf('r')===5))){
      return element.synonym + element.antonym 
      }
      })
      }
      function word4(allTheNeds){
        return filter(allTheNeds,function(element){
        if((element.synonym.length===5 || element.antonym.length===5)&&((element.synonym.indexOf('r')===3)||(element.antonym.indexOf('r')===3))){
        return element.synonym + element.antonym 
        }
        })
        }
        function word5(allTheNeds){
          return filter(allTheNeds,function(element){
          if((element.synonym.length===4 || element.antonym.length===4)&&((element.synonym.indexOf('r')===4)||(element.antonym.indexOf('r')===4))){
          return element.synonym + element.antonym 
          }
          })
          }
          //making the answers to as varuabul so the conparisation would be easyer   
  var answer1=allTheNeds.w6.synonym;
  var answer2=allTheNeds.w71.antonym;
  var answer3=allTheNeds.w47.antonym;
  var answer4=allTheNeds.w65.synonym;
  var answer5=allTheNeds.w11.synonym;
  function checkAnswer1(){
   if(document.getElementById("FirstA").value!==answer1){
     return false;
   }
   return true;
  }
  function checkAnswer2(){
    if(document.getElementById("secondA").value!==answer2){
      return false;
    }
    return true;
   }
   function checkAnswer3(){
    if(document.getElementById("thirdA").value!==answer3){
      return false;
    }
    return true;
   }
   function checkAnswer4(){
    if(document.getElementById("forthA").value!==answer4){
      return false;
    }
    return true;
   }
   function checkAnswer5(){
    if(document.getElementById("fifthA").value!==answer5){
      return false;
    }
    return true;
   }
 

function clearAll(){
  return(document.getElementById("FirstA").value = '',
 document.getElementById('secondA').value='',
 document.getElementById('thirdA').value='',
 document.getElementById('forthA').value='',
 document.getElementById('fifthA').value='' )
}
function checkAll(){
  var newArr=[]
  if(checkAnswer1()){
    newArr.push(document.getElementById("FirstA").value = answer1)
  }
   if(checkAnswer2()){
    newArr.push(document.getElementById('secondA').value=answer2)
  }
  if(checkAnswer3()){
    newArr.push(document.getElementById('thirdA').value=answer3)
  }
  if(checkAnswer4()){
   newArr.push(document.getElementById('forthA').value=answer4)
  }
  if(checkAnswer5()){
   newArr.push(document.getElementById('fifthA').value=answer5)
  }
  return newArr 
  }
function word6(allTheNeds){
    return filter(allTheNeds,function(element){
    if((element.synonym.length===6 || element.antonym.length===6)&&((element.synonym.indexOf('r')===3)||(element.antonym.indexOf('r')===3))){
    return element.synonym + element.antonym 
    }
    })
    }
function word7(allTheNeds){
      return filter(allTheNeds,function(element){
      if((element.synonym.length===7 || element.antonym.length===7)&&((element.synonym.indexOf('m')===3)||(element.antonym.indexOf('m')===3))){
      return element.synonym + element.antonym 
      }
      })
      }
function word8(allTheNeds){
        return filter(allTheNeds,function(element){
        if((element.synonym.length===10 || element.antonym.length===10)&&((element.synonym.indexOf('g')===4)||(element.antonym.indexOf('g')===4))){
        return element.synonym + element.antonym 
        }
        })
        }
function word9(allTheNeds){
          return filter(allTheNeds,function(element){
          if((element.synonym.length===4 || element.antonym.length===4)&&((element.synonym.indexOf('e')===4)||(element.antonym.indexOf('e')===4))){
          return element.synonym + element.antonym 
          }
          })
          }
function word10(allTheNeds){
            return filter(allTheNeds,function(element){
            if((element.synonym.length===5 || element.antonym.length===5)&&((element.synonym.indexOf('r')===0)||(element.antonym.indexOf('r')===0))){
            return element.synonym + element.antonym 
            }
            })
            } 

  var question6="First Question : What is the antonym of 'Immerse' ?";
  var question7="Second Question : What is the antonym of 'Vagrant' ?";
  var question8="Third Question : What is the antonym of 'Knotty' ?" ;
  var question9="forth Question : What is the antonym of 'Presuade' ?";
  var question10="Fifth Question : What is the synonym of 'Glory' ?"; 
  var answer6=allTheNeds.w25.antonym;
  var answer7=allTheNeds.w63.antonym;
  var answer8=allTheNeds.w31.antonym;
  var answer9=allTheNeds.w46.antonym;
  var answer10=allTheNeds.w20.synonym;
  var counter=0
  function solve(){
  counter++
    if(counter===1){
   return(document.getElementById("FirstA").value = answer1,
   document.getElementById('secondA').value=answer2,
   document.getElementById('thirdA').value=answer3,
   document.getElementById('forthA').value=answer4,
   document.getElementById('fifthA').value=answer5)
    }
    else if(counter===2){
      return(document.getElementById("FirstA").value = answer6,
   document.getElementById('secondA').value=answer7,
   document.getElementById('thirdA').value=answer8,
   document.getElementById('forthA').value=answer9,
   document.getElementById('fifthA').value=answer10)
    }
  }
  
function displayLevel2(){
  $("#FirstQ").text(question6)+$("#secondQ").text(question7)+$("#thirdQ").text(question8)+$("#forthQ").text(question9)+$("#fifthQ").text(question10);
}

$("#next").click(displayLevel2)