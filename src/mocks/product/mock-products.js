const mockSales = [
  {
    id: 1,
    smcs: 950,
    product: {
      name: 'Milho Orgânico',
      weight: '1kg',
      description:
        'Milho cultivado sem o uso de agrotóxicos, seguindo práticas agrícolas sustentáveis. Rico em nutrientes e sabor, ideal para quem busca uma alimentação saudável e responsável, contribuindo para o cuidado com o meio ambiente.',
    },
    location: {
      city: 'Cascavel',
      state: 'PR',
      country: 'BR',
    },
    profile: {
      name: 'José',
      profilePicture:
        'https://previews.123rf.com/images/zaikavirus/zaikavirus2309/zaikavirus230900021/212476049-orgulhoso-agricultor-caucasiano-de-50-anos-cuidando-de-uma-colheita-de-cevada-no-campo-agr%C3%ADcola.jpg',
    },
  },
  {
    id: 2,
    smcs: 1220,
    product: {
      name: 'Batata-Doce Orgânica',
      weight: '1kg',
      description:
        'Batata-doce cultivada com respeito ao meio ambiente, sem pesticidas, garantindo sabor autêntico e alto valor nutricional. Ideal para quem valoriza práticas agrícolas sustentáveis e saudáveis.',
    },
    location: {
      city: 'São José dos Campos',
      state: 'SP',
      country: 'BR',
    },
    profile: {
      name: 'Maria',
      profilePicture:
        'https://img.freepik.com/fotos-gratis/retrato-de-pessoa-excitada-em-close-up_23-2151186710.jpg?semt=ais_hybrid',
    },
  },
  {
    id: 3,
    smcs: 750,
    product: {
      name: 'Café Orgânico',
      weight: '500g',
      description:
        'Café cultivado em altitudes elevadas e sem uso de agrotóxicos, oferecendo um sabor puro e aroma intenso. Produzido de maneira sustentável, respeitando o ciclo natural das plantas e a biodiversidade local.',
    },
    location: {
      city: 'Poços de Caldas',
      state: 'MG',
      country: 'BR',
    },
    profile: {
      name: 'Carlos',
      profilePicture:
        'https://st.depositphotos.com/2590737/2940/i/450/depositphotos_29407191-stock-photo-successful-elegant-smiling-mature-casual.jpg',
    },
  },
  {
    id: 4,
    smcs: 670,
    product: {
      name: 'Soja Orgânica',
      weight: '1kg',
      description:
        'Soja produzida sem agrotóxicos e com práticas agrícolas sustentáveis. Rica em proteínas e ideal para uma alimentação natural e saudável, preservando o meio ambiente em cada colheita.',
    },
    location: {
      city: 'Marília',
      state: 'SP',
      country: 'BR',
    },
    profile: {
      name: 'Ana',
      profilePicture:
        'https://i.pinimg.com/736x/4d/c4/b2/4dc4b2acb42aa8e4f8d0ffb42ac44338.jpg',
    },
  },
  {
    id: 5,
    smcs: 900,
    product: {
      name: 'Tomate Orgânico',
      weight: '1kg',
      description:
        'Tomate cultivado sem o uso de químicos, garantindo sabor autêntico e frescor. Produzido com responsabilidade ambiental, mantendo a qualidade e nutrientes dos frutos.',
    },
    location: {
      city: 'Itu',
      state: 'SP',
      country: 'BR',
    },
    profile: {
      name: 'Ricardo',
      profilePicture:
        'https://previdenciarista.com/blog/wp-content/uploads/2024/06/aposentadoria-50-anos-iStock-850764484-18-06-2024-1-scaled.jpg',
    },
  },
  {
    id: 6,
    smcs: 1100,
    product: {
      name: 'Alface Orgânica',
      weight: '500g',
      description:
        'Alface fresca cultivada sem agrotóxicos, com práticas agrícolas responsáveis. Ideal para saladas saudáveis, oferecendo crocância e sabor natural.',
    },
    location: {
      city: 'Brasília',
      state: 'DF',
      country: 'BR',
    },
    profile: {
      name: 'Luana',
      profilePicture:
        'https://static.wixstatic.com/media/15580b_7766bb8a7482464c9fd33ce54ca0ff80~mv2.jpg/v1/fill/w_640,h_628,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/15580b_7766bb8a7482464c9fd33ce54ca0ff80~mv2.jpg',
    },
  },
  {
    id: 7,
    smcs: 800,
    product: {
      name: 'Banana Orgânica',
      weight: '1kg',
      description:
        'Banana cultivada de forma sustentável, com sabor doce e textura macia. Ideal para uma alimentação saudável e rica em nutrientes.',
    },
    location: {
      city: 'Fortaleza',
      state: 'CE',
      country: 'BR',
    },
    profile: {
      name: 'Miguel',
      profilePicture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLcUV2oIO9FaGsUM9dz9gqrandihUmsunMZ77MninKNJPaZl1E5ROIK7bGGX26hrfZXQ&usqp=CAU',
    },
  },
  {
    id: 8,
    smcs: 1500,
    product: {
      name: 'Cenoura Orgânica',
      weight: '1kg',
      description:
        'Cenoura cultivada com respeito ao solo e sem uso de químicos, preservando sua cor vibrante e sabor adocicado. Ideal para uma dieta nutritiva e balanceada.',
    },
    location: {
      city: 'Curitiba',
      state: 'PR',
      country: 'BR',
    },
    profile: {
      name: 'Fernanda',
      profilePicture:
        'https://admin.lucianapepino.com.br/wp-content/uploads/cheerful-middle-aged-woman-with-curly-hair-easy-resizecom.jpg',
    },
  },
];

export default mockSales;
