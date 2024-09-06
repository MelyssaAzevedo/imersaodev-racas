function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa") 

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (!campoPesquisa) {
      section.innerHTML = "<p>Não buscado.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado (objeto) no array de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_black">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais</a>
        </div>
      `
      }
      
    }

    if (!resultados) {
       resultados = "<p>Não encontrado</p>"
    }
  
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados
  }

  const inputPesquisa = document.getElementById("campo-pesquisa");

inputPesquisa.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    pesquisar();
  }
});