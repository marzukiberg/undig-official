import Link from 'next/link';
import Card from '../components/Card';
import Container from '../components/Container';
import H1 from '../components/H1';

const Template = () => {
  const noHp = '6282286062083';
  const templates = [
    {
      img: 'template_one.png',
      smallImg: 'template_one-small.png',
      title: 'Template Satu',
      desc: 'Template dengan nuansa penuh cinta berwarna pink.',
      link: '1',
    },
    {
      img: 'template_two.png',
      smallImg: 'template_two-small.png',
      title: 'Template Dua',
      desc: 'Template dengan nuansa kehijauan siap memanjakan tamu undangan Anda dengan tampilan yang enak dipandang.',
      link: '2',
    },
  ];

  const openImage = (img) => {
    window.open('images/' + img, '_blank');
  };
  return (
    <section className="template relative" id="template">
      <img
        src="images/flower.png"
        alt="Flower"
        className="background absolute left-0 top-0 w-full h-full object-contain -z-1 lg:object-cover"
      />
      <Container className="space-y-6">
        <H1>Template</H1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((item, index) => (
            <Card className="shadow p-0 space-y-3 text-center" key={index}>
              <div className="relative">
                <img
                  src={'/images/' + item.img}
                  alt="Template"
                  className="w-full max-h-80 object-contain"
                  onClick={() => openImage(item.img)}
                />
                <img
                  src={'/images/' + item.img}
                  alt="Template"
                  className="w-full h-full object-cover absolute left-0 top-0 -z-1 filter blur-sm"
                  onClick={() => openImage(item.img)}
                />
              </div>
              <div className="p-3 space-y-3 ">
                <h4 className="text-lg font-quicksand font-bold capitalize text-center">
                  {item.title}
                </h4>
                <p className="font-roboto leading-8">{item.desc}</p>

                <Link href={`templates/${item.link}`}>
                  <button className="bg-pink-500 py-2 px-6 rounded text-white font-poppins">
                    Buka Template
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Template;
