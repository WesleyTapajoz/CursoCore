namespace Core.Lib
{
    public class Jogador2 : IJogador
    {
       public string  _Nome { get; set; }        

        public Jogador2(string nome)
        {
            _Nome = nome;
        }

        public string Chuta()
        {
          return $"{_Nome} chutando \n";
        }

        public string Corre()
        {
          return $"{_Nome} Correndo \n";
        }

        public string Passe()
        {
          return $"{_Nome} Passeando";
        }  
        
    }
}