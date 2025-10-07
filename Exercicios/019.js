let serie = {
    titulo: "The Rookie",
    diretor: "Liz Friedlander",
    genero: "Policial",
    ano_lancamento: 2018,
    nr_temporadas: 7,
    episodios: [
        {temporada: 1, nrEpisodio: 1, tituloEp: "Piloto", duracao: '43 min' },
        {temporada: 1, nrEpisodio: 2, tituloEp: "Curso Intensivo", duracao: '43 min'},
        {temporada: 1, nrEpisodio: 16, tituloEp: "GreenLight", duracao: '43 min'},
    ]
}

console.log(serie.episodios[2].tituloEp);
console.log(serie.episodios[2].temporada);
console.log(serie.episodios[2].duracao);

console.log(`Episódio: ${serie.episodios[2].tituloEp} - Temporada: ${serie.episodios[2].temporada}ª - Duração: ${serie.episodios[2].duracao}`);

