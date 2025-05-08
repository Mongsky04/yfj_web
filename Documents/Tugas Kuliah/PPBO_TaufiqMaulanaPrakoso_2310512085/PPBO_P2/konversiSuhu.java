package PPBO_P2;

public class konversiSuhu {
    public double suhu;

    public double konversiFarenheit(double celcius) {
        suhu = (celcius * 9/5) + 32; 
        return celcius;
    }

    public double konversiCelcius(double farenheit) {
        suhu = (farenheit - 32) * 5/9;
        return farenheit;
    }
    
}
