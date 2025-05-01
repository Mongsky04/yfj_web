package PPBO_P2;

public class konversiSuhuTest {
    public static void main(String[] args) {
        konversiSuhu konversi = new konversiSuhu();
        double celcius = 0;
        double farenheit = 32;

        double suhu1;
        double suhu2;

        suhu1 = konversi.konversiCelcius(farenheit);
        suhu2 = konversi.konversiFarenheit(celcius);

        System.out.println("Suhu " + celcius + "C ke farenheit adalah : " + suhu1 + "F");
        System.out.println("Suhu " + farenheit + "F ke celcius adalah : " + suhu2 + "C");
    }
    
}
