package PPBO_P4;
public class Laptop {
    Laptop(String nama) {
        System.out.println("laptop ini milik" + nama);
        System.out.println("Satu object Laptop sudah di buat");
    }
}

class BelajarJava {
    public static void main(String args[]) {
        Laptop laptopAnto = new Laptop("Anto");
        Laptop laptopLisa = new Laptop("Lisa");
        Laptop laptopRudi = new Laptop("Rudi");
    }
}
am
