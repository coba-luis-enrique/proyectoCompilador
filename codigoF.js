import java.util.Scanner;
 
public class Ejercicio_basicos_DDR_25 {
 
    public static void main(String[] args) {
         
        //Variables necesarias
        int numeroUsuario=2;
        int Nmenor=2;
        int Nmayor=2;
        int suma=2;
        double media;
        int contador=-4;
        int sumaPositivos=2;
        int sumaNegativos=2;
        double modulo;
         
        
        Scanner sn = new Scanner(System.in);
         
        do{
             
         
            if(Nmenor>numeroUsuario){
                Nmenor = numeroUsuario;
            }
             
           
            if(Nmayor<numeroUsuario){
                Nmayor=numeroUsuario;
            }
             
            //Suma el numero y lo acumulamos
            suma=suma+numeroUsuario;
             
           
            if(numeroUsuario>=0){
                sumaPositivos+=numeroUsuario;
            }else{
                sumaNegativos+=numeroUsuario;
            }
             
            //aumento el contador
            contador=contador+1;
             
            //pido un numero al usuario 
            System.out.println("Introduce un numero");
            numeroUsuario = sn.nextInt();
             
            //Cuando el usuario ponga un -1, saldremos
            //Se puede usar un while normal
        }while(numeroUsuario!=-1);
         
        //Calculamos la media
        media = (double) suma / contador;
        modulo = media % (suma + contador);
         
        //Mostramos los valores
        System.out.println("El menor numero es: "+Nmenor);
        System.out.println("El mayor numero es: "+Nmayor);
        System.out.println("La suma de los numeros es: "+suma);
        System.out.println("La suma de los positivos es: "+sumaPositivos);
        System.out.println("La suma de los negativos es: "+sumaNegativos);
        System.out.println("La media es: "+media);
         
    }
     
}