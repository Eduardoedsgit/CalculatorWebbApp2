/*Ação da calculadora em javascript*/
/*Criando as variáveis globais para tratar dos dados*/
/*lendo os botões e o display da calculadora*/
const BtnC = document.getElementById('BtnC');
const BtnCE = document.getElementById('BtnCE');
const PercentBtn = document.getElementById('PercentBtn');
const BtnDiv = document.getElementById('BtnDiv');
const Btn7 = document.getElementById('Btn7');
const Btn8 = document.getElementById('Btn8');
const Btn9 = document.getElementById('Btn9');
const BtnNumber1 = document.getElementById('BtnNumber1');
const BtnNumber2 = document.getElementById('BtnNumber2');
const InputDisplay = document.getElementById('InputDisplay');

/*Lista de entrada de dados da calculadora*/
/*Obs: a variável do tipo let, é uma inovação para não escapar de laços e funções do js*/
let InputList = [];

/*Chamando as funções dos botões quando clicado.*/
/*Botão C apaga carcteres*/
BtnC.onclick = function(){
    /*método pop: remove elemento do fim de uma lista(Array)*/
    InputList.pop();
    /*Mostra na tela o resultado removido*/
    /*Método join('') usado para retirar as vírgulas*/
    InputDisplay.value = InputList.join('');
}
/*Funçao do botão CE que paga tudo a tela do app*/
BtnCE.onclick = function(){
    /*O splice()método de Arrayinstâncias altera o conteúdo de um array
     removendo ou substituindo elementos existentes*/
     /*remove tudo da lista do índice 0 ao 10, se tiver 10 dígitos no array
     ira remover todos os 10*/
    InputList.splice(0, 10);
    /*Usado o join('') para retirar espaços*/
    InputDisplay.value = InputList.join('');
    /*função que recarrega a página do zero*/
    location.reload();
}

PercentBtn.onclick = function(){
    alert('%');
}

BtnDiv.onclick = function(){
    InputList.push('÷');
    InputDisplay.value = InputList.join('');
}

Btn7.onclick = function(){
    /*Adc o N° 7 no final da lista*/
    InputList.push(7);
    InputDisplay.value = InputList.join('');
    /*Criando o limite de carcteres digitados*/
    if(InputList.length == 11){
        InputDisplay.value = 'Max N°!!';
    }
    if(InputList.length == 12){
        /*Recarrega a página resetando tudo do zero*/
        location.reload();
    }
}

Btn8.onclick = function(){
    InputList.push(8);
    InputDisplay.value = InputList.join('');
    if(InputList.length == 11){
        InputDisplay.value = 'Max N°!!';
    }
    if(InputList.length == 12){
        location.reload();
    }
}

Btn9.onclick = function(){
    InputList.push(9);
    InputDisplay.value = InputList.join('');
    if(InputList.length == 11){
        InputDisplay.value = 'Max N°!!';
    }
    if(InputList.length == 12){
        location.reload();
    }
}

BtnNumber1.onclick = function(){  
     /*O método push() adiciona um ou mais 
    Elementos ao final de um array e retorna o novo comprimento desse array.*/ 
    InputList.push(1); 
    /*Join(junção) retirando vírgula gerado pelo array*/
    /*Obs: no método join('') se colocar algo dentro do (' ') ele exibira entre os espaços*/
    InputDisplay.value = InputList.join('');   
    /*Se passar de 10 clicks o programa reclama com a mensagem dentro do se abaixo*/
    if(InputList.length == 11){
        InputDisplay.value = "Max N°!!";        
    }
    if(InputList.length == 12){
        /*Função que recarrega a página para voltar do zero a calculadora
        Caso o usuário insistir em clicar, ele recarrega para início zerando tudo*/
        location.reload();
    }
}

BtnNumber2.onclick = function(){  
    /*O método push() adiciona um ou mais 
    elementos ao final de um array e retorna o novo comprimento desse array.*/
    /*push(empurrar)*/
    InputList.push(2);
    /*A função join retira a vírgula por conter aspas vazia, join(juntar)*/
    /*length(comprimento)*/
    InputDisplay.value = InputList.join(''); 
    /*Se a tela ocupar um epaço de 11 caracteres o app reclama!*/ 
    if(InputList.length == 11){
        InputDisplay.value = 'Max N°!!';
    } 
    if(InputList.length == 12){
        /*Caso o usuário continue clicando ele recarregará a página do zero
        e assim recomeçará tudo de novo.*/
        location.reload();
    }   
}


