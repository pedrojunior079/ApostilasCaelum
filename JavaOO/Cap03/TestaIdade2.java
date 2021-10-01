package JavaOO.Cap03;

public class TestaIdade2 
{
   public static void main(String[] args)
   {
       //imprime a idade
       int idade = 15;
       boolean amigoDoDono = true;
       if(idade < 18 && !amigoDoDono)
       {
         System.out.println("Não pode entrar");
       }
       else
       {
           System.out.println("pode entrar");
       }       
   }    
}
