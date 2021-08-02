import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { H1 } from '../components/H1';

const MengapaKami = () => {
  return (
    <section className="mengapa_kami" id="mengapa_kami">
      <Container>
        <div className="space-y-6">
          <H1>Kenapa harus Undig?</H1>

          <img
            src="images/whyus.png"
            alt="Mengapa Kami"
            className="block mx-auto md:w-1/2 lg:w-96 lg:float-left lg:mr-3"
          />

          <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-3">
            <Card className="text-center">
              <div className="text-center text-4xl text-gray-700">
                <i className="fa fa-magic" aria-hidden="true"></i>
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Penuh Animasi
              </h4>
              <p className="font-roboto leading-8">
                Undangan Anda akan terlihat bergaya, kami menyajikan template
                undangan yang animatif sehingga akan terlihat lebih menarik.
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-center text-4xl text-gray-700">
                <i className="fa fa-music" aria-hidden="true"></i>
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Bermusik
              </h4>
              <p className="font-roboto leading-8">
                Undangan Anda akan diiringi musik, alunan musik indah siap
                mengiringi undangan Anda.
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-center text-4xl text-gray-700">
                <i className="fa fa-music" aria-hidden="true"></i>
              </div>
              <h4 className="text-xl font-quicksand font-bold capitalize">
                Tampilan Cantik
              </h4>
              <p className="font-roboto leading-8">
                Jelajahi berbagai template yang cantik dari kami, pilih template
                Anda dan lakukan pemesanan.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MengapaKami;
