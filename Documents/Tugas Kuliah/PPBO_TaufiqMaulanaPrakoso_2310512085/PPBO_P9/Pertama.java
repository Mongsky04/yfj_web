package PPBO_P9;

public class Pertama {
    private int a = 10;
    protected void terproteksi() {
        System.out.println("Method ini hanya untuk anaknya");
    }
    
    public void info() {
        System.out.println("a = " + a);
        System.out.println("Dipanggil pada = " + this.getClass());
    }
}