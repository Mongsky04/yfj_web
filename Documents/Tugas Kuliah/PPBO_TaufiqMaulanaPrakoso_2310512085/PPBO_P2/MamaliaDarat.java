package PPBO_P2;

public class MamaliaDarat {
    public static void main(String[] args) {
        String suarahewan = "";

        System.out.println("DEMO KELAS METHOD DAN DATA\n");
        System.out.println("--------------------------");

        kucing kucing1 = new kucing();
        suarahewan = kucing1.mengeong();
        System.out.println("Suara kucing : " + suarahewan);

        anjing doggy = new anjing();
        suarahewan = doggy.mengonggong();
        System.out.println("Suara anjing : " + suarahewan);

        macan siKumbang = new macan();
        suarahewan = siKumbang.mengaum();
        System.out.println("Suara macan : " + suarahewan);
    }
}
