// -------------------------------------------------------------------------
/*
    Quando clicar no pokémon do menu, é necessário
    esconder o card do pokémon aberto (class 'open') e mostrar
    o card correspondente ao que foi selecionado no menu.
*/

/*
    Para isso precisei trabalhar com dois elementos.
    1 - Menu or list; > selectPokemonList
    2 - Pokémon cards; > pokemonsCards

    Criar duas variáveis JS para trabalhar com os elementoss
    da tela.
    selectPokemonList and pokemonsCards
    
    Precisei trabalhar com um evento de clique feito pelo
    usuário no menu de pokémons.
    3 - Remover a classe "open" no JS apenas do card que
    estiver aberto;
    4 - Ao clicar no pokémon do menu, precisei pegar oo ID
    do pokémon para saber qual card mostrar na tela;
    5 - Removi a classe 'active-pokemon' que marca o pokémon 
    selecionado;
    6 - Necessário adicionar a classe 'active-pokemon' no item do menu selecionado;
*/
// -------------------------------------------------------------------------

// Início do código;

// Criar duas variáveis JS para trabalhar com os elementos da tela.
const selectPokemonList = document.querySelectorAll('.pokemon')
const pokemonsCards = document.querySelectorAll('.pokemon-card')

selectPokemonList.forEach(pokemon => {
    // Precisei trabalhar com um evento de clique feito pelo usuário no menu de pokémons.
    
    pokemon.addEventListener('click', () => {
        // 3 - Remover a classe "open" no JS apenas do card que estiver aberto;
        const cardPokemonOpen = document.querySelector('.open')
        cardPokemonOpen.classList.remove('open')
        
        // 4 - Ao clicar no pokémon do menu, precisei pegar oo ID do pokémon para saber qual card mostrar na tela;
        const idPokemonSelect = pokemon.attributes.id.value

        const idCardPokemonForOpen = 'card-' + idPokemonSelect
        const cardPokemonForOpen = document.getElementById(idCardPokemonForOpen)
        cardPokemonForOpen.classList.add('open')

        // 5 - Removi a classe 'active-pokemon' que marca o pokémon selecionado;
        const pokemonActiveInMenu = document.querySelector('.active-pokemon')
        pokemonActiveInMenu.classList.remove('active-pokemon')

        // 6 - Necessário adicionar a classe 'active-pokemon' no item do menu selecionado;
        const pokemonSelectedInMenu = document.getElementById(idPokemonSelect)
        pokemonSelectedInMenu.classList.add('active-pokemon')
    })
})