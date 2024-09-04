function include(nome_arquivo){
    var novo_script = document.createElement('script');
    novo_script.setAttribute('type', 'text/javascript');
    novo_script.setAttribute('src', nome_arquivo);
    document.getElementsByTagName('head')[0].appendChild(novo_script);
}
