import axios from "axios";

async function autoSpam() {
  try {
    setInterval(
      () =>
        axios
          .get(
            "https://api.telegram.org/7389558566:AAF8hLasottYsDY3PIzvVU_8PZryZsQpJZk/sendMessage?parse_mode=markdown&chat_id=5267098233&text=Berhasil Kirim SMS dari Jauh  %0AKepada  : _KadalMerkurius_,%0A𝐦𝐞𝐬𝐬𝐚𝐠𝐞 : _Ciyeeeeeee yang mau phising_"
          )
          .then(() => console.log("Sukses spam hacker")),
      100
    );
  } catch (error) {
    autoSpam();
  }
}

autoSpam();
