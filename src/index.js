const word = "VSCODE"
let wait = 0
for (let i = 0; i < word.length; i++)
{
  wait += 120;
    setTimeout(() => {
      let c = $('#timeout').html().replace('<i id="cursor" class="fa fa-i-cursor" aria-hidden="true"></i>','');
      $('#timeout').html(c + word[i] + '<i id="cursor" class="fa fa-i-cursor" aria-hidden="true"></i>');
      
    } ,wait);
    //$('#timeout').text('test');
}

setInterval(() => { $(".fa-i-cursor").toggle(); }, 800);