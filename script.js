let votacao = false;
let brancoS = false;
let mostrandovoto = false;
let codigo = 0;
let meuvoto = '';
let finalVotacao = false;

let nomecandidato = document.getElementById('nomecandi');
let nomecandidato2 = document.getElementById('nomecandi2');
let nomecandidato3 = document.getElementById('nomecandi');
let showConfirm = document.getElementById('showconfirm');

function corrige(){
debugger
if (finalVotacao == true){
        return
    }
    

    if (brancoS == true){
        document.getElementById('maiin').classList.remove('branco');
        if (votacao == 'presidente'){
            document.getElementById('maiin').classList.add('presidente');
        }

        if (votacao == 'deputado'){
            document.getElementById('maiin').classList.add('deputado');
        }

    }
    meuvoto = '';
    mostrandovoto = false;
    codigo = 0;
    brancoS = false;
    document.getElementById('dgt1').innerHTML = '';
    document.getElementById('dgt2').innerHTML = '';
    document.getElementById('dgt3').innerHTML = '';
    document.getElementById('dgt4').innerHTML = '';

    if (document.getElementById("ft-candidato").style.backgroundImage != ''){
        document.getElementById("ft-candidato").style.backgroundImage = '';
        document.getElementById('nomecandi').style.opacity = '0';
        document.getElementById('showconfirm').style.opacity = '0';
    }
}

function branco(){
    
    if (finalVotacao == true){
        return
    }

    if (votacao == 'deputado'){
        document.getElementById('maiin').classList.remove('inicio');
        document.getElementById('maiin').classList.add('branco');
        brancoS = true;
    }

    if (votacao == 'presidente'){
        document.getElementById('maiin').classList.remove('deputado');
        document.getElementById('maiin').classList.add('branco');
        document.getElementById('trocaNomeCargo').innerHTML = 'Presidente'
        brancoS = true;
    }
}



function confirma(){
    debugger
    if (votacao == false){
        votacao = 'deputado';
        document.getElementById('maiin').classList.remove('inicio');
        document.getElementById('maiin').classList.add('deputado');
    }

    if (votacao == 'deputado'){
        if (mostrandovoto == true || brancoS == true){
            document.getElementById('maiin').classList.remove('deputado');
            document.getElementById('maiin').classList.add('presidente');
            document.querySelector('.cargo').innerHTML = 'Presidente';
            nomecandidato3.style.opacity = '';
            showConfirm.style.opacity = '';
            document.getElementById("ft-candidato").style.backgroundImage = '';
            document.getElementById('dgt1').innerHTML = '';
            document.getElementById('dgt2').innerHTML = '';
            meuvoto = ''
            votacao = 'presidente';
            mostrandovoto = false;
            codigo = '0';
            brancoS = false;
            document.getElementById('maiin').classList.remove('branco');
        }
    }

    if (mostrandovoto == true && votacao == 'presidente'){
        document.getElementById('maiin').classList.remove('presidente');
        document.getElementById('maiin').classList.remove('branco');
        document.getElementById('maiin').classList.add('finalvotacao');
        document.getElementById('fimvo').style.display = 'flex';
        finalVotacao = true;
    }

    if (brancoS == true && votacao == 'presidente'){
        document.getElementById('maiin').classList.remove('presidente');
        document.getElementById('maiin').classList.remove('branco');
        document.getElementById('maiin').classList.add('finalvotacao');
        document.getElementById('fimvo').style.display = 'flex';
        finalVotacao = true;
    }
}

function digito(valor){
    if (votacao == false || votacao == 'branco' || mostrandovoto == true){
        return;
    }
    debugger
    if (votacao == 'deputado'){
            switch (parseInt(codigo)){

                case 0:
                    document.getElementById('dgt1').innerHTML = valor;
                    codigo++;
                    meuvoto = meuvoto + valor;
                    break;
                
                case 1:
                    document.getElementById('dgt2').innerHTML = valor;
                    codigo++;
                    meuvoto = meuvoto + valor;
                    break;

                case 2:
                    document.getElementById('dgt3').innerHTML = valor;
                    codigo++;
                    meuvoto = meuvoto + valor;
                    break;
                
                case 3:
                    document.getElementById('dgt4').innerHTML = valor;
                    codigo++;
                    meuvoto = meuvoto + valor;
                    break;
            }

            if (codigo >= 4){
                switch (meuvoto){
                    case '6578':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/6578.png)";
                        nomecandidato.innerHTML = 'Abacaxi';
                        nomecandidato2.innerHTML = 'Abacaxi';
                        break;
                    case '9887':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/9887.png)";
                        nomecandidato.innerHTML = 'Laranja';
                        nomecandidato2.innerHTML = 'Laranja';
                        break;
                    case '6133':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/6133.png)";
                        nomecandidato.innerHTML = 'Maça Verde';
                        nomecandidato2.innerHTML = 'Maça Verde';
                        break;
                    case '5574':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/5574.png)";
                        nomecandidato.innerHTML = 'Pera';
                        nomecandidato2.innerHTML = 'Pera';
                        break;
                    case '4578':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/4578.png)";
                        nomecandidato.innerHTML = 'Banana';
                        nomecandidato2.innerHTML = 'Banana';
                        break;
                    case '3752':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/3752.png)";
                        nomecandidato.innerHTML = 'Limão';
                        nomecandidato2.innerHTML = 'Limão';
                        break;
                    case '3486':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/3486.png)";
                        nomecandidato.innerHTML = 'Melancia';
                        nomecandidato2.innerHTML = 'Melancia';
                        break;
                    case '2587':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/2587.png)";
                        nomecandidato.innerHTML = 'Maça';
                        nomecandidato2.innerHTML = 'Maça';
                        break;
                    case '1274':
                        document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/deputados/1274.png)";
                        nomecandidato.innerHTML = 'Morango';
                        nomecandidato2.innerHTML = 'Morango';
                        break;
                }
        }
    }

    if (votacao == 'presidente'){
        switch (parseInt(codigo)){
            
            case 0:
                document.getElementById('dgt1').innerHTML = valor;
                codigo = codigo + 1;
                meuvoto = meuvoto + valor;
                break;
            
            case 1:
                document.getElementById('dgt2').innerHTML = valor;
                codigo = codigo + 1;
                meuvoto = meuvoto + valor;
                break;
        }

        if (codigo >= 2){
            switch (meuvoto){
                
                case '15':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/15.jpg)";
                    nomecandidato.innerHTML = 'Batman';
                    nomecandidato2.innerHTML = 'Batman';
                    break;
                case '74':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/74.jpg)";
                    nomecandidato.innerHTML = 'Fred Flinstoon';
                    nomecandidato2.innerHTML = 'Fred Flinstoon';
                    break;
                case '96':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/96.jpg)";
                    nomecandidato.innerHTML = 'Darwin Watterson';
                    nomecandidato2.innerHTML = 'Darwin Watterson';
                    break;
                case '32':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/32.jpg)";
                    nomecandidato.innerHTML = 'Shrek';
                    nomecandidato2.innerHTML = 'Shrek';
                    break;
                case '39':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/39.jpg)";
                    nomecandidato.innerHTML = 'Magie';
                    nomecandidato2.innerHTML = 'Magie';
                    break;
                case '24':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/24.jpg)";
                    nomecandidato.innerHTML = 'Tio Patinhas';
                    nomecandidato2.innerHTML = 'Tio Patinhas';
                    break;
                case '48':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/48.jpg)";
                    nomecandidato.innerHTML = 'Homem de Ferro';
                    nomecandidato2.innerHTML = 'Homem de Ferro';
                    break;
                case '57':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/57.jpg)";
                    nomecandidato.innerHTML = 'Naruto Drogado';
                    nomecandidato2.innerHTML = 'Naruto Drogado';
                    break;
                case '66':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/66.jpg)";
                    nomecandidato.innerHTML = 'Ben Tennyson';
                    nomecandidato2.innerHTML = 'Ben Tennyson';
                    break;
                case '80':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/80.jpg)";
                    nomecandidato.innerHTML = 'Vegeta';
                    nomecandidato2.innerHTML = 'Vegeta';
                    break;
                case '96':
                    document.getElementById("ft-candidato").style.backgroundImage = "url(./imagens/presidente/96.jpg)";
                    nomecandidato.innerHTML = 'Darwin Watterson';
                    nomecandidato2.innerHTML = 'Darwin Watterson';
                    break;                
            }
        }
    }
        
    if (document.getElementById("ft-candidato").style.backgroundImage != ''){
        mostrandovoto = true;
        nomecandidato3.style.opacity = '1';
        showConfirm.style.opacity = '1';
    }

    }