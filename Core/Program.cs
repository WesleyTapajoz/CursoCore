using System;

namespace Core
{
    class Program
    {
        static void Main(string[] args)
        {
            var jogo = new JogoFoda(new Jogador1("Fulano "), new Jogador2("Ronaldo"));
            jogo.IniciarJogo();
        }
    } 
}