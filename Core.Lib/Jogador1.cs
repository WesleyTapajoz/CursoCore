using System;

namespace Core.Lib
{
     public class Jogador1 : IJogador
    {
        public string  _Nome { get; set; }        

        public Jogador1(string nome)
        {
            _Nome = nome;
        }

        public string Chuta()
        {
          return $"{_Nome} chutando \n";
        }

        public string Corre()
        {
          return $"{_Nome} correndo \n";
        }

        public string Passe()
        {
          return $"{_Nome} passando \n";
        }
    }
}