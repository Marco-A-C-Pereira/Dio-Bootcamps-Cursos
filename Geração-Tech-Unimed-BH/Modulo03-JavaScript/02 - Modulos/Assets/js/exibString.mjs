function textoP (tipoBTN, obj) {
    switch (tipoBTN)
    {
        case "botaoAll":
            return exibeTudo(obj);
        case "botaoI":
            return exibeIdade(obj);
        case "botaoC":
            return exibeCidade(obj);
        case "botaoH":
            return exibeHobby(obj);
    }
}

function exibeTudo(obj) {
    return `${obj.nome} tem ${obj.idade}anos, vive em ${obj.cidade} e gosta de ${obj.hobby}`;
}

function exibeIdade(obj){
    return `${obj.nome} tem ${obj.idade}anos`
}

function exibeCidade(obj){
    return `${obj.nome} vive em ${obj.cidade}`
}

function exibeHobby(obj){
    return `${obj.nome} gosta de ${obj.hobby}`
}

export {
    textoP
}