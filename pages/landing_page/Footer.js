import Container from '../components/Container';

const Footer = () => {
  return (
    <footer className="w-full">
      <Container className="space-y-6">
        <div className="space-y-3 text-center">
          <i className="fa fa-instagram block text-3xl" aria-hidden="true"></i>
          <h5 className="font-poppins text-gray-700">@undig.official</h5>
        </div>
      </Container>
      <h5 className="text-center text-xl font-roboto border-t p-6 bg-white">
        Copyright &copy; 2021. Undig.id
      </h5>
    </footer>
  );
};

export default Footer;
