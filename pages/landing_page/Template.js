import Link from 'next/link';
import Card from '../components/Card';
import Container from '../components/Container';
import H1 from '../components/H1';

const Template = () => {
  const noHp = '6282286062083';
  const templates = [
    {
      img: '/images/templates/1.png',
      smallImg: '/images/templates/mini/1.png',
      title: 'Rose',
      desc: 'Template dengan nuansa penuh cinta berwarna pink.',
      btnColor: 'bg-pink-500',
      links: [
        {
          text: 'Buka Template',
          link: '/templates/1',
        },
      ],
    },
    {
      img: '/images/templates/2.png',
      smallImg: '/images/templates/mini/2.png',
      title: 'Green',
      desc: 'Template dengan nuansa kehijauan siap memanjakan tamu undangan Anda dengan tampilan yang enak dipandang.',
      btnColor: 'bg-green300',
      links: [
        {
          text: 'Biasa',
          link: '/templates/2',
        },
        {
          text: 'Scroll Kesamping',
          link: '/templates/4',
          new: true,
        },
      ],
    },
    {
      img: '/images/templates/3.png',
      smallImg: '/images/templates/mini/3.png',
      title: 'Purple',
      desc: 'Template dengan nuansa kehijauan siap memanjakan tamu undangan Anda dengan tampilan yang enak dipandang.',
      btnColor: 'bg-indigo500',
      links: [
        {
          text: 'Buka Template',
          link: '/templates/2',
        },
      ],
      new: true,
    },
  ];

  const openImage = (img) => {
    window.open(img, '_blank');
  };
  return (
    <section className="template relative" id="template">
      <img
        src="/images/flower.png"
        alt="Flower"
        className="background absolute left-0 top-0 w-full h-full object-contain -z-1 lg:object-cover"
      />
      <Container className="space-y-12">
        <H1>Template</H1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((item, index) => (
            <Card className="shadow p-0 space-y-3 text-center" key={index}>
              <div className="relative">
                <img
                  src={item.img}
                  alt="Template"
                  className="w-full max-h-80 object-contain"
                  onClick={() => openImage(item.img)}
                />
                <img
                  src={item.img}
                  alt="Template"
                  className="w-full h-full object-cover absolute left-0 top-0 -z-1 filter blur-sm"
                />
              </div>
              <div className="p-3 space-y-3">
                <h4 className="text-lg font-quicksand font-bold capitalize text-center relative inline-block">
                  {item.title}
                  {item.new && (
                    <span class="absolute -right-2 -top-1 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      Baru
                    </span>
                  )}
                </h4>
                <p className="font-roboto leading-8">{item.desc}</p>

                <div className="flex space-x-3 items-center justify-center">
                  {item.links.map((link) => (
                    <Link href={link.link}>
                      <button
                        className={`${item.btnColor} py-2 px-6 rounded text-white font-poppins relative`}
                      >
                        {link.text}

                        {link.new && (
                          <span class="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                            Baru
                          </span>
                        )}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Template;
