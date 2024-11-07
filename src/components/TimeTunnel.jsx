import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import "../styles/time-tunnel.css";

const TimeTunnel = ({ isEnvelopeClickable }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="container">
        <h3>Zaman Tüneline Hoş Geldiniz</h3>
        <img
          src={
            isEnvelopeClickable
              ? "public/images/timeline-data-images/envelope-red.png"
              : "public/images/timeline-data-images/envelope-gray.png"
          }
          alt="envelope"
          className={
            isEnvelopeClickable
              ? "envelope envelope-clickable"
              : "envelope envelope-unclickable"
          }
          onClick={
            isEnvelopeClickable
              ? showModal
              : alert.bind(
                  null,
                  "Zaman tünelini tamamlamadan zarfı açamazsın askim.."
                )
          }
        />
        <p>
          Bu zaman tüneli ilk yıl dönümümüzü kutlamak ve birlikte geçirdiğimiz
          bu süreci, biriktirdiğimiz güzel anılarımızı hatırlamak ve anmak için
          hazırlanmıştır.
        </p>
        <p>
          Zaman tünelinde bulunan anı kartlarına tıklayarak, o döneme ait
          biriktirdiğimiz anılar arasında gezinebilirsin.
        </p>
        <p>Mini bir love turuna çıkıyoruz.. 🚀🎉💘</p>
        <p>
          Bütün anı kartları açıldığında {width > 768 ? "sağ" : "alt"} tarafta
          bulunan gri zarf kırmızı renge dönecek ve açılabilir hale gelecektir.
          Zaman tüneli turunu tamamladıktan sonra bu zarfa tıklamayı unutma
          askim. Şimdi aşağıya kaydırarak zaman tünelinde gezinmeye
          başlayabilirsin.
        </p>
        <p>
          İyi ki varsın, iyi ki birlikteyiz. Umarım bu zaman tüneli hoşuna
          gider.
        </p>
      </div>
      <Modal
        width={720}
        centered
        footer={null}
        open={isModalOpen}
        onCancel={handleCancel}
        className="envelope-modal"
      >
        <div className="envelope-text">
          <p>Canım sevgilim,</p>
          <p>
            Birbirimizin hayatına dahil olup tanışalı tam bir yıl oldu. Hala
            şaka gibi geliyor ama kocaman bir yılı doldurduk.
          </p>
          <p>
            Bu süre zarfında birlikte geçirdiğimiz her ânı dolu dolu
            değerlendirdik ve bu anıları biriktirirken de birbirimizi daha iyi
            tanıdık, daha iyi anladık, birbirimize daha çok bağlandık, daha çok
            sevdik.
          </p>
          <p>
            Seni tanıdığım günden bu yana hayatımın en güzel ve huzurlu anlarını
            yaşadım. Hayatıma girerek bana kattığın değeri, sevgiyi ve mutluluğu
            kelimelerle tarif edebilmem mümkün değil.
          </p>
          <p>
            Yeri geldi ayrı kaldık, birbirimizden uzakta farklı hayatlar
            sürdürmeye çalıştık. Çok zorluk çektik, çok üzüldük, çok özledik.
            Ama her zorluğu, her ayrılığı, her özlemi birlikte aşmanın bir
            yolunu hep bulduk.
          </p>
          <p>
            Birbirimize bağlandıkça, hissettiğimiz duygular ve aramızdaki bağ
            güçlendikçe her şey daha da anlamlı ve değerli hale geldi. Birlikte
            olduktan sonra çözemeyeceğimiz, atlatamayacağımız hiçbir şey
            olmadığını hissetmeye başladım.
          </p>
          <p>
            Birlikte olduğumuz her anı, kısıtlı zamanlarımızı, en güzel
            hatıralarla doldurup ileride hatırlayacağımız bir sürü anımız oldu.
          </p>
          <p>
            Bu anılarımızı hatırlayıp anmak için de bu zaman tünelini
            hazırladım. Buraya koyamadığım, fotoğraf çekilmeyi unuttuğumuz daha
            biiir sürüü anımız var. Bu anılara yenilerini eklemek için
            sabırsızlanıyorum.
          </p>
          <p>
            Her koşulda birlikte olabilmeyi, sevmeyi, sevilmeyi ve sabretmeyi
            bana öğrettiğin için teşekkür ederim. Arada huysuzluğum tutsa da
            beni daha anlayışlı biri yaptığın için ayrıca teşekkür ederim
            askim..
          </p>
          <p>
            Nice birlikte yıllarımıza bitanem, iyi ki varsın, seni her şeyden
            çok seviyorum. ❤️
          </p>
        </div>
      </Modal>
    </>
  );
};

export default TimeTunnel;
