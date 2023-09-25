/*Ação da calculadora em javascript*/
/*Criando as variáveis globais para tratar dos dados*/
/*lendo os botões e o display da calculadora*/
const BtnNumber1 = document.getElementById('BtnNumber1');
const BtnNumber2 = document.getElementById('BtnNumber2');
const InputDisplay = document.getElementById('InputDisplay');
/*Lista de entrada de dados da calculadora*/
let InputIn = [];
/*variável criada para contar o número de clicks da calculadora*/
let ClickCount = 0;

BtnNumber1.onclick = function(){  
     /*O método push() adiciona um ou mais 
    Elementos ao final de um array e retorna o novo comprimento desse array.*/ 
    InputIn.push(1); 
    /*cada botão clicado incrementa +1*/ 
    ClickCount++;
    /*Join(junção) retirando vírgula gerado pelo array*/
    /*Obs: no método join('') se colocar algo dentro do (' ') ele exibira entre os espaços*/
    InputDisplay.value = InputIn.join('');   
    /*Se passar de 10 clicks o programa reclama com a mensagem dentro do se abaixo*/
    if(ClickCount == 11){
        InputDisplay.value = "Max N°!!";        
    }
    if(ClickCount == 12){
        /*Função que recarrega a página para voltar do zero a calculadora
        Caso o usuário insistir em clicar, ele recarrega para início zerando tudo*/
        location.reload();
    }
}

BtnNumber2.onclick = function(){  
    /*O método push() adiciona um ou mais 
    elementos ao final de um array e retorna o novo comprimento desse array.*/
    /*push(empurrar)*/
    InputIn.push(2);
    /*A função join retira a vírgula por conter aspas vazia, join(juntar)*/
    InputDisplay.value = InputIn.join('');  
    ClickCount++;
    if(ClickCount == 11){
        InputDisplay.value = 'Max N°!!';
    } 
    if(ClickCount == 12){
        /*Caso o usuário continue clicando ele recarregará a página do zero
        e assim recomeçará tudo de novo.*/
        location.reload();
    }   
}
